// import react from React
import React from 'react';

const baseUrl = 'http://localhost:8080/user/';

export default interface Workout{
    
}

export default interface Exercise{
    
}

export default interface User {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    bodyWeight: string;
    height: string;
    aboutMe: string;
    workouts: Workout[];
    // exercises: Exercise[];
}


export const getAllUsers = async () => {
    let data: any = [];
    await fetch(baseUrl + 'all')
    .then(res => {
        if(res.ok){
            data = res.json();
        }
        else{
            console.log("Error fetching users");
        }
    });
    return data;
}