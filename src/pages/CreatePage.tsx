import User, {addUser} from "../service/UserService";
import { useState } from "react";
import UserRegistrationForm from "../components/UserRegistrationForm";

const CreatePage = () => {

    return(
        <div>
            <h1>Create User</h1>
            <UserRegistrationForm />
        </div>
    )
}