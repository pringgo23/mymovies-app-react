import logo from "./logo.svg";
import "./css/App.css";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Home.jsx";
import Detail from "./pages/Details.jsx";
import Favorites from "./pages/Favorites.jsx";
import React from "react";

class App extends React.Component {
  state = {
    activePage: "Home",
  };

  render() {
    return (
      <div id="movies">
        <Navbar
          currentPage={(page) => {
            this.setState({
              activePage: page,
            });
          }}
        />

        <>
          {this.state.activePage === "Home" && (
            <Homepage posts={this.state.posts} />
          )}
          {this.state.activePage === "Detail" && <Detail />}
          {this.state.activePage === "Favorites" && <Favorites />}
        </>
      </div>
    );
  }
}

export default App;
