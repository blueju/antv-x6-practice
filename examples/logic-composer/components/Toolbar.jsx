import React from 'react';
import { Toolbar as AntvX6Toolbar } from '@antv/x6-react-components';
import '@antv/x6-react-components/es/toolbar/style/index.css';
import {
  ZoomInOutlined,
  ZoomOutOutlined,
  UndoOutlined,
  RedoOutlined,
  DeleteOutlined,
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';

const Item = AntvX6Toolbar.Item;
const Group = AntvX6Toolbar.Group;

/**
 * 对 @antv/x6-react-components 提供的 Toolbar 进行二次封装
 */
export default class Toolbar extends React.Component {
  render() {
    return (
      <AntvX6Toolbar
        size="big"
        hoverEffect={true}
        onClick={this.onClick}
        extra={<span>Extra Component</span>}
      >
        <Group>
          <Item
            name="zoomIn"
            tooltip="Zoom In (Cmd +)"
            icon={<ZoomInOutlined />}
          />
          <Item
            name="zoomOut"
            tooltip="Zoom Out (Cmd -)"
            icon={<ZoomOutOutlined />}
          />
        </Group>
        <Group>
          <Item name="undo" tooltip="Undo (Cmd + Z)" icon={<UndoOutlined />} />
          <Item
            name="redo"
            tooltip="Redo (Cmd + Shift + Z)"
            icon={<RedoOutlined />}
          />
        </Group>
        <Group>
          <Item
            name="delete"
            icon={<DeleteOutlined />}
            disabled={true}
            tooltip="Delete (Delete)"
          />
        </Group>
        <Group>
          <Item name="bold" icon={<BoldOutlined />} tooltip="Bold (Cmd + B)" />
          <Item
            name="italic"
            icon={<ItalicOutlined />}
            tooltip="Italic (Cmd + I)"
          />
          <Item
            name="strikethrough"
            icon={<StrikethroughOutlined />}
            tooltip="Strikethrough (Cmd + Shift + x)"
          />
          <Item
            name="underline"
            icon={<UnderlineOutlined />}
            tooltip="Underline (Cmd + U)"
          />
        </Group>
      </AntvX6Toolbar>
    );
  }
}
