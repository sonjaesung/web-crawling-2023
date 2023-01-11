import React from 'react';
import { observer } from 'mobx-react';
import NavBar from './NavBar';

const TitleHeader = observer(() => {
  return (
    <div className="header">
      <div className="header_top">타이틀 영역</div>
      <div className="main_menu">
        <NavBar />
      </div>
    </div>
  );
});

export default TitleHeader;
