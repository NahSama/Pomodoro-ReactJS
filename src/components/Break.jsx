import React from 'react'

const Break = () => {
    const [breakLength, setBreakLength] = React.useState(300)

    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60

        if (newBreakLength < 0 ) {
            setBreakLength(0)
        } else {
            setBreakLength(newBreakLength)
        }
    }

    const incrementBreakLengthByOneMinute = () => {
       setBreakLength(breakLength + 60)
    }

    return (
        <div>
            <p id="break-label">Break</p>
            <p id="break-length">{breakLength}</p>
            <button onClick={incrementBreakLengthByOneMinute} id="break-increment">+</button>
            <button onClick={decrementBreakLengthByOneMinute} id="break-decrement">-</button>
        </div>
    )
}

export default Break;
