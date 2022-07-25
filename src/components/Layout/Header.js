import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Zomato</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className="mainImage">
        <img src={mealsImage} alt="Delicious Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
