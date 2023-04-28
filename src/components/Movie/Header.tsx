/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from 'react';


function scroll(): void {
  const searchForm = document.getElementById('search-form');
  searchForm?.scrollIntoView({ behavior: 'smooth' });
}

const Header = () => {
  return (
   <div>

   </div>
  );
};

export default Header;
