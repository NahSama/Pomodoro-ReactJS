import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import React from 'react'

momentDurationFormatSetup(moment)

const TimeLeft = ({
    timerLabel, 
    timeLeft, 
    handleStartStopClick, 
    isStarted, 
    sessionLength,
    handleResetButton }) => {
    
    const formatedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false })

    const children = ({ remainingTime }) => {
        return moment.duration(remainingTime, 's').format('mm:ss', { trim: false })
    }

    return (
        <div>
            <div className="card text-center ">
                <p className="card-header text-white bg-danger mb-3" id="timer-label">Timer </p>
                <div style={{margin: "auto"}} className="card-body">
                    <CountdownCircleTimer
                        key={sessionLength}
                        isPlaying={isStarted}
                        duration={sessionLength}
                        colors={[
                        ['#c30232', 0.33],
                        ['#F7B801', 0.33],
                        ['#A30000', 0.33],
                        ]}
                    >
                        {children}
                    </CountdownCircleTimer>
                </div>
                <div>
                    <button className="btn btn-danger col-md-6 " onClick={handleStartStopClick} id="start_stop">{isStarted?"Stop":"Start"}</button>
                    <button className="btn btn-danger col-md-6 float-right" onClick={handleResetButton} id="reset">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default TimeLeft;
