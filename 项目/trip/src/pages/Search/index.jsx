import {
    useState,
    useEffect,
    memo
} from 'react'
import SearchBox from '@/components/SearchBox'
import useSearchStore from '@/store/useSearchStores.js'
import styles from './search.module.css'

const HotListItems = memo((props) => {
    const {hostList} = props;   
    return (
        <div className={styles.hot}>
            <h1>热门推荐</h1>
            {
                hostList.map((item) => ((
                    <div key={item.id} className={styles.item}>
                    {item.city}
                    </div> 
                )))
            }
        </div>
    )
})

const Search = () => {
    const [query,setQuery] = useState("")
    const { 
        hotList,
        setHotList,
        suggestList ,
        setSuggestList
    } = useSearchStore();

    useEffect(() => {
        setHotList();
    },[])

    // 单向数据流
    // 反复生成 useCallback
    const handleQuery = (query) => {
        // 纯纯为了到达 搜索建议显示与不显示的效果
        setQuery(query);
        // 只用它才能 api 请求
        if (!query) {
            return;
        }
        setSuggestList(query)
    }

    const suggestListStyle = {
       display:query == "" ? 'none' : 'block'
    }
    
    return (
        <>
            <div className={styles.container}>
            <SearchBox handleQuery={handleQuery} />
            {/* 维护性 */}
            <HotListItems hostList={hotList} />
            <div className={styles.list} style={suggestListStyle}> 
            {
                suggestList.map(item => (
                    <div key={item} className={styles.item}>
                    {item} 
                    </div>
                ))
            }
            </div>
            </div>
        </>
    )
}

export default Search