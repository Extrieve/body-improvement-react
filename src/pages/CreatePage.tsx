import User, {addUser} from "../service/UserService";
import { useState } from "react";

const CreatePage = () => {
    const [user, setUser] = useState<User>({} as User);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addUser(user);
    }

    return(
        <div>
            <form action="submit" />
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}