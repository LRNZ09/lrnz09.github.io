import fs from 'node:fs';
import db from '@astrojs/db';
import { defineConfig } from 'astro/config';

const domain = fs.readFileSync('./public/CNAME');

export default defineConfig({
	site: `https://${domain}`,
	integrations: [db()],
});
