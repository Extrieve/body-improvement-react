import User, {getAllUsers, getAllUsersPageable, UserSort} from "../service/UserService";
import {useEffect, useState} from "react";
import {FC, ReactElement} from "react";

const props = {
  defaultPageNumber: 0,
  pageSizes: [10, 20, 50, 100],
  defaultPageSize: 10,
  defaultSortBy: "username",
}


const UserTable: FC = (): ReactElement => {
  const [users, setUsers] = useState<User[]>([]);

  // const getUsers = async () => {
  //   const users = await getAllUsers();
  //   users.forEach((user: User) => {
  //     if (!user.aboutMe){
  //       user.aboutMe = "No description provided";
  //     }
  //   }
  //   );
  //   setUsers(users);
  // }

  const getUsersPageable = async (pageNumber: number, pageSize: number, sortBy: UserSort = UserSort.USERNAME) => {
    const users = await getAllUsersPageable(pageNumber, pageSize, sortBy).then((res) => {
      console.log(res);
      return res.content;
    });
    setUsers(users);
  }

  useEffect(
    () => {
      // getUsers().then(r => console.log(r));
      getUsersPageable(props.defaultPageNumber, props.defaultPageSize);
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
      {/* Left and right buttons to go to the previous/next page */}

    </div>
  )
}

export default UserTable;