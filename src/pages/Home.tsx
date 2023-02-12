const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="home-box">
        <h2>
          Find your perfect workout routine by exploring our user generated content.
        </h2>
        <a href="/users">
        <button className="btn explore">Explore</button>
        </a>
      </div>
    </div>
  )
}

export default Home;