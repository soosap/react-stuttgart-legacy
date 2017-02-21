import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

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
