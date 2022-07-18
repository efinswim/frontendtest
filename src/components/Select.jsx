import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.select`
  width: 240px;

  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  border-radius: 3px;
`;

const Select = (props) => {
  return (
    <Wrapper name={props.name}>
      {props.options.map((item) => (
        <option value={item} key={Symbol(item).toString()}>
          {item}
        </option>
      ))}
    </Wrapper>
  );
};

export default Select;
