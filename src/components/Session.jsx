import moment from 'moment'
import React from 'react'

const Session = ({
    sessionLength,
    setSessionLength,
    incrementSessionLengthByOneMinute,
    decrementSessionLengthByOneMinute }) => {
 
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes()
    return (
        <div>
            <div className="card text-center">
                <p className="card-header" id="session-label">Session Length</p>
                <span className="card-body" id="session-length">{sessionLengthInMinutes} {sessionLengthInMinutes>1?"minutes":"minute"}</span>
                <div>
                    <button className="btn btn-info col-md-6" onClick={decrementSessionLengthByOneMinute} id="session-decrement">-</button>
                    <button className="btn btn-info col-md-6" onClick={incrementSessionLengthByOneMinute} id="session-increment">+</button>
                </div>
            </div>
        </div>
    )
}

export default Session;
