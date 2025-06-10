import { useState , useRef } from 'react'
import './App.css'

function App() {
  // 火山引擎tts 配置文件 
  const TOKEN = '7czy6HEcU4v0zntdvLS-10ON5dUDAWbB';
  const APP_ID = '2526425405';
  const CLUSTER_ID = 'volcano_tts';
  // 代码的可读性高于一切
  const [prompt, setPrompt] = useState('大家好，我是黄新天');
  // react use 开头 ref hook 可以获取 DOM 元素
  const audioPlayer = useRef(null);
  console.log(audioPlayer,'///')
  const playMusic = () => {
    console.log(audioPlayer,'/**//')
    console.log('play music')
    audioPlayer.current.play();
  }
  const generateAudio = () => {
    // 声音模型
     const voiceName = "zh_famale_shuangkuaisisi_moon_bigtts";
     const endpoint = "/tts/api/v1/tts"  //tts服务（文字转声音） api ll, 服务地址;
     const header = {
       "Content-Type": "application/json",
       "Authorization": `Bearer;${TOKEN}`,
     }
    //  const voiceName = "zh_male_sunwukong_mars_bigtts";
  }

  console.log(audioPlayer,'///')
  return (
    <div className="container">
      <div>Prompt</div>
      <button onClick={generateAudio}>生成并播放</button>
      <textarea 
        className='input'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      >
        
      </textarea>
      <audio ref={audioPlayer} src="/sounds/snare.wav"></audio>
      {/* <button onClick={playMusic}>播放</button> */}
    </div>
  )
}

export default App
