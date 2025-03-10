import fs from 'node:fs';
// @ts-check
import { defineConfig } from 'astro/config';

const domain = fs.readFileSync('./public/CNAME');

export default defineConfig({
	site: `https://${domain}`,
});
