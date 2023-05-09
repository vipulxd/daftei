import React from 'react';
import styled from "styled-components";


export function Searchbar() {
    const [value, setValue] = React.useState<string>('')
    return (
        <SearchElement
            onChange={(e) => setValue(e.target.value)}
            placeholder={'Search from notes...'}
        />
    )
}

export const SearchElement = styled.input`
  width:30vw;
  height:15px;
  background:transparent;
  box-shadow: #000000 0px 0px 0px 2px inset, rgb(238, 238, 241) 6px -4px 0px -2px, rgb(0, 0, 0) 6px -4px;
  border-radius:2px;
  color:black;
  padding:10px;
  border:0;
`;