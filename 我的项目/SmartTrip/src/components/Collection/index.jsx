import React from 'react';
import { Image } from 'react-vant';
import styles from './collect.module.css';

const imageList = [
  'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/mw690/ea98bce0gy1h0rrd585h1j21z418g7wh.jpg',
  'https://img-baofun.zhhainiao.com/fs/b778cc547e4e3a27b58b4849720e76e5.jpg',
  'https://img-baofun.zhhainiao.com/fs/6fc46cefb7b776eac4d912345cc2b093.jpg',
  'https://file1.shop265.com/tk/2019/164eab7cd94bd7e9aa6cf424b78903fb.jpg',
  'https://cdn.svipaigc.com/bizi/2023/12/011230-1701364350e84c.jpg',
  'https://wallpaperm.cmcm.com/7f66bf9152c32f79205ca3a77a5af6df.jpg',
  'https://pic.616pic.com/photoone/00/01/44/618cee2413cc23194.jpg!/fw/1120',
];

const Collection = () => {
  return (
    <>
      {imageList.map((img) => (
        <Image className={styles.pic} src={img} key={img} />
      ))}
    </>
  );
};

export default Collection