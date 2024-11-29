import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>MyFinance</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/transactions">Transações</Link>
      </nav>
    </header>
  );
};

export default Header;