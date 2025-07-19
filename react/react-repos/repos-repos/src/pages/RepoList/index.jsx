import { useParams, useNavigate, Link } from "react-router-dom"

import {
  useEffect
} from 'react'

import {
  useRepos
} from '@/hooks/useRepos'


const RepoList = () => {
  
  const {id} = useParams(); 
  console.log(useParams());
  const navigate = useNavigate();
  // 自定义hooks 只负责渲染
  const {repos,loading,error} = useRepos(id);
  
  useEffect(() =>{
    if(!id.trim()) {
      navigate("/")
      return
    }
  },[])

  if(loading) return (<>Loading....</>);
  if(error) return (<>Error:{error}</>);

  return (
        <>
          <h2>Repositor for {id}</h2>
          {
            repos.map((repo) => (
              <>

              <Link key={repo.id} to={`/users/${id}/repos/${repo.name}`}>
                {repo.name}
              </Link>
              <br/>
              </>
            ))
          }
        </>
    )

}

export default RepoList