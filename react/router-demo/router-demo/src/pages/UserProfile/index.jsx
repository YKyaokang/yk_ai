import {
    useEffect
}from 'react'

import {
    useParams
} from 'react-router-dom'


const UserProfile = () =>{
    const { id } = useParams();

    
    return(
        <>
        UserProfile { id }
        </>
    )
}

export default UserProfile