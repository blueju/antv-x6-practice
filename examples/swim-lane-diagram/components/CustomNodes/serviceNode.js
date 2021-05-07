import { Shape } from '@antv/x6';

const service = Shape.Rect.define({
  shape: 'service',
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
  // 链接桩/锚点
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
            fill: '#31d0c6',
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
});
