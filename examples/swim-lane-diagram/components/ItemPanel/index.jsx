import React from 'react';

import Regular from './Regular';
import Group from './Group';

/**
 * 元素面板
 */
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
        <Regular />
        <br />
        <Group />
      </div>
    );
  }
}
