// import React
import React from 'react';
import User, {getAllUsersPageable, getUsersByUsername, getUsersByUsernamePageable, UserSort, UserPageSize} from "../service/UserService";

interface TableProps {
  initialPageNumber: number,
  initialPageSize: UserPageSize,
}

interface TableState {
    users: User[],
    search: string,
    pageNumber: number,
    pageSize: UserPageSize,
    sortBy: UserSort,
}

class UserTable extends React.Component<TableProps, TableState> {


    constructor(props: TableProps) {
        super(props);
        this.state = {
            users: [],
            search: '',
            pageNumber: props.initialPageNumber,
            pageSize: props.initialPageSize,
            sortBy: UserSort.USERNAME,
        }
    }

    componentDidMount() {
        const controller = new AbortController();
        const signal = controller.signal;
        this.getUsersPageable(signal, this.state.pageNumber, this.state.pageSize);
    }

    getUsersPageable = async (signal: AbortSignal, pageNumber: number, pageSize: number, sortBy?: UserSort) => {
        const users = await getAllUsersPageable(signal, pageNumber, pageSize, sortBy).then((res) => {
            console.log(res);
            return res.content;
        });
        this.setState({users: users});
    }

    getUsersLikeUsername = async (username: string) => {
        const users = await getUsersByUsername(username).then((res) => {
            console.log(res);
            return res;
        });
        this.setState({users: users});
    }

    getUsersLikeUsernamePageable = async (username: string, pageNumber: number, pageSize: number, sortBy?: UserSort) => {
        const controller = new AbortController();
        const signal = controller.signal;
        const users = await getUsersByUsernamePageable(signal, username, pageNumber, pageSize, sortBy).then((res) => {
            console.log(res);
            return res.content;
        });
        this.setState({users: users});
    }

    turnPage = async (flip: number) => {
        const controller = new AbortController();
        const signal = controller.signal;
        this.setState({pageNumber: this.state.pageNumber + flip});
        this.getUsersPageable(signal, this.state.pageNumber + flip, this.state.pageSize, this.state.sortBy);
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user) => (
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
                <button onClick={() => this.turnPage(-1)}>Previous</button>
                <button onClick={() => this.turnPage(1)}>Next</button>
            </div>
        );
    }
}
