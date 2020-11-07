import { render } from '@testing-library/react';
import React, {useState} from 'react';
import '../styles/FilterDevices.scss'

export default function FilterDevices(props) {

    let [filterText, filterTextChange] = useState('');

    return (
        <div className="FilterDevices">
            <p>Enter inventory number, guid or bims id</p>
            <form onSubmit={e => {
                // submitting data
                e.preventDefault();
            }}>
                <input type="text" value={filterText} onChange={e => filterTextChange(e.target.value)} />
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
}