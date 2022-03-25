import React from "react";

const Home = () => {
  return (
    <>
      <section className="section-one">
        <h1>MyMovies.com</h1>
      </section>

      <header className="banner">
        <h1>
          Watch <br /> something <br /> incredible.
        </h1>
      </header>

      <form action="submit" className="form">
        <label htmlFor="">Search Movie:</label> <br />
        <input type="text" /> <br />
        <button type="submit">Search</button>
      </form>

      <div className="main-section">
        <h3>Movie Categories</h3>
        <h5>Action/Thriller</h5>
        <main className="main-one">
          <div>Movie #1</div>
          <div>Movie #2</div>
          <div>Movie #3</div>
          <div>Movie #4</div>
        </main>

        <h5>Horror</h5>
        <main className="main-two">
          <div>Movie #1</div>
          <div>Movie #2</div>
          <div>Movie #3</div>
          <div>Movie #4</div>
        </main>
      </div>
    </>
  );
};

export default Home;
