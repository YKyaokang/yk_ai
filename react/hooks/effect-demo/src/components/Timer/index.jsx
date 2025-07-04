import {
    useState,
    useEffect
} from 'react'

const Timer = () => {
    const [time,setTime] = useState(0);

    console.log('组件函数执行')
    console.log('JSX编译')
    useEffect(() => {
        console.log('组件渲染完了')
        const interval = setInterval(()=>{
            setTime(prevTime => prevTime +1 )
        },1000)
        return ()=>{
            console.log("组件卸载了")
            clearInterval(interval) //如果不清除的话  可能会带来内存泄漏
        }
    },[]);


    return (
        <>
        已经运行{time}秒
        </>
    )
}

export default Timer;