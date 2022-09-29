import logo from "./logo.svg";
import "./App.css";
import Header from "./components/pages/Header";
import Nav from "./components/pages/Nav";
import Post from "./components/pages/Post";
import Main from "./components/pages/Main";
import Feature from "./components/pages/Feature";
import Footer from "./components/pages/Footer";
import Aside from "./components/pages/Aside";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Nav />
      </div>
      <main className="container">
        <Main />
        <Feature />
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
