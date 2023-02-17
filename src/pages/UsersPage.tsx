import User, {getAllUsers, UserPageSize} from "../service/UserService";
import UserTable from "../components/UserTable";
import {useState} from "react";

const UsersPage = () => {
  // TODO: Implement filtering options for user table, allow user to select how many users to display per page
  return (
    <div>
      <h1>Users</h1>
      <UserTable initialPageNumber={0} initialPageSize={UserPageSize.ONEHUNDRED} />
    </div>
  )
}

export default UsersPage;