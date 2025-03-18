import { db, Social } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Social).values([
		{ id: 1, name: 'GitHub', url: 'https://github.com/LRNZ09' },
		{ id: 2, name: 'LinkedIn', url: 'https://linkedin.com/in/lorenzo-pieri' },
		{ id: 3, name: 'Medium', url: 'https://medium.com/@LRNZ09' },
		{ id: 4, name: 'X', url: 'https://x.com/LRNZ09' },
		{ id: 5, name: 'Reddit', url: 'https://reddit.com/user/LRNZ09' },
		{ id: 6, name: 'Last.fm', url: 'https://www.last.fm/user/LRNZ09' },
	]);
}
