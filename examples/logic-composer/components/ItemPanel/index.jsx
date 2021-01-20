import React from 'react';
import StartNode from './StartNode';
import EndNode from './EndNode';

export default class ItemPanel extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StartNode />
        <EndNode />
      </div>
    );
  }
}
