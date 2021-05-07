import React from 'react';
import { NodeType } from '../../constants';

export default () => {
  return (
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
            nodeType: NodeType.Group,
            label: '泳道',
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
        泳道
      </div>
    </div>
  );
};