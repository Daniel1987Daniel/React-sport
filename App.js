import React from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";

export default function App() {
  return(
    <div>
      <Nav />
      <Card
        img="./img/sfusa.jpg"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lesson with Shanale Flanagan"
        price={136}
      />
    </div>
  )
}; 