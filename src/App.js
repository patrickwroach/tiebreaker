import React from "react";
import "./App.scss";
import Header from "./packages/Header";
import Content from "./packages/Content";
import Footer from "./packages/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
