import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./Spinner";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Row from "./Row";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Home = () => {
  const navigate = useNavigate();
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const fetchUpcoming = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=2c2c3f093c896e6fc0c867bebf01a1fe"
    );
    const result = await response.json();
    const data = result.results;
    setUpcomingMovies(data);
  };

  const fetchNowPlaying = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=2c2c3f093c896e6fc0c867bebf01a1fe"
    );
    const result = await response.json();
    const data = result.results;
    setNowPlayingMovies(data);
  };

  const fetchPopular = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2c2c3f093c896e6fc0c867bebf01a1fe"
    );
    const result = await response.json();
    const data = result.results;
    setPopularMovies(data);
  };

  const fetchTopRated = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=2c2c3f093c896e6fc0c867bebf01a1fe"
    );
    const result = await response.json();
    const data = result.results;
    setTopRatedMovies(data);
  };

  useEffect(() => {
    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const playHandler = () => {
    navigate("/video");
  };

  const leftShiftHandler = (arrayLen) => {
    index === 0 ? setIndex(arrayLen - 1) : setIndex(index - 1);
  };

  const rightShiftHandler = (arrayLen) => {
    index === arrayLen - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Header />
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: popularMovies[index]
              ? `url(${`${imgUrl}/${popularMovies[index].poster_path}`})`
              : "rgb(16, 16, 16)",
          }}
          key={index}
        >
          {popularMovies[index] && (
            <h1>{popularMovies[index].original_title}</h1>
          )}
          {popularMovies[index] && <p>{popularMovies[index].overview}</p>}

          <div>
            <button onClick={playHandler}>
              <BiPlay /> Play{" "}
            </button>
            <button>
              My List <AiOutlinePlus />{" "}
            </button>
          </div>
          <div className="left-right">
            <button
              id="left"
              onClick={() => leftShiftHandler(popularMovies.length)}
            >
              <FiChevronLeft />
            </button>
            <button
              className=""
              onClick={() => rightShiftHandler(popularMovies.length)}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <Row title={"Upcoming"} arr={upcomingMovies} imgUrl={imgUrl} />
        <Row title={"Now Playing"} arr={nowPlayingMovies} imgUrl={imgUrl} />
        <Row title={"Popular"} arr={popularMovies} imgUrl={imgUrl} />
        <Row title={"Top Rated"} arr={topRatedMovies} imgUrl={imgUrl} />
      </section>
    </>
  );
};

export default Home;
