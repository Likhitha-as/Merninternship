import { useState } from "react";


function Profile(){


const [edit,setEdit] = useState(false);


const [user,setUser] = useState({

name:"Likhitha",

email:"likhitha@gmail.com",

skills:"React, Java, Python",

learning:"MongoDB"

});



function handleChange(e){

setUser({

...user,

[e.target.name]:e.target.value

});

}



return(

<div className="profile">


<h1>My Profile</h1>



<div className="profile-card">



{
edit ? 

<>

<input
name="name"
value={user.name}
onChange={handleChange}
/>


<input
name="email"
value={user.email}
onChange={handleChange}
/>


<input
name="skills"
value={user.skills}
onChange={handleChange}
/>


<input
name="learning"
value={user.learning}
onChange={handleChange}
/>


<button
onClick={()=>setEdit(false)}
>
Save Profile
</button>


</>


:


<>

<h2>{user.name}</h2>

<p>
Email: {user.email}
</p>


<p>
Skills Offered: {user.skills}
</p>


<p>
Learning: {user.learning}
</p>



<button
onClick={()=>setEdit(true)}
>
Edit Profile
</button>


</>

}



</div>


</div>

)

}


export default Profile;