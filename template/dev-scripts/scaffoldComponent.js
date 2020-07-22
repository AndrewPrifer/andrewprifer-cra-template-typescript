#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

const name = process.argv[3];
const componentPath = path.join('./src/', process.argv[2], name);

const component = `import { css } from '@emotion/core';
import React from 'react';

const ${name} = ({}: ${name}Props) => {
  return <div>${name}</div>;
};

export interface ${name}Props {}

export default ${name};
`;

const stories = `import React from 'react';
import { action } from '@storybook/addon-actions';

import ${name} from '.';

export default {
  component: ${name},
  title: '${name}',
};

export const normal = () => (
  <${name} />
);
`;

fs.mkdirSync(componentPath, { recursive: true });

console.log(componentPath);

fs.writeFileSync(path.join(componentPath, 'index.tsx'), component);
fs.writeFileSync(path.join(componentPath, 'stories.tsx'), stories);
