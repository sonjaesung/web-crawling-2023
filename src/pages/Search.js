import React, { Fragment, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import SearchMain from '../components/search/search';
import { useLocation } from 'react-router-dom';

const Search = observer(() => {
  const location = useLocation();

  return <Fragment> {location.pathname === '/search' && <SearchMain />}</Fragment>;
});

export default Search;
