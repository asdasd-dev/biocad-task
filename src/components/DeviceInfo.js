import React, {useState} from 'react';
import '../styles/DeviceInfo.scss';

export default function DeviceInfo(props) {
    const listItems = props.description.map(e => {
        return (
            <li key={e.name}>
                <span className='info-name'>{e.name}: </span>
                {!e.link ? <span className='info-description'>{e.value}</span> : <a className='info-description' href={e.link}>{e.value}</a>}
            </li>
        );
    });

    return (
        <ul className="DeviceInfo">
            {listItems}
        </ul>
    );
}