/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  item: {
    text: string,
    value: string,
  },
  checked: boolean,
  onChange: (e: Object) => void,
};

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 2.5rem;
  min-height: 2.5rem;
  border-bottom: 1px solid grey;
  cursor: pointer;
`;

// https://codepen.io/CreativeJuiz/pen/BiHzp
const Input = styled.input`
  &[type="checkbox"] {
    display: none;

    + .label-text {
      margin-left: 30px;
    }

    ${''/* Just the checkbox border */}
    &:not(:checked) + .label-text::before,
    &:checked + .label-text::before {
      content: '';
      position: absolute;
      left: 0.25rem;
      width: 20px; height: 20px;
      border: 2px solid #ccc;
      background: #fff;
      border-radius: 4px;
      box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
    }

    ${''/* Checkmark */}
    &:not(:checked) + .label-text::after,
    &:checked + .label-text::after {
      content: '✔';
      position: absolute;
      margin-top: 2px;
      margin-left: 1px;
      left: .3em;
      font-size: 1.3em;
      line-height: 0.8;
      color: #09ad7e;
      transition: all .2s;
    }

    ${''/* Animation */}
    &:not(:checked) + .label-text:after {
      opacity: 0;
      transform: scale(0);
    }

    &:checked + .label-text:after {
      opacity: 1;
      transform: scale(1);
    }

    &:disabled + .label-text::before {
      content: 'disabled';
    }
  }
`;

const CheckListItem = (props: Props) => (
  <Label onChange={props.onChange}>
    <Input type="checkbox" value={props.item.value} checked={props.checked} />
    <div className="label-text">{props.item.text}</div>
  </Label>
);

export default CheckListItem;
