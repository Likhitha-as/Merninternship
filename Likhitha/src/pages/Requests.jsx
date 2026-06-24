import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Requests(){

const navigate = useNavigate();


const skill = localStorage.getItem("requestedSkill");


const [requests,setRequests] = useState(
[
  {
    skill: skill || "No Skill",
    status: "Pending"
  }
]
);



function acceptRequest(index){

let updated = [...requests];

updated[index].status = "Accepted";

setRequests(updated);

}



function rejectRequest(index){

let updated = [...requests];

updated[index].status = "Rejected";

setRequests(updated);

}



function startLearning(){

navigate("/dashboard");

}



return(

<div>


<h1>Skill Exchange Requests</h1>



{
requests.map((req,index)=>(


<div className="card" key={index}>


<h2>
{req.skill} Exchange Request
</h2>


<p>
Status: {req.status}
</p>



{
req.status === "Pending" &&

<>

<button
onClick={()=>acceptRequest(index)}
>
Accept
</button>


<button
onClick={()=>rejectRequest(index)}
>
Reject
</button>

</>

}



{
req.status === "Accepted" &&

<>

<p>
Request accepted. Start learning!
</p>


<button onClick={startLearning}>
Start Learning
</button>


</>

}



{
req.status === "Rejected" &&

<p>
Request rejected.
</p>

}



</div>


))

}



</div>

)

}


export default Requests;