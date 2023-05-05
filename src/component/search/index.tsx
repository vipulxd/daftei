import React from 'react';
import {style} from "../search/search.style";


export function Searchbar() {
    const [value, setValue] = React.useState<string>('')
    return (
        <input
            style={style.input}
            onChange={(e) => setValue(e.target.value)}
            placeholder={'Search from notes...'}
        />
    )
}