import React from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';

import Toolbar from './components/Toolbar';
import ItemPanel from './components/ItemPanel';
import Canvas from './components/Canvas';

export default class AntvX6Practice extends React.Component {
  render() {
    return (
      <>
        {/* 工具栏 */}
        <Row>
          <Col span={24}>
            <Toolbar />
          </Col>
        </Row>
        <Row>
          {/* 元素面板 */}
          <Col flex="200px">
            <ItemPanel />
          </Col>
          {/* 画布 */}
          <Col flex="auto">
            <Canvas />
          </Col>
          {/* 详情面板 */}
          <Col flex="400px"></Col>
        </Row>
      </>
    );
  }
}
