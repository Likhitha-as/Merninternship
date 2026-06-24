import { useNavigate } from "react-router-dom";


function Dashboard(){

const navigate = useNavigate();


return(

<div className="dashboard">


<h1>Skill Exchange Dashboard</h1>


<div className="dashboard-card">


<h2>Welcome Learner 👋</h2>

<p>
Manage your skills, requests and learning journey here.
</p>


</div>



<div className="dashboard-card">


<h2>My Skills</h2>

<p>
React Development
</p>

<p>
Java Programming
</p>

<button
onClick={()=>navigate("/skills")}
>
View Skills
</button>


</div>




<div className="dashboard-card">


<h2>Exchange Requests</h2>

<p>
Your skill exchange requests
</p>


<button
onClick={()=>navigate("/requests")}
>
View Requests
</button>


</div>




<div className="dashboard-card">


<h2>My Profile</h2>

<p>
Update your profile details and skills.
</p>


<button
onClick={()=>navigate("/profile")}
>
Profile
</button>


</div>



</div>

)

}


export default Dashboard;