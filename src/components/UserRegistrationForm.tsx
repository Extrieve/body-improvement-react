import {useReducer, FC, ReactElement} from "react";
import User, {addUser} from "../service/UserService";

const UserRegistrationForm: FC = (): ReactElement => {

    // const [username, setUsername] = useState<string>('');
    // const [password, setPassword] = useState<string>('');
    // const [firstName, setFirstName] = useState<string>('');
    // const [lastName, useLastName] = useState<string>('');
    // const [email, setEmail] = useState<string>('');
    // const [bodyWeight, setBodyWeight] = useState<string>('');

    const [user, updateUser] = useReducer((prev: User, next: User) => {
        return {...prev, ...next};
    }, {username: '', password: '', firstName: '', lastName: '', email: '', bodyWeight: '', height: '', aboutMe: ''});

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addUser(user);
    }


    return (
        <>
          <form>
              <label htmlFor={'username'}>Username</label>
              <input 
                type={'text'} 
                id={'username'} 
                name={'username'} 
                value={user.username} 
                onChange={(e) => updateUser({...user, username: e.target.value})} />

              <label htmlFor={'password'}>Password</label>
              <input
                type={'password'}
                id={'password'}
                name={'password'}
                value={user.password}
                onChange={(e) => updateUser({...user, password: e.target.value})} />

              <label htmlFor={'firstName'}>First Name</label>
              <input
                type={'text'}
                id={'firstName'}
                name={'firstName'}
                value={user.firstName}
                onChange={(e) => updateUser({...user, firstName: e.target.value})} />

              <label htmlFor={'lastName'}>Last Name</label>
              <input
                type={'text'}
                id={'lastName'}
                name={'lastName'}
                value={user.lastName}
                onChange={(e) => updateUser({...user, lastName: e.target.value})} />
              
              <label htmlFor={'email'}>Email</label>
              <input
                type={'text'}
                id={'email'}
                name={'email'}
                value={user.email}
                onChange={(e) => updateUser({...user, email: e.target.value})} />

              <label htmlFor={'bodyWeight'}>Body Weight</label>
              <input
                type={'text'}
                id={'bodyWeight'}
                name={'bodyWeight'}
                value={user.bodyWeight}
                onChange={(e) => updateUser({...user, bodyWeight: e.target.value})} />

              <label htmlFor={'height'}>Height</label>
              <input
                type={'text'}
                id={'height'}
                name={'height'}
                value={user.height}
                onChange={(e) => updateUser({...user, height: e.target.value})} />

              <label htmlFor={'aboutMe'}>About Me</label>
              <input
                type={'text'}
                id={'aboutMe'}
                name={'aboutMe'}
                value={user.aboutMe}
                onChange={(e) => updateUser({...user, aboutMe: e.target.value})} />

              <button onClick={handleSubmit}>Submit</button>
          </form>
        </>
    )
}

export default UserRegistrationForm;