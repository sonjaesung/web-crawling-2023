import React, { Fragment, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import { load } from 'cheerio';

const HomeMain = observer(() => {
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
    <Fragment>
      {newSongList.length > 0 && (
        <div>
          {newSongList
            .sort((a, b) => a.localeCompare(b))
            .map((item, idx) => {
              return <div key={idx}>{item}</div>;
            })}
        </div>
      )}
    </Fragment>
  );
});

export default HomeMain;
