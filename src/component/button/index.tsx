import React from 'react';


export function Button(props: { onBtnClick?: (e: any) => void, name: string }) {
    return (
        <div className={'light-border light'}
             onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
                 props?.onBtnClick(e)
             }}>
            {props.name}
        </div>
    )
}