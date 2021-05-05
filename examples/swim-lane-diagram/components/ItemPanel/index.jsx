import React from 'react';

import Regular from './components/Regular';
import Group from './components/Group';

export default class ItemPanel extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Regular />
        <Group />
      </div>
    );
  }
}
