import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Aside from "./components/layout/Aside";
import Post from "./components/helpers/Post";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Nav />
      </div>
      <main className="container">
        <Main />
        <div className="row g-5">
          <div className="col-md-8">
            <Post />
            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary rounded-pill" href="#">
                Older
              </a>
              <a className="btn btn-outline-secondary rounded-pill disabled">
                Newer
              </a>
            </nav>
          </div>
          <Aside />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
