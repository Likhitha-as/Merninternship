import { useNavigate } from "react-router-dom";


function Home(){

const navigate = useNavigate();


return(

<div className="page">


<h1>Welcome to Skill Exchange</h1>


<div className="card">


<h2>Learn. Share. Grow.</h2>


<p>
Connect with people, exchange skills and improve together.
</p>


<button onClick={()=>navigate("/about")}>

Next

</button>


</div>


</div>

)

}


export default Home;