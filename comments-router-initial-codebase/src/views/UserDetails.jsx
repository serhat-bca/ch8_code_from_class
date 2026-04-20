import { useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
  const id = useParams().id;
  const user = users.find((u) => u.id == id);
  return (
    <div>
      <h2>Account Details</h2>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Number of Comments: {user.numberOfComments}</div>
    </div>
  );
};

export default UserDetails;
