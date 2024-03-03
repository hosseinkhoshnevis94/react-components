import React from "react";
import "./PizzaMenu.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";



function PizzaMenu({data}) {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={data} />
      <Footer openHour={8} closeHour={22} />
    </div>
  );
}












export default PizzaMenu
