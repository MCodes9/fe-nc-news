import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../context/UserContext";
import ErrorPage from "./ErrorPage";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, []);

  if (error) {
    return <ErrorPage msg={error.msg} status={error.status} />;
  }
  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <ul className="user">
      {users.map((user) => {
        return (
          <li className="userCard" key={user.username}>
            <h2>{user.username}</h2>
            <button
              className="button"
              onClick={() => {
                setUser(user);
              }}
            >
              Login {user.username}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
