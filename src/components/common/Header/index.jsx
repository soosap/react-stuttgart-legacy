import React from 'react';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import { backgroundDarkRGB, backgroundLight } from '../../../assets/styles/colors';

const Wrapper = styled.div`
  margin: 0px;
  background: rgba(${backgroundDarkRGB}, 0.5)
`;

const Title = styled.h2`
  margin-top: 0;
  margin-left: 0.3rem;
  color: black;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${backgroundLight};
`;

const Brand = styled.div`
  display: flex;
  padding-bottom: 0px;
  margin-bottom: 0px;
  padding-left: 6em; 
`;


export class Header extends React.Component {
  state = { activeItem: 'English' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Wrapper>
        <Menu inverted pointing secondary>
          <Brand>
            <Menu.Item>
              <img className="ui mini image" src={require('../../../assets/images/reactstuttgart@1x.png')} />
              <Title>ReactStuttgart</Title>
            </Menu.Item>
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
