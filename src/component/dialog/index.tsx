import React from 'react';
import {Button, Dialog as D, DialogBody, DialogHeader, Icon, Title} from "./styles";

export function Dialog(props: { show: boolean, onClose?: () => void ,children?:JSX.Element}): JSX.Element {
    return (
        <React.Fragment>
            <D open={props.show}>
                <DialogHeader>
                    <Title><h2>Import templates</h2></Title>
                    <Button onClick={() => {
                        props.onClose()
                    }}>
                        <Icon src={'/assets/icons/close.svg'} alt={'close'} />
                    </Button>
                </DialogHeader>
                <DialogBody>{props.children}</DialogBody>
            </D>
        </React.Fragment>
    )
}
