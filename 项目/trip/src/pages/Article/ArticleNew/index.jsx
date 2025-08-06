import styles from './new.module.css'
import { 
    useState,
    useRef
} from 'react'
import {
    useNavigate,
} from 'react-router-dom'

const ArticleNew = () => {
    const [title, setTitle] = useState('')
    return (
        <>
        <input type="text"
        placeholder='请输入标题'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.textareaWrapper}>
            <textarea className={`${styles.input} ${styles.textarea}`}></textarea>
        </div>
        </>
    )
}

export default ArticleNew