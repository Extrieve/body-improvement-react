import User, {getAllUsers, getAllUsersPageable, UserSort, UserPageSize} from "../service/UserService";
import {useEffect, useState} from "react";
import {FC, ReactElement} from "react";

type TableProps = {
  initialPageNumber: number,
  initialPageSize: UserPageSize,
}


const UserTable: FC<TableProps> = ({initialPageNumber, initialPageSize}): ReactElement => {

  const [users, setUsers] = useState<User[]>([]);

  // TODO: Finish implementing pagination
  const [pageNumber, setPageNumber] = useState<number>(initialPageNumber);
  const [pageSize, setPageSize] = useState<UserPageSize>(initialPageSize);
  const [sortBy, setSortBy] = useState<UserSort>(UserSort.USERNAME);

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
  
  useEffect(
    () => {
      // getUsers().then(r => console.log(r));
      getUsersPageable(pageNumber, pageSize);
    },[]
  );

  const getUsersPageable = async (pageNumber: number, pageSize: number, sortBy?: UserSort) => {
    const users = await getAllUsersPageable(pageNumber, pageSize, sortBy).then((res) => {
      console.log(res);
      return res.content;
    });
    setUsers(users);
  }

  const turnPage = async (flip: number) => {
    setPageNumber(pageNumber + flip);
    getUsersPageable(pageNumber + flip, pageSize);
  }

  return (
    <div>
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
      <button onClick={() => turnPage(-1)}>Previous</button>
      <button onClick={() => turnPage(1)}>Next</button>
    </div>
  )
}

export default UserTable;