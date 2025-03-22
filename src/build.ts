import * as fs from 'fs';
import * as path from 'path';
import template from './template';

const filePath = (bordered: boolean) =>
  path.join(process.cwd(), `/ayu-light${bordered ? '-bordered' : ''}.json`);

const bordered = JSON.stringify(template(true), null, '\t');
const nonBordered = JSON.stringify(template(false), null, '\t');

fs.writeFileSync(filePath(true), bordered);
fs.writeFileSync(filePath(false), nonBordered);
console.log(`Updated`);
