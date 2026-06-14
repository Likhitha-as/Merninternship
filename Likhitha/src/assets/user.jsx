import { useContext } from "react";
import UserContext from "./userContext";
 
function User() {
 const name = useContext(UserContext);
 
 return <h1>Welcome {name}</h1>;
}
 
export default User;
 