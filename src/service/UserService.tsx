// import react from React
import Workout from './WorkoutService';
import Exercise from './ExerciseService';

const baseUrl = 'http://localhost:8080/';

export default interface User {
    username: string;
    password: string;
    email: string;
    firstName?: string;
    lastName?: string;
    bodyWeight?: string;
    height?: string;
    aboutMe?: string;
    workouts?: Workout[];
    exercises?: Exercise[];
}

// Define a UserSort enum
export enum UserSort {
    FIRSTNAME = 'firstName',
    LASTNAME = 'lastName',
    USERNAME = 'username',
    EMAIL = 'email',
    BODYWEIGHT = 'bodyWeight',
    HEIGHT = 'height',
}

export enum UserPageSize {
    FIVE = 5,
    TEN = 10,
    TWENTYFIVE = 25,
    FIFTY = 50,
    ONEHUNDRED = 100,
}


export const getAllUsers = async () => {
    let data: any = [];
    await fetch(baseUrl + '/users/all')
    .then(res => {
        if(res.ok){
            data = res.json();
            console.log("Users fetched successfully");
        }
        else{
            console.log(`There was an error fetching users\nError: ${res.status} ${res.statusText}`);
        }
    })
    .catch(err => {
        console.log(err);
    });
    return data;
}

export const getAllUsersPageable = async (pageNumber: number, pageSize: number, sortBy?: UserSort) => {
    let data: any = [];
    let requestUrl = baseUrl + `api/v2/all?page=${pageNumber}&size=${pageSize}`;
    // if(!sortBy) sortBy = UserSort.username;
    if(sortBy) requestUrl += `&sort=${sortBy}`;

    await fetch(requestUrl)
    .then(res => {
        if(res.ok){
            data = res.json();
            console.log("Users fetched successfully");
        }
        else{
            console.log(`There was an error fetching users\nError: ${res.status} ${res.statusText}`);
        }
    })
    .catch(err => {
        console.log(err);
    });
    return data;
}

export const getUserByUsername = async (username: string) => {
    let data: any = new Map();
    await fetch(`${baseUrl}find/${username}`)
    .then(res => {
        if(res.ok){
            data = res.json();
            console.log("User fetched successfully");
        }
        else{
            console.log(`There was an error fetching user\nError: ${res.status} ${res.statusText}`);
        }
    })
    .catch(err => {
        console.log(err);
    });
    return data;
}

export const addUser = async (user: User) => {
    await fetch(baseUrl + 'user/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            console.log("User added successfully");
        }
        else{
            console.log(`There was an error adding user\nError: ${res.status} ${res.statusText}`);
        }
    })
    .catch(err => {
        console.log(err);
    });
}