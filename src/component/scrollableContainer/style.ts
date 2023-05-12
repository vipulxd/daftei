import styled, {IStyledComponent} from "styled-components";


export const ScrollDiv: IStyledComponent<'web', any, any> = styled.div`
  min-height:300px;
  overflow-y: scroll;
`;