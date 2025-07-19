import {
    useState,
    useEffect
} from 'react'
import {
    GlobalContext
} from '@/context/GlobalContext'
import { useContext } from 'react'
import {
    getRepos
} from '@/api/repos'

// 将响应式业务逻辑抽离到hooks中
export const useRepos = (id) => {
    const {state,dispatch} = useContext(GlobalContext);
    useEffect(() => {
        (async () => {
            try {
                // loading
                dispatch({
                    type: 'FETCH_START'
                })
                // 获取数据
                const res = await getRepos(id);
                console.log(res);
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: res.data
                })
            } catch(err) {
                // 获取失败
                dispatch({
                    type: 'FETCH_ERROR',
                    payload: err.message
                })
            }
        }
        )()
    },[])

  
    return state
}