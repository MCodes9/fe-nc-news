// import { useState, useEffect, useContext } from "react";
// import { getUsers } from "../utils/api";
// import { UserContext } from "../context/UserContext";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { setUser } = useContext(UserContext);

//   useEffect(() => {
//     getUsers().then((users) => {
//       setUsers(users);
//       setIsLoading(false);
//     });
//   }, []);

//   if (isLoading) {
//     return <p> ...Loading</p>;
//   }

//   return (
//     <ul>
//       {users.map((user) => {
//         return (
//           <li className="user__card" key={user.username}>
//             <h2>{user.username}</h2>
//             <img src={user.avatar_url} alt={user.username}></img>
//             <button onClick={() => setUser(user)}> User</button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default Users;

import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../context/UserContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext);
  const [isError, setError] = useState(null);

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

  if (isError) {
    return <p>An error occured! {isError.msg}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
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
              Select this user
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
