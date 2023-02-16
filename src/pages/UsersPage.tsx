import User, {getAllUsers} from "../service/UserService";
import UserTable from "../components/UserTable";
import {useState} from "react";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  // const getUsers = async () => {
  //   const users = await getAllUsers();
  //   setUsers(users);
  // }

  return (
    <div>
      <h1>Users</h1>
      <UserTable />
    </div>
  )
}

export default UsersPage;