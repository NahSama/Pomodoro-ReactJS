import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import React from 'react'

momentDurationFormatSetup(moment)

const TimeLeft = ({
    timerLabel, 
    timeLeft, 
    handleStartStopClick, 
    isStarted, 
    handleResetButton }) => {
    
    const formatedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false })
    return (
        <div>
            <div className="card text-center">
                <p className="card-header" id="timer-label">{timerLabel} </p>
                <span className="card-body " id="time-left">{formatedTimeLeft}</span>
                <div>
                    <button className="btn btn-info col-md-6 " onClick={handleStartStopClick} id="start_stop">{isStarted?"Stop":"Start"}</button>
                    <button className="btn btn-info col-md-6 float-right" onClick={handleResetButton} id="reset">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default TimeLeft;
