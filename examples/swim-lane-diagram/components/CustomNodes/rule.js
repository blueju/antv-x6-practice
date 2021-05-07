import { Shape } from '@antv/x6';

/**
 * 自定义规则节点
 */
export const rule = {
  /** 继承自 Rect 节点 */
  inherit: Shape.Rect,
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
  /** 链接桩 */
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
            fill: '#fff',
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
};
