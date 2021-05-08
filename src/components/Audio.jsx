import React from 'react'

const Audio = ({audioElement}) => {

    const [audio, setAudio] = React.useState([
    "//onlineclock.net/audio/options/default.mp3", 
    "//onlineclock.net/audio/options/falling-bomb.mp3", 
    "//onlineclock.net/audio/options/cuckoo-clock.mp3", 
    "//onlineclock.net/audio/options/rooster.mp3"]) 

    const [selectedAudio, setSeletedAudio] = React.useState(0)

    const updateSelectedAudio = (event) => {
        setSeletedAudio(event.target.value)
    }

    return (
        <div className="text-white">
            <label for="ringtone" >Choose your ringtone</label>
            <select className="form-control" value={selectedAudio} onChange={updateSelectedAudio} >
                <option value="0">Default</option>
                <option value="1">Falling Bomb</option>
                <option value="2">Cuckoo Clock</option>
                <option value="3">Rooster</option>
            </select>
            <audio  key={audio[selectedAudio]} id="beep" ref={audioElement}>
                <source src={audio[selectedAudio]} type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Audio;
