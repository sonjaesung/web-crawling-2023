import React from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import routes from './routes';
import { Helmet } from 'react-helmet'; // meta 등 head 내 태그 설정
import { observer } from 'mobx-react';
import TitleHeader from './components/common/TitleHeader';

const App = observer(() => {
  return (
    <div className="body_wrap">
      <TitleHeader />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} exact={true} />
        ))}
      </Routes>
    </div>
  );
});

export default App;
