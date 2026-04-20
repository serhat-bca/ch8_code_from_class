import User from "../components/User";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      {users.map((u) => (
        <Link to={`/users/${u.id}`}>
          <User user={u} key={u.id} />
        </Link>
      ))}
    </div>
  );
};

export default UserList;
