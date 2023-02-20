import User, {getAllUsersPageable, getUsersByUsername, getUsersByUsernamePageable,UserSort, UserPageSize} from "../service/UserService";
import {useEffect, useState, FC, ReactElement} from "react";

interface TableProps {
  initialPageNumber: number,
  initialPageSize: UserPageSize,
}


const UserTable: FC<TableProps> = ({initialPageNumber, initialPageSize}): ReactElement => {

  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');

  const [pageNumber, setPageNumber] = useState<number>(initialPageNumber);
  const [pageSize, setPageSize] = useState<UserPageSize>(initialPageSize);
  const [sortBy, setSortBy] = useState<UserSort>(UserSort.USERNAME);

  useEffect(
    () => {
      const controller = new AbortController();
      const signal = controller.signal;
      getUsersPageable(signal, pageNumber, pageSize);
      return () => controller.abort();
    },[]
  );

  const getUsersPageable = async (signal: AbortSignal, pageNumber: number, pageSize: number, sortBy?: UserSort) => {
    const users = await getAllUsersPageable(signal, pageNumber, pageSize, sortBy).then((res) => {
      console.log(res);
      return res.content;
    });
    setUsers(users);
  }

  const getUsersLikeUsername = async (username: string) => {
    const users = await getUsersByUsername(username).then((res) => {
      console.log(res);
      return res;
    });
    setUsers(users);
  }

  const getUsersLikeUsernamePageable = async (username: string, pageNumber: number, pageSize: number, sortBy?: UserSort) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const users = await getUsersByUsernamePageable(signal, username, pageNumber, pageSize, sortBy).then((res) => {
      console.log(res);
      return res.content;
    });
    setUsers(users);

    return () => controller.abort();
  }


  const turnPage = async (flip: number) => {
    const controller = new AbortController();
    const signal = controller.signal;
    setPageNumber(pageNumber + flip);
    getUsersPageable(signal ,pageNumber + flip, pageSize);
  }


  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for users" 
        value={search}
        onChange={(e) => {setSearch(e.target.value);}} 
      />
      <button onClick={() => getUsersLikeUsername(search)}>Search</button>
      {/* Search for users with username containing the input */}
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