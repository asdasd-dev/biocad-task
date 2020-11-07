import React, {useState} from 'react';
import '../styles/Report.scss'

export default function Report(props) {
    
    let rows = props.data.map(rowData => {
        return (
            <tr>
                <td>
                    {rowData.date}<br/>{rowData.time}
                </td>
                <td>
                    {rowData.solutions.map(solution => {
                        return <>{solution}<br/></>;
                    })}
                </td>
                <td>
                <span>{rowData.slope}</span> {(rowData.slope > 95 && rowData.slope < 105) ? <img src='success.png'/> : <img src='error.png'/>}
                </td>
                <td>
                    <span>{rowData.offset}</span> {(rowData.offset > -20 && rowData.offset < 20) ? <img src='success.png'/> : <img src='error.png'/>}
                </td>
                <td>
                    {rowData.user}
                </td>
            </tr>
        )
    })

    return (
        <div className="Report">
            <div className="container">
                <p>Calibration report</p>
                <table>
                    <tr>
                        <th>Data</th>
                        <th>Used buffer solutions</th>
                        <th>Slope, %<br/>Norm 95-105</th>
                        <th>Offset, mV<br/>Norm ±(0-20)</th>
                        <th>User</th>
                    </tr>
                    {rows}
                </table>
            </div>
        </div>
    );
}