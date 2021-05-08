import React from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import Audio from "./components/Audio";
import "./App.css";

function App() {
    const audioElement = React.useRef(null);
    // Session State
    const [sessionLength, setSessionLength] = React.useState(1500);

    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength - 60;

        if (newSessionLength > 0) {
            setSessionLength(newSessionLength);
        }
    };

    const incrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength + 60;

        if (newSessionLength <= 60 * 60) {
            setSessionLength(newSessionLength);
        }
    };

    // Break State
    const [breakLength, setBreakLength] = React.useState(300);

    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength > 0) {
            setBreakLength(newBreakLength);
        }
    };

    const incrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength + 60;

        if (newBreakLength <= 60 * 60) {
            setBreakLength(breakLength + 60);
        }
    };

    // TimeLeft
    const [currentSessionType, setCurrentSessionType] = React.useState(
        "Session"
    ); // session or break
    const [intervalId, setIntervalId] = React.useState(null);
    const [timeLeft, setTimeLeft] = React.useState(sessionLength);

    React.useEffect(() => {
        setTimeLeft(sessionLength);
        setCurrentSessionType("Break");
        if (isStarted) {
            handleStartStopClick();
        }
    }, [sessionLength]);

    React.useEffect(() => {
        if (timeLeft === 0) {
            audioElement.current.play();

            if (currentSessionType === "Session") {
                setCurrentSessionType("Break");
                setTimeLeft(breakLength);
            } else if (currentSessionType === "Break") {
                setCurrentSessionType("Session");
                setTimeLeft(sessionLength);
            }
        }
    }, [timeLeft, breakLength, sessionLength]);

    const isStarted = intervalId != null;

    const handleStartStopClick = () => {
        if (isStarted) {
            // if we are in started mode:
            // we want to stop the timer
            // clearInterval
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            // if we are in stopped mode:
            // decrement timeleft by one every secon (1000ms)
            // to do this we'll use setInterval
            const newIntervalId = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    const newTimeLeft = prevTimeLeft - 1;
                    if (newTimeLeft >= 0) {
                        return newTimeLeft;
                    }
                });
            }, 1000);

            setIntervalId(newIntervalId);
        }
    };

    const handleResetButton = () => {
        // clear the timeout interval
        clearInterval(intervalId);
        // set the intevalId null
        setIntervalId(null);
        // set the currentSessionType to 'Session'
        setCurrentSessionType("Session");
        // reset the session length to 25mins
        setSessionLength(60 * 25);
        // reset the break length to 25mins
        setBreakLength(60 * 5);
        // reset the timer to 25mins
        setTimeLeft(sessionLength);
        // reset audio
        audioElement.current.load();
    };

    return (
        <div className="App">
            <div className="row">
                <div className="col-md-4 ">
                    <Break
                        breakLength={breakLength}
                        setBreakLength={setBreakLength}
                        incrementBreakLengthByOneMinute={
                            incrementBreakLengthByOneMinute
                        }
                        decrementBreakLengthByOneMinute={
                            decrementBreakLengthByOneMinute
                        }
                    />
                </div>
                <div className="col-md-4">
                    <TimeLeft
                        timerLabel={currentSessionType}
                        timeLeft={timeLeft}
                        sessionLength={sessionLength}
                        handleStartStopClick={handleStartStopClick}
                        isStarted={isStarted}
                        handleResetButton={handleResetButton}
                    />
                </div>
                <div className="col-md-4">
                    <Session
                        sessionLength={sessionLength}
                        setSessionLength={setSessionLength}
                        incrementSessionLengthByOneMinute={
                            incrementSessionLengthByOneMinute
                        }
                        decrementSessionLengthByOneMinute={
                            decrementSessionLengthByOneMinute
                        }
                    />
                </div>
            </div>
            <Audio audioElement={audioElement} />
        </div>
    );
}

export default App;
