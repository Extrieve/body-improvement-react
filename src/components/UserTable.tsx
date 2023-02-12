import User, {getAllUsers} from "../service/UserService";
import {useEffect, useState} from "react";
import {FC, ReactElement} from "react";

const UserTable: FC = (): ReactElement => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const users = await getAllUsers();
    users.forEach(user => {
      if (!user.aboutMe){
        user.aboutMe = "No description provided";
      }
    }
    );
    setUsers(users);
  }

  useEffect(
    () => {
      getUsers().then(r => console.log(r));
    },[]
  );

  return (
    <div>
      <h1>Users</h1>
      <table className={'user-table'}>
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Body Weight</th>
            <th>Height</th>
            <th>About Me</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.bodyWeight}</td>
              <td>{user.height}</td>
              <td>{user.aboutMe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable;