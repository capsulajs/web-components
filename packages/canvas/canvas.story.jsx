import React from 'react';
import { storiesOf } from '@storybook/react';
import './src/example/index.tsx';

export const styles = {
  width: 1000,
  height: 500,
};

storiesOf('Canvas', module).add('canvas', () => <div id="web-canvas" style={styles} />);
