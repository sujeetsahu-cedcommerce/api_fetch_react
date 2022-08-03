import React, { useEffect, useState } from 'react'

function FetchData() {
    const[post,setpost] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        
        .then(
            (res) => res.json()
        )

        .then(json => {
            // console.log(json);
            setpost(json)
        },[])

        // .catch(err => console.log(err))
    })

  return (
    <div>
      <ul>
        {
          post.map((user)=>(
           <>
             <h6>user id:</h6><span>{user.id}</span><br/>
             <h6>name:</h6><span>{user.name}</span><br/>
             <h6>User name:</h6><span>{user.username}</span><br/>
             <h6>email:</h6><span>{user.email}</span><br/>
             <h6>address:</h6><span>{user.adress}</span>
              {
                Object.keys(user.address).map(function (key,index){
                  if(key!=='geo'){
                    return (
                      <p>
                      {key} : {user.address[key]}
                    </p>
                    )
                  }
                  else{
                   
                     return(
                       <>
                       <p>Lat: {user.address.geo.lat}</p>
                       <p>Long: {user.address.geo.lng}</p>
                       </>
                     )
                  }
                })
              }
             <h6>Phone No.</h6><span>{user.phone}</span><br/>
             <h6>Website:</h6><span>{user.website}</span><br/>
             <h6>Company:</h6>
               {Object.keys(user.company).map(function (key,index) {
                return (
                  <p>
                    {key} : {user.company[key]}
                  </p>
                );
              })}
             
             <hr></hr>
           </>
          ))
        }
      </ul>
    </div>
  )
}

export default FetchData