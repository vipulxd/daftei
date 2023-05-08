import styled, {IStyledComponent} from "styled-components";

export const Dialog: IStyledComponent<'web', any, any> = styled.dialog`
  background-color: #09111b;
  box-shadow:  0 0 10px rgb(163, 207, 167);
  position: absolute;
  z-index: 2;
  top: 10%;
  width: 40vw;
  border: 2px solid rgb(163, 207, 167);
  border-radius: 10px;
  color: white;
`;

export const DialogHeader: IStyledComponent<'web', any, any> = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title: IStyledComponent<'web', any, any> = styled.div`
  color: white;
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