import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import ItemPanel from './components/ItemPanel';
import Canvas from './components/Canvas';

/**
 * 泳道流程图
 **/
export default class SwimlaneFlowchart extends React.Component {
  render() {
    return (
      <>
        <Row>
          {/* 元素面板 */}
          <Col flex="200px">
            <ItemPanel />
          </Col>
          {/* 画布 */}
          <Col flex="auto">
            <Canvas />
          </Col>
        </Row>
      </>
    );
  }
}
