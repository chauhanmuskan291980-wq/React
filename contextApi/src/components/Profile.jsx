import { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) {
    return <h1>Not Logged In</h1>;
  }

  return (
    <div>
      <h2>Profile: {user.username}</h2>
      <h1>More Component</h1>
    </div>
  );
}

export default Profile;
