import React from "react";
import "./styles/App.css";

// start import components
import NavbarComponent from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import Favorites from "./pages/Favorites.jsx";
// end import components

class App extends React.Component {
  state = {
    activePage: "Home",
  };

  render() {
    return (
      <>
        <NavbarComponent
          currentPage={(page) => {
            this.setState({
              activePage: page,
            });
          }}
        />

        <div className="p-5">
          {this.state.activePage === "Home" && <Home />}
          {this.state.activePage === "Detail" && <Detail />}
          {this.state.activePage === "Favorite" && <Favorites />}
        </div>
      </>
    );
  }
}

export default App;
