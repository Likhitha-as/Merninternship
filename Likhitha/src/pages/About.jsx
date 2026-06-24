import { useNavigate } from "react-router-dom";


function About(){

const navigate = useNavigate();


return(

<div className="page">


<h1>About Skill Exchange</h1>


<div className="card">


<p>
Skill Exchange is a platform where users can teach their skills
and learn new skills from others.
</p>


<button onClick={()=>navigate("/register")}>

Next

</button>


</div>


</div>

)

}


export default About;