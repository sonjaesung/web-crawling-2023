import React, { Component, Fragment, useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import routes from './routes';
import { Helmet } from 'react-helmet'; // meta 등 head 내 태그 설정
import { inject, observer, useObserver } from 'mobx-react';
import axios from 'axios';
import { load } from 'cheerio';

const App = observer(() => {
  const [pageData, setPageData] = useState();
  const [newSongList, setNewSongList] = useState([]);

  const getPage = () => {
    setNewSongList([]);
    try {
      axios({
        method: 'get',
        url: `tjsong/song_monthNew.asp`,
        withCredentials: true,
      }).then(res => {
        const $ = load(res.data);
        let nameArr = [];
        $('#BoardType1>.board_type1>tbody>tr>.left').each((idx, item) => {
          nameArr.push(item.children[0].data);
        });
        setNewSongList(nameArr);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPage();
  }, []);

  return (
    <div className="body_wrap">
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
        {/*newSongList.length > 0 && (
            <div>
              {newSongList
                .sort((a, b) => a.localeCompare(b))
                .map((item, idx) => {
                  return <div key={idx}>{item}</div>;
                })}
            </div>
              )*/}
      </Routes>
    </div>
  );
});

export default App;
