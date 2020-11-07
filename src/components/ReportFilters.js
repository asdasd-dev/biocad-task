import React, {useState} from 'react';
import '../styles/ReportFilters.scss';

export default function ReportFilters(props) {

    const [selectedDays, setSelectedDays] = useState("30");
    const [selectedKind, setSelectedKind] = useState("1");

    return (
        <form className="ReportFilters">
            <select value={selectedDays} onChange={e => setSelectedDays(e.target.value)}>
                <option value="1">1 day</option>
                <option value="30">1 month</option>
                <option value="365">1 year</option>
            </select>
            <div onChange={e => setSelectedKind(e.target.value)}>
                <p><input type="radio" name="reportKind" value="1" checked={"1" == selectedKind}/><label>Calibration</label></p>
                <p><input type="radio" name="reportKind" value="2" checked={"2" == selectedKind}/><label>Measuring</label></p>
                <p><input type="radio" name="reportKind" value="3" checked={"3" == selectedKind}/><label>Using</label></p>
            </div>
            <button type="submit" onClick={e => {
                // submitting data
                e.preventDefault();
            }}>Generate report</button>
        </form>
    );
}