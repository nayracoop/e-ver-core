import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Event from "./Event";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="App-content">
        <Event />
        <Footer />
      </main>
    </div>
  );
};

export default App;
