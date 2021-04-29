import { useHistory } from "react-router-dom";
const Logout = () => {
    let history = useHistory();
    localStorage.removeItem("token");
     history.push("/");
    return null;
}

export default Logout;