import "./App.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./requests";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
    {/* navbar */}
    <Nav/>
    {/* banner */}
    <Banner/>
      <Row title="NETFLIX ORIGINALS" isLargeRow fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
