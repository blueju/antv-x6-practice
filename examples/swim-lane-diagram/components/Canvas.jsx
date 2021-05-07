import React from 'react';
import { Graph, Shape } from '@antv/x6';
import { NodeType } from '../constants';

const data = {
  // 节点
  nodes: [],
  // 边
  edges: [],
};

/**
 * 自定义服务节点
 */
Shape.Rect.define({
  shape: 'service',
  width: 60,
  height: 60,
  attrs: {
    label: {
      y: 40,
    },
    body: {
      stroke: '#31d0c6',
      fill: 'skyblue',
      rx: 10,
      ry: 10,
    },
  },
  // 链接桩/锚点
  ports: {
    groups: {
      in: {
        position: 'left',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#31d0c6',
          },
        },
      },
      out: {
        position: 'right',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
          },
        },
      },

      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
          },
        },
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
          },
        },
      },
    },
  },
});

/**
 * 画布
 */
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
      // 是否支持拖拽平移
      panning: true,
      connecting: {
        // 是否自动吸附
        snap: true,
        // 是否允许连接到画布空白位置的点
        allowBlank: false,
        // 是否允许在相同的起始节点和终止之间创建多条边
        allowMulti: false,
        // 是否允许创建循环连线
        allowLoop: false,
        // 是否允许边链接到节点（非节点上的链接桩）
        allowNode: false,
        // 拖动时，是否高亮显示所有可用的连接桩或节点
        hightlight: true,
        // 当连接到节点时，通过 anchor 来指定被连接的节点的锚点
        targetAnchor: 'left',
        /**
         * 判断连接是否有效
         * @param sourceMagnet
         * @param targetMagnet
         * @returns {boolean}
         */
        validateConnection({ sourceMagnet, targetMagnet }) {
          // 只能从输出链接桩创建连接
          if (
            !sourceMagnet ||
            sourceMagnet.getAttribute('port-group') === 'in'
          ) {
            return false;
          }

          // 只能连接到输入链接桩
          if (
            !targetMagnet ||
            targetMagnet.getAttribute('port-group') !== 'in'
          ) {
            return false;
          }

          return true;
        },
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
        shape: 'service',
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
        ports: [
          {
            id: 'port1',
            group: 'in',
          },
          {
            id: 'port2',
            group: 'out',
          },
          {
            id: 'port3',
            group: 'top',
          },
          {
            id: 'port4',
            group: 'bottom',
          },
        ],
      });
    }

    if (model.nodeType === NodeType.Group) {
      this.state.graph.addNode({
        x: e.nativeEvent.offsetX - model.width / 2,
        y: e.nativeEvent.offsetY - model.height / 2,
        width: 200,
        height: 400,
        zIndex: 0,
        label: '业务域',
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
