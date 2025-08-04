import styles from './searchicons.module.css'
import { list } from './list'
const SearchIcons = () => {
    // 阻止触摸事件冒泡到父元素
    const handleTouchStart = (e) => {
        e.stopPropagation();
    };

    const handleTouchMove = (e) => {
        e.stopPropagation();
    };

    return (
        <>
        <div 
            className={styles['scroll-container']} 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className={styles.container}>
                {
                    list.map((item,index) => (
                        <div className={styles.item} key={index}>
                            <svg className={styles.icon}>
                                <use xlinkHref={`#${item.iconName}`}></use>
                            </svg>
                            &nbsp;
                            <span>{item.name}</span>
                        </div>
                    ))
                }
               
            </div>
        </div>
        </>
    )
}
export default SearchIcons