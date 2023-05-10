import React from 'react';
import styled, {IStyledComponent} from "styled-components";
import {ShadowContainer} from "../shadowContainer";


export function Button(props: { onBtnClick?: (e: any) => void, name: string }) : JSX.Element {
    return (
       <ShadowContainer>
        <ButtonContainer
            onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
                props?.onBtnClick(e)
            }}>
            {props.name}
        </ButtonContainer>
       </ShadowContainer>

    )
}

const ButtonContainer: IStyledComponent<'web', any, any> = styled.div`
  font-size: 0.8rem;
  padding: 6px;
`;