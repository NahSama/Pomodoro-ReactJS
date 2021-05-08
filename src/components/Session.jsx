import moment from 'moment'
import React from 'react'
import FlipNumbers from 'react-flip-numbers'

const Session = ({
    sessionLength,
    setSessionLength,
    incrementSessionLengthByOneMinute,
    decrementSessionLengthByOneMinute }) => {
 
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes()
    return (
            <div className="card h-100 text-center">
                <p className="card-header text-white bg-danger mb-3" id="session-label">Session</p>
                <span className="card-body align-items-center d-flex justify-content-center" id="session-length"><FlipNumbers
                        height={30}
                        width={30}
                        color="red"
                        background="white"
                        play
                        perspective={500}
                        numbers={String(sessionLengthInMinutes)}
                    />
                    <span className="text-dark">{sessionLengthInMinutes > 1 ? "minutes" : "minute"}</span>
                </span>
                <div>
                    <button className="btn btn-danger col-md-6" onClick={decrementSessionLengthByOneMinute} id="session-decrement">-</button>
                    <button className="btn btn-danger col-md-6" onClick={incrementSessionLengthByOneMinute} id="session-increment">+</button>
                </div>
            </div>
    )
}

export default Session;
