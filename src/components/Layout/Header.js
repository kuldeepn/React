import React, { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'

const Header = (props) => {
    return (
      <Fragment>
        <header className='header'>
          <h1>Zomato</h1>
          <button>Cart</button>
        </header>
        <div className='mainImg'>
          <img src={mealsImage} alt='Delicious Meals' />
        </div>

      </Fragment>
    );

}

export default Header;