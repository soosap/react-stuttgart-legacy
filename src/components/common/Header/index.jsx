import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

const Wrapper = styled.div`
  margin: 0px;
  background: #EEEEEE;
  background-opacity:0.1;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-left: 0.3rem;
  color: black;
  font-size: 1.4rem;
  font-weight: 400;
`;

const Brand = styled(Menu.Item)`
  display: flex;
  padding-bottom: 0px; 
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
            <img className="ui mini image" src={require('../../../assets/images/reactstuttgart@1x.png')} />
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

export default Header;
