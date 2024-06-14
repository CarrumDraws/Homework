import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();

  const redirect = () => {
    // normal navigation if you don't need to pass data
    // navigate('/')

    // based on history stack, -1 means go back to the previous route
    // navigate(-1);

    // pass data to the next route via location.state
    navigate("/", { state: { data: 1 } });
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Params: {params.username}</p>
      <button onClick={redirect}>Return to Home</button>
    </div>
  );
};

export default Profile;
