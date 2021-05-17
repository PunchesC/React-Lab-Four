import {User, UserRepository} from '../model/github-model';
import { useEffect, useState } from "react";
import {fetchUserProfile} from "../service/GitHubApiService";
import './GitHubSummary.css';
import UserLookup from './UserLookup';


fetchUserProfile("PunchesC").then(d=>console.log(d));

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
        <h2>User Profile</h2>
        <label>Enter a GitHub username: 
          <input type="text" value={selectedName} onChange={e => setSelectedName(e.target.value)}/>
          </label>
        { singleUser?
        <div>
          <p>Name: {singleUser.name}</p>
          <p>UserName: {singleUser.login}</p>
          <p>avater: {singleUser.avatar_url}</p>
          <p>UrlLink: {singleUser.html_url}</p>
        </div>:
        <p>Noone found</p>}
    </div>
  )
}

export default GitHubSummary;