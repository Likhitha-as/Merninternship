import SkillCard from "../components/SkillCard";


function Skills(){

return(

<div>

<h1>Available Skills</h1>


<SkillCard
name="React"
description="Frontend Development"
/>


<SkillCard
name="Python"
description="Programming"
/>


<SkillCard
name="Java"
description="Backend Development"
/>


</div>

)

}


export default Skills;