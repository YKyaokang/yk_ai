import {
    createContext,
    useReducer
} from 'react'
import {
    repoReducer
} from '@/reducers/repoReudcer'
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const initialState = {
        repos: [],
        loading: false,
        error: null
    }

    const [state,dispatch] = useReducer(repoReducer,initialState)

    return (
        // state 应用状态 
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}