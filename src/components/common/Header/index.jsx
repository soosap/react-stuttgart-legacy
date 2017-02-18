import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import { logoutUser } from 'actions/users';

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-left: 0.3rem;
  color: black;
  font-size: 1.8rem;
  font-weight: 400;
`;

const Brand = styled(Menu.Item)`
  display: flex;
`;

export class Header extends React.Component {
  state = { activeItem: 'English' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Wrapper>
        <Menu pointing secondary>
          <Brand>
            <img className="ui mini image" src={require('../../../images/reactstuttgart@1x.png')} />
            <Title>ReactStuttgart</Title>
          </Brand>

          <Menu.Menu position='right'>
            <Menu.Item name='Deutsch' active={activeItem === 'Deutsch'} onClick={this.handleItemClick} />
            <Menu.Item name='English' active={activeItem === 'English'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // Pick pieces of application state needed by <Header /> component
  authenticated: state.auth.authenticated,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    // Pick actions needed by <Header /> component
    logoutUser,
  }, dispatch),
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Header);
