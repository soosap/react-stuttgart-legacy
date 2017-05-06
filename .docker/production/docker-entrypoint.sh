#!/bin/bash
set -e

# usage: file_env VAR [DEFAULT]
#    ie: file_env 'XYZ_DB_PASSWORD' 'example'
# (will allow for "$XYZ_DB_PASSWORD_FILE" to fill in the value of
#  "$XYZ_DB_PASSWORD" from a file, especially for Docker's secrets feature)
file_env() {
	local var="$1"
	local fileVar="${var}_FILE"
	local def="${2:-}"
	if [ "${!var:-}" ] && [ "${!fileVar:-}" ]; then
		echo >&2 "error: both $var and $fileVar are set (but are exclusive)"
		exit 1
	fi
	local val="$def"
	if [ "${!var:-}" ]; then
		val="${!var}"
	elif [ "${!fileVar:-}" ]; then
		val="$(< "${!fileVar}")"
	fi
	export "$var"="$val"
	unset "$fileVar"
}

for SECRET in CONTENTFUL_SPACE_ID CONTENTFUL_API_KEY MEETUP_API_KEY
do
  file_env $SECRET
	if [ -z "$SECRET" ]; then
    # The - option suppresses leading tabs but *not* spaces. :)
    cat >&2 <<-'EOWARN'
    ****************************************************
    WARNING: No ${SECRET} has been set.
           This will allow anyone with access to the
           Postgres port to access your database. In
           Docker's default configuration, this is
           effectively any other container on the same
           system.
           Use "-e ${SECRET}=password" to set
           it in "docker run".
    ****************************************************
		EOWARN
  fi
done

exec "$@"
