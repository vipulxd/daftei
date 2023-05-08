import React from 'react';
import styled, {IStyledComponent} from "styled-components";


export function Button(props: { onBtnClick?: (e: any) => void, name: string }) {
    return (
        <ButtonContainer className={'light-border light'}
             onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
                 props?.onBtnClick(e)
             }}>
            {props.name}
        </ButtonContainer>
    )
}

const ButtonContainer  : IStyledComponent<'web', any, any> = styled.div`
font-size: 0.8rem;
`;