import Workout from "./WorkoutService";

export default interface Exercise{
    exerciseId: string;
    name: string;
    description: string;
    rating: number;
    zonedDateTime: string;
    workouts: Workout[];
}