import React from 'react';
import { Graph } from '@antv/x6';
import { NodeType } from '../constants';

const data = {
  // 节点
  nodes: [],
  // 边
  edges: [],
};

export default class Canvas extends React.Component {
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

  /**
   *
   */
  renderNodeWhenDrop = e => {
    e.preventDefault();
    var model = JSON.parse(e.dataTransfer.getData('model'));
    if (model.nodeType === NodeType.Regular) {
      this.state.graph.addNode({
        shape: 'rect',
        x: e.nativeEvent.offsetX - model.width / 2,
        y: e.nativeEvent.offsetY - model.height / 2,
        width: model.width,
        height: model.height,
        label: model.label,
        attrs: {
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
          },
        },
      });
    }

    if (model.nodeType === NodeType.Group) {
      this.state.graph.addNode({
        x: 80,
        y: 40,
        width: 320,
        height: 240,
        zIndex: 1,
        label: 'Parent\n(try to move me)',
      });
    }
  };

  render() {
    return (
      <div
        id="container"
        onDragOver={e => e.preventDefault()}
        onDrop={e => {
          this.renderNodeWhenDrop(e);
        }}
      />
    );
  }
}
