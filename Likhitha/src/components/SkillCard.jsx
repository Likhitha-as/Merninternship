import { useNavigate } from "react-router-dom";


function SkillCard({name,description}){

const navigate = useNavigate();


function exchangeSkill(){

localStorage.setItem(
"requestedSkill",
name
);


navigate("/requests");

}


return(

<div className="card">

<h3>{name}</h3>

<p>{description}</p>


<button onClick={exchangeSkill}>
Request Exchange
</button>


</div>

)

}


export default SkillCard;