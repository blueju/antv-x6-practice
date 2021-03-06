import React from 'react';
import { NodeType } from '../../common/constants';

export default class EndNode extends React.Component {
  render() {
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
    );
  }
}
