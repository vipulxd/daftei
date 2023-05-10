import styled, {IStyledComponent} from "styled-components";


export const ShadowContainer :IStyledComponent<'web', any, any> = styled.div`
  box-shadow: #000000 0px 0px 0px 2px inset, rgb(238, 238, 241) 7px -4px 0px -1px, rgb(0, 0, 0) 8px -4px;
  margin:10px;
`;