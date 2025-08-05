import { useState } from 'react'
import { Search as SearchIcon } from '@react-vant/icons';
import { Arrow } from '@react-vant/icons';
import styles from './search.module.css'
import SearchBox from '@/components/Search/SearchBox'
import SearchIcons from '@/components/Search/SearchIcons'
import SearchCenter from '@/components/Search/SearchCenter'
import SearchCard from '@/components/Search/SearchCard'
import useSearchStore from '@/store/useSearchStore'

const Search = () => {
    const [query,setQuery] = useState("")
    const { suggestList,getSearchList,loading } = useSearchStore()
    const HandleData = (data) => {
        setQuery(data);
        if(!data){
            return;
        }
        getSearchList(data)
    }

    const suggestListStyle = {
        display:query == "" ? 'none' : 'block'
     }

    return (
        <div>
            <div className={styles.header}>
                <SearchBox handleData={HandleData} />
            </div>
            
            <div style={suggestListStyle} className={styles.SearchSuggest}> 
                <div className={styles.SearchContent}>
                    {loading && <div className={styles.Loading}></div>}
                    {
                        suggestList.map(item => (
                            <div key={item} className={styles.SearchSuggest_item} >
                                <span>
                                <SearchIcon />
                                </span>
                                &nbsp;
                                <div className={styles.text}>
                                    {item}
                                </div>
                               
                                <span>
                                <Arrow />
                                </span> 
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className={styles.content}>
                <SearchIcons />
                <SearchCenter />
                <SearchCard />
            </div>
        </div>
    )
}
export default Search