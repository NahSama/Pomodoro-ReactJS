import moment from "moment";
import React from "react";
import FlipNumbers from "react-flip-numbers";

const Break = ({
    breakLength,
    setBreakLength,
    incrementBreakLengthByOneMinute,
    decrementBreakLengthByOneMinute,
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
    return (
            <div className="card text-center h-100 d-flex">
                <p className="card-header text-white bg-danger mb-3" id="break-label">
                    Break
                </p>
                <span className="card-body align-items-center d-flex justify-content-center" id="break-length">
                
                    <FlipNumbers
                        height={30}
                        width={30}
                        color="red"
                        background="white"
                        play
                        perspective={500}
                        numbers={String(breakLengthInMinutes)}
                    />
                    <span className="text-dark">{breakLengthInMinutes > 1 ? "minutes" : "minute"}</span>

                </span>
                <div>
                    <button
                        className="btn btn-danger col-md-6"
                        onClick={decrementBreakLengthByOneMinute}
                        id="break-decrement"
                    >
                        -
                    </button>
                    <button
                        className="btn btn-danger col-md-6"
                        onClick={incrementBreakLengthByOneMinute}
                        id="break-increment"
                    >
                        +
                    </button>
                </div>
            </div>
    );
};

export default Break;
