import User, {getAllUsers, getAllUsersPageable, UserSort, UserPageSize} from "../service/UserService";
import {useEffect, useState} from "react";
import {FC, ReactElement} from "react";

type TableProps = {
  pageNumber: number,
  pageSize: UserPageSize,
  sortBy?: UserSort,
}


const UserTable: FC<TableProps> = ({pageNumber, pageSize, sortBy}): ReactElement => {

  const [users, setUsers] = useState<User[]>([]);

  // TODO: Finish implementing pagination
  // const [pageNumber, setPageNumber] = useState<number>(pageNumber);
  // const [pageSize, setPageSize] = useState<UserPageSize>(pageSize);
  // const [sortBy, setSortBy] = useState<UserSort>(sortBy);

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

  const getUsersPageable = async (pageNumber: number, pageSize: number, sortBy?: UserSort) => {
    const users = await getAllUsersPageable(pageNumber, pageSize, sortBy).then((res) => {
      console.log(res);
      return res.content;
    });
    setUsers(users);
  }

  useEffect(
    () => {
      // getUsers().then(r => console.log(r));
      getUsersPageable(pageNumber = 0, pageSize = UserPageSize.ONEHUNDRED);
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
      <button onClick={() => getUsersPageable(pageNumber - 1, pageSize, sortBy)}>Previous Page</button>
      <button onClick={() => getUsersPageable(pageNumber + 1, pageSize, sortBy)}>Next Page</button>
    </div>
  )
}

export default UserTable;