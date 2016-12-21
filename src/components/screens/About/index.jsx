import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { createTechnology } from 'actions';

import styles from './About.scss';

class About extends React.Component {
  static propTypes = {
    createTechnology: PropTypes.func.isRequired,
    technologies: PropTypes.array.isRequired,
  }

  state = {
    technology: { title: '' },
  }

  addTechnology = (e) => {
    e.preventDefault();

    this.props.createTechnology(this.state.technology);

    this.setState({ technology: { title: '' } })
  }

  render() {
    return (
      <div className="ui basic segment">
        <h1>About</h1>
        <p>This application uses a number of awesome technologies!</p>

        <form className="ui form" onSubmit={this.addTechnology}>
          <div className="fields">
            <div className="eight wide field">
              <label>Add technology:</label>
              <input
                type="text"
                placeholder="React, Redux, Relay, Rebase, Relax, ..."
                onChange={e => this.setState({ technology: { title: e.target.value } })}
                value={this.state.technology.title}
              />
            </div>
          </div>
          <button className="ui primary inverted button" type="submit">Submit</button>
        </form>

        {this.props.technologies.length > 0 && <div className="ui basic segment">
          <h4 className="ui horizontal divider header">
            <i className="settings icon" />
            Tech stack
          </h4>

          <ul className="ui list">
            {this.props.technologies.map((technology, index) => {
              return <li key={index} className="item">{technology.title}</li>;
            })}
          </ul>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // Pick pieces of application state needed by <About /> component
  technologies: state.technologies,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    // Pick actions needed by <About /> component
    createTechnology,
  }, dispatch),
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(About);
