import User, {getAllUsers} from "../service/UserService";
import {useState} from "react";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const users = await getAllUsers();
    setUsers(users);
  }

  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}