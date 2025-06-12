import { useState , useRef } from 'react'
import './App.css'

function App() {
  
  const audioPlayer = useRef(null);
  const playMusic = () => {
    audioPlayer.current.play();
  }
  return (
    <>
      <audio ref={audioPlayer} src="/sounds/snare.wav"></audio>
      <button onClick={playMusic}>播放</button> 
    </> 
  )
}

export default App
