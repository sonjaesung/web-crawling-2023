import React, { Fragment, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import HomeMain from '../components/home/home';
import { useLocation } from 'react-router-dom';

const Home = observer(() => {
  const location = useLocation();

  return <Fragment> {location.pathname === '/' && <HomeMain />}</Fragment>;
});

export default Home;
