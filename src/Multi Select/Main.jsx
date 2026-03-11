import React, { useEffect, useState } from 'react'
import './style.css'
import Pill from './Pill';
const Main = () => {
  const [search, setSearch] = useState("");
  const [suggession, setSuggession] = useState([])
  const [selectedUser,setSelectedUser]=useState([]);
  const [selectedUserSet,setSelectedUserSet]=useState(new Set());

  const handleUser=(user)=>{
    setSelectedUser([...selectedUser,user]);
    setSelectedUserSet(new Set([...selectedUserSet,user.email]))
    setSearch("");
    setSuggession([])
  }

  const handleRemoveUser=(user)=>{
    const updatedUser=selectedUser.filter((selectedUser)=>selectedUser.id!=user.id) 
    setSelectedUser(updatedUser);

    const updatedEmails=new Set(selectedUser);
    updatedEmails.delete(user.email)
    setSelectedUserSet(updatedEmails)

  }
  useEffect(()=>{
     const fetchData=()=>{
    if(search.trim()===""){
      setSuggession([]);
      return;
    }
     fetch(`https://dummyjson.com/users/search?q=${search}`)
     .then((res)=>res.json())
     .then((data)=>setSuggession(data))
     .catch((err)=>console.log(err));
  }
    fetchData();
    console.log(selectedUserSet)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])
  return (
  <div className='user-search-container'>
    <div className='user-search-input'>
    {
      selectedUser.map((user)=>(
          <Pill key={user.email}
           image={user.image}
           text={`${user.firstName} ${user.lastName}`}
           onclick={()=>handleRemoveUser(user)}
           />
      ))
    }
      <input type='text'
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Search For a user....'/>

      <ul className='suggestions-list'>
        {suggession?.users?.map((user,index)=>{
          return !selectedUserSet.has(user.email)?(
            <li key={user.email} onClick={()=>handleUser(user)}>
              <img 
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <span>{user.firstName} {user.lastName}</span>
            </li>
          ):<div key={index}></div>
        })}
      </ul> 
    </div>
    </div>
  )
}

export default Main