/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  item: {
    text: string,
  },
  checked: boolean,
  onChange: () => void,
};

const Input = styled.input`

`;

const CheckListItem = (props: Props) => (
  <div>
    <Input
      type="checkbox"
      name="todo"
      value={props.item.text}
      checked={props.checked}
      onChange={props.onChange}
    />
    <label htmlFor="todo">{props.item.text}</label>
  </div>
);

export default CheckListItem;
