import {User, UserRepository} from '../model/github-model';
import { useEffect, useState } from "react";
import {fetchUserProfile} from "../service/GitHubApiService";
import './GitHubSummary.css';





function GitHubSummary() {
const [selectedName, setSelectedName] = useState("PunchesC");
const [singleUser, setSingleUser] =useState<User|null>(null);

useEffect(()=>{
  if(selectedName){
  fetchUserProfile(selectedName).then(data=>{
    setSingleUser(data);
  });
} else {
  setSingleUser(null);
}
}, [selectedName]);


console.log(selectedName);

  return (
    <div className="GitHubSummary">
        <label>Enter a GitHub username: 
          <input type="text" value={selectedName} onChange={e => setSelectedName(e.target.value)}/>
          </label>
        { singleUser?
        <div>
          <p>{singleUser.name}</p>
          <p>{singleUser.login}</p>
          <img className="photo" src={singleUser.avatar_url}/>
          <a href={singleUser.html_url}>Check out their other works!</a>
        </div>:
        <p>Noone found</p>}
    </div>
  )
}

export default GitHubSummary;