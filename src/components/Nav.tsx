const Nav = () => {
  return (
    <nav>
      <ul className={'navlist'}>
      <h1>Workout Tracker</h1>
        <li><a href="/">Home</a></li>
        <li><a href="/users/create">Register</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/workouts">Workouts</a></li>
        <li><a href="/exercises">Exercises</a></li>
      </ul>
    </nav>
  )
}

export default Nav;