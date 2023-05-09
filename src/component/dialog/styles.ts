import styled, {IStyledComponent} from "styled-components";

export const Dialog: IStyledComponent<'web', any, any> = styled.dialog`
  background-color: #eeeef1;
  position: absolute;
  z-index: 2;
  top: 10%;
  width: 40vw;
  border-radius: 2px;
  box-shadow: #000000 0px 0px 0px 2px inset, rgb(238, 238, 241) 7px -4px 0px -1px, rgb(0, 0, 0) 8px -4px;
  border:none;
`;

export const DialogHeader: IStyledComponent<'web', any, any> = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title: IStyledComponent<'web', any, any> = styled.div`
  color: black;
`;
export const Button: IStyledComponent<'web', any, any> = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DialogBody: IStyledComponent<'web', any, any> = styled.div`

`;
export const Icon: IStyledComponent<'web', any, any> = styled.img`
  height: 14px;
  width: 20px;
`;