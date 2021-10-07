
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Progress } from 'antd';

export default function Options(){
    return(
        <>
        <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
        <Progress type="circle" percent={100} format={() => 'Done'} />
      </>
    )
}