import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Pages from "./components/pages.jsx";

class App extends Component {
  state = {
    options: [
      { id: 1, title: "About Me", link: "#aboutme", isSelected: false },
      { id: 2, title: "Skills", link: "#skills", isSelected: false },
      { id: 3, title: "Exp.", link: "#exp", isSelected: false },
      { id: 4, title: "Works", link: "#works", isSelected: false },
      { id: 5, title: "Contact", link: "#contact", isSelected: false }
    ]
  };
  handleSwitchPage = id => {
    const options = this.state.options.map(o => {
      if (o.id === id) o.isSelected = true;
      else o.isSelected = false;
      return o;
    });
    console.log({ options });
    this.setState({ options });
  };
  render() {
    return (
      <div>
        <NavBar onSP={this.handleSwitchPage} options={this.state.options} />
        <img src="https://picsum.photos/seed/picsum/600/700/" alt="Avatar" />
        <Pages options={this.state.options} />
      </div>
    );
  }
}

export default App;
