import SearchBox from '@/components/SearchBox'
import useSearchStore from '@/store/useSearchStores.js'

const Search = () => {
    const { suggestList , setSuggestList } = useSearchStore();
    // 单向数据流
    // 反复生成 useCallback
    const handleQuery = (query) => {
        // 只用它才能 api 请求
        console.log('debounce后' , query)
        if (!query) {
            return ;
        }
        setSuggestList(query)
    }

    
    return (
        <>
            <div className={styles.container}>
            <SearchBox handleQuery={handleQuery} />
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