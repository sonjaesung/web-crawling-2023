import React, { Component, Fragment, useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // meta 등 head 내 태그 설정
import { inject, observer, useObserver } from 'mobx-react';
import axios from 'axios';
import { Cheerio } from 'cheerio';

const App = observer(() => {
  const [pageData, setPageData] = useState();

  const getPage = () => {
    axios({
      method: 'get',
      url: `/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=가나`,
      withCredentials: true,
    }).then(res => {
      setPageData(res.data);
    });
  };

  useEffect(() => {
    getPage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {console.log(pageData)}

        {pageData && <div dangerouslySetInnerHTML={{ __html: pageData }}></div>}
      </header>
    </div>
  );
});

export default App;
