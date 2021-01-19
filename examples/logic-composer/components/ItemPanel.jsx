import { center } from '@antv/x6/lib/registry/node-anchor/bbox';
import React from 'react';

export const NodeType = {
  Start: 'start',
  End: 'end',
};

export default class ItemPanel extends React.Component {
  render() {
    console.log(NodeType);
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 120,
            height: 50,
            cursor: 'move',
          }}
          draggable="true"
          onDragStart={e => {
            e.dataTransfer.setData(
              'model',
              JSON.stringify({
                nodeType: NodeType.Start,
                label: '开始',
                width: 60,
                height: 60,
              }),
            );
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #9254de',
              background: '#efdbff',
              borderRadius: '4px',
            }}
          >
            开始
          </div>
        </div>
        <div
          style={{
            width: 120,
            height: 50,
            cursor: 'move',
          }}
          draggable="true"
          onDragStart={e => {
            e.dataTransfer.setData(
              'model',
              JSON.stringify({
                nodeType: NodeType.End,
                label: '结束',
                width: 60,
                height: 60,
              }),
            );
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #9254de',
              background: '#efdbff',
              borderRadius: '4px',
            }}
          >
            结束
          </div>
        </div>
      </div>
    );
  }
}
