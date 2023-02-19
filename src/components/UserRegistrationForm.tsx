import {useReducer, FC, ReactElement} from "react";
import User, {addUser} from "../service/UserService";
import FormEntry from "./FormEntry";

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
        // Add user is a Promise that returns a status code
        addUser(user).then((res) => {
          console.log(res );
          if (res === 201) {
              // Alert user that user was successfully created and clear form
              alert('User successfully created!');
              updateUser({username: '', password: '', firstName: '', lastName: '', email: '', bodyWeight: '', height: '', aboutMe: ''});
            } else{
              // Alert user that user was not created
              alert('User not created!');
            }
        });
      }

    return (
        <form className="user-form">
            <FormEntry 
              label={'Username'} 
              type={'text'} 
              id={'username'} 
              name={'username'} 
              value={user.username} 
              onChange={(e) => updateUser({...user, username: e.target.value})} 
            />

            <FormEntry
              label={'Password'}
              type={'password'}
              id={'password'}
              name={'password'}
              value={user.password}
              onChange={(e) => updateUser({...user, password: e.target.value})}
            />

            <FormEntry
              label={'First Name'}
              type={'text'}
              id={'firstName'}
              name={'firstName'}
              value={user.firstName ? user.firstName : ''}
              onChange={(e) => updateUser({...user, firstName: e.target.value})}
            />

            <FormEntry
              label={'Last Name'}
              type={'text'}
              id={'lastName'}
              name={'lastName'}
              value={user.lastName ? user.lastName : ''}
              onChange={(e) => updateUser({...user, lastName: e.target.value})}
            />

            <FormEntry
              label={'Email'}
              type={'text'}
              id={'email'}
              name={'email'}
              value={user.email}
              onChange={(e) => updateUser({...user, email: e.target.value})}
            />

            <FormEntry
              label={'Body Weight'}
              type={'text'}
              id={'bodyWeight'}
              name={'bodyWeight'}
              value={user.bodyWeight ? user.bodyWeight : ''}
              onChange={(e) => updateUser({...user, bodyWeight: e.target.value})}
            />

            <FormEntry
              label={'Height'}
              type={'text'}
              id={'height'}
              name={'height'}
              value={user.height ? user.height : ''}
              onChange={(e) => updateUser({...user, height: e.target.value})}
            />

            <FormEntry
              label={'About Me'}
              type={'text'}
              id={'aboutMe'}
              name={'aboutMe'}
              value={user.aboutMe ? user.aboutMe : ''}
              onChange={(e) => updateUser({...user, aboutMe: e.target.value})}
            />

            <button onClick={handleSubmit} className="btn">Submit</button>
        </form>
    );
}

export default UserRegistrationForm;