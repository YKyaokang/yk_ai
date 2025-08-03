import { 
    useState,
    useEffect,
    useRef,
    useMemo,
    memo
 } from 'react'

import styles from './searchbox.module.css'
import useSearchStore from '@/store/useSearchStore'
import { ArrowLeft,Close } from '@react-vant/icons'
import { debounce } from '@/utils/debounce'

function SearchBox(props) {
    const { updateSearchHistory } = useSearchStore()
    let iptRef = useRef(null)
    const [text,setText] = useState('')
    const { handleData } = props

    const textChange = (e) => {
        const val = e.currentTarget.value
        setText(val)
    }

    const clearText = () => {
        setText('')
        iptRef.current.value = ''
        iptRef.current.focus()
    }

    const handleDataDebounce = useMemo(() => debounce(handleData, 500),[])
    const displayStyle = {display: text ? 'block' : 'none'}

    useEffect(() => {
        handleDataDebounce(text)
    }, [text])

    const searchClick = () => {
        if(text.trim() !== ''){
            updateSearchHistory(text)
        }   
    }

    return (
        <>
        <div className={styles.header_left}>
            <ArrowLeft  color="#6c6d72" />
            </div>
            <div className={styles.header_center}>
                <input 
                type="text" 
                placeholder="九江本地游·景点·酒店" 
                ref={iptRef}
                className={styles.header_input}
                onChange={textChange}
                />
                <Close onClick={clearText} style={displayStyle} className={styles.header_close}/>
            </div>
            
            <button className={styles.header_search} onClick={searchClick}>
                搜索
            </button>
        </>
    )
}

export default memo(SearchBox)