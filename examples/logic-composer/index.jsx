import React from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import { Graph } from '@antv/x6';
import Toolbar from './components/Toolbar';
import ItemPanel from './components/ItemPanel';

const data = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 40, // Number，必选，节点位置的 x 值
      y: 40, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'hello', // String，节点标签
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 160, // Number，必选，节点位置的 x 值
      y: 180, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'world', // String，节点标签
    },
  ],
  // 边
  edges: [
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node2', // String，必须，目标节点 id
    },
  ],
};

export default class AntvX6Practice extends React.Component {
  state = {
    graph: null,
  };
  componentDidMount() {
    const graph = new Graph({
      container: document.getElementById('container'),
      width: 800,
      height: 600,
      background: {
        color: '#fffbe6', // 设置画布背景颜色
      },
      grid: {
        size: 10, // 网格大小 10px
        visible: true, // 渲染网格背景
      },
    });
    this.setState({
      graph,
    });
    graph.fromJSON(data);
  }
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
            <div
              id="container"
              onDragOver={e => e.preventDefault()}
              onDrop={e => {
                e.preventDefault();
                var data = e.dataTransfer.getData('Text');
                console.log('data', data);
                this.state.graph.addNode({
                  x: 200,
                  y: 40,
                  width: 120,
                  height: 60,
                  label: 'rect',
                  attrs: {
                    body: {
                      fill: '#efdbff',
                      stroke: '#9254de',
                    },
                  },
                });
                // e.target.appendChild(document.getElementById(data));
              }}
            ></div>
          </Col>
          {/* 详情面板 */}
          <Col flex="400px"></Col>
        </Row>
      </>
    );
  }
}
