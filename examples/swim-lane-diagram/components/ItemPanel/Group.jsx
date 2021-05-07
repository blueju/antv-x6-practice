import React from 'react';
import { NodeType } from '../../constants';

/**
 * 业务域，
 * 表现形式是：泳道，
 * 代码本质是：群组。
 */
export default function BusinessDomain() {
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
            label: '业务域',
            width: 100,
            height: 200,
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
        业务域
      </div>
    </div>
  );
}
