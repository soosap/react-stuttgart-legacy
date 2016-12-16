import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { compose } from 'recompose';

import styles from './About.scss';

class About extends React.Component {
  state = {
    awesomeSauce: '',
    technologies: [],
  }

  componentDidMount = () => {
    this.props.firebase.syncState('technologies', {
      context: this,
      state: 'technologies',
      asArray: true,
    });
  }

  addTechnology = (e) => {
    e.preventDefault();

    this.setState({
      technologies: this.state.technologies.concat([this.state.awesomeSauce]),
      awesomeSauce: '',
    })
  }

  render() {
    return (
      <div className="ui basic yellow segment">
        <h1>About</h1>
        <p>This application uses a number of awesome technologies!</p>

        <form className="ui form" onSubmit={this.addTechnology}>
          <div className="fields">
            <div className="eight wide field">
              <label>Add technology:</label>
              <input
                type="text"
                placeholder="React, Redux, Relay, Rebase, Relax, ..."
                onChange={e => this.setState({ awesomeSauce: e.target.value })}
              />
            </div>
          </div>
          <button className="ui primary inverted button" type="submit">Submit</button>
        </form>

        {this.state.technologies.length > 0 && <div className="ui basic segment">
          <h4 className="ui horizontal divider header">
            <i className="settings icon" />
            Tech stack
          </h4>

          <ul className="ui list">
            {this.state.technologies.map(technology => <li key={technology} className="item">{technology}</li>)}
          </ul>
        </div>}
      </div>
    );
  }
}

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(About);
