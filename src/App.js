import React, { Component, Fragment, useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import routes from './routes';
import { Helmet } from 'react-helmet'; // meta 등 head 내 태그 설정
import { inject, observer, useObserver } from 'mobx-react';

const App = observer(() => {
  return (
    <div className="body_wrap">
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
});

export default App;
