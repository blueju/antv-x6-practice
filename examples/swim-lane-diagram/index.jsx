import React from 'react';
import { Row, Col, Card } from 'antd';
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
        <Row gutter={16}>
          <Col
            flex="120px"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Card title="元素面板" size="small" style={{ flexGrow: 1 }}>
              <ItemPanel />
            </Card>
          </Col>
          {/* 画布 */}
          <Col flex="auto">
            <Card title="画布" size="small">
              <Canvas />
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
