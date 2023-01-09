import React, { Fragment, useEffect, useState } from 'react';
import { useObserver, observer } from 'mobx-react';
import HomeMain from '../components/home/home';

const Home = observer(() => {
  const { pathname } = window.location;
  return <Fragment> {pathname === '/' && <HomeMain />}</Fragment>;
});

export default Home;
