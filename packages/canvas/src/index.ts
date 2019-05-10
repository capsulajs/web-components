import { Canvas } from './Canvas';
import * as api from './api';
import { CanvasUIProps } from './api';

declare global {
  interface Window {
    mountWebComponent: () => void;
  }
}

export default {
  Canvas,
  api,
};
