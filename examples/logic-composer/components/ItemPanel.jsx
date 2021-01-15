import { center } from '@antv/x6/lib/registry/node-anchor/bbox';
import React from 'react';

export default class ItemPanel extends React.Component {
  render() {
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
            e.dataTransfer.setData('Text', 'test');
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
            Hello
          </div>
        </div>
      </div>
    );
  }
}
