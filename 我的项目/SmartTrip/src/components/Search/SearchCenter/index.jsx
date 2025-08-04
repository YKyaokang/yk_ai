import { useEffect } from 'react'
import styles from './searchcenter.module.css'
import useSearchStore from '@/store/useSearchStore'
import { DeleteO } from '@react-vant/icons'
const SearchCenter = () => {
    const { searchHistory,clearSearchHistory,hotList,getHostList} = useSearchStore()
    
    const clearHistory = () => {
        clearSearchHistory()
    }

     useEffect(() => {
        getHostList()
     },[])

    return (
        <>
        {
                searchHistory.length > 0 &&
                (
                    <div className={styles.List}>
                    <div className={styles.List_header}>
                        <span>历史搜索</span>
                        <DeleteO  fontSize="15px" onClick={clearHistory}/>
                    </div>
                    <div className={styles.List_content}>
                    {searchHistory.map((item) => (
                        <div key={item.id} className={styles.List_item}>
                            {item.keyword}
                        </div>
                    ))}
                    </div>
                </div>
                ) }

                <div className={styles.List}>
                    <div className={styles.List_header}>
                        <span>热门推荐</span>
                    </div>
                    <div className={styles.List_content}>
                        {hotList.map((item) => (
                            <div key={item.id} className={styles.List_item}>
                                {item.city}
                            </div>
                        ))}
                    </div>
                </div>

        </>
    )
}
export default SearchCenter