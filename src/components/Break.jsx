import moment from 'moment'
import React from 'react'

const Break = ({
    breakLength,
    setBreakLength,
    incrementBreakLengthByOneMinute,
    decrementBreakLengthByOneMinute }) => {

    const breakLengthInMinutes = moment.duration(breakLength, 's').asMinutes()
    return (
        <div>
            <div className="card text-center">
                <p className="card-header"id="break-label">Break Length</p>
                <span className="card-body" id="break-length">{breakLengthInMinutes} {breakLengthInMinutes>1?"minutes":"minute"}</span>
                <div>
                    <button className="btn btn-info col-md-6" onClick={decrementBreakLengthByOneMinute} id="break-decrement">-</button>
                    <button className="btn btn-info col-md-6" onClick={incrementBreakLengthByOneMinute} id="break-increment">+</button>
                </div>
            </div>
        </div>
    )
}

export default Break;
