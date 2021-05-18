import './Repository.css'

import {User, UserRepository} from '../model/github-model';
import { useEffect, useState } from "react";
import {fetchAllUserRepo,fetchUserProfile} from "../service/GitHubApiService";





function Repository() {
const [repo,setRepo]=useState<UserRepository[]>([])
const [singleUser, setSingleUser] =useState<User|null>(null);
const [selectedName, setSelectedName] = useState("PunchesC");

useEffect(()=>{
  if(selectedName){
  fetchUserProfile(selectedName).then(data=>{
    setSingleUser(data);
  });
} 
}, [selectedName]);
  

useEffect(()=>{
  fetchAllUserRepo(selectedName).then(data=>{
    setRepo(data);
  });
}, []);
  return (
    <div className="Repository">
     <h2>Repository List</h2>
    { repo.length == 0 ?
      <p>Loading data...</p> :
      <ol>
        {/* As usual, render array using .map */}
        {repo.map((userrepo, i) => 
          <li key={i}>{userrepo.name} {userrepo.html_url} {userrepo.description }{userrepo.description} {userrepo.language} {userrepo.push_at}</li>
         
        )}
      </ol> }
    </div>
  )
}

export default Repository;

