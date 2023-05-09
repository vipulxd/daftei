import React from 'react';
import styled, {IStyledComponent} from "styled-components";


export function Button(props: { onBtnClick?: (e: any) => void, name: string }) : JSX.Element {
    return (
        <ButtonContainer
            onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
                props?.onBtnClick(e)
            }}>
            {props.name}
        </ButtonContainer>
    )
}

const ButtonContainer: IStyledComponent<'web', any, any> = styled.div`
  font-size: 0.8rem;
  box-shadow: #000000 0px 0px 0px 2px inset,rgb(238, 238, 241) 7px -4px 0px -2px,rgb(0, 0, 0) 6px -4px;
  padding: 4px;
`;