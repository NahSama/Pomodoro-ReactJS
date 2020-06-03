import React from 'react'

const Session = () => {
    const [sessionLength, setSessionLength] = React.useState(300)
    return (
        <div>
            <p id="session-label">Session Length</p>
            <button id="session-increment"> </button>
            <button id="session-decrement"> </button>
        </div>
    )
}

export default Session;
