import {neon} from '@neondatabase/serverless';
import {readFileSync} from 'node:fs';
if(!process.env.DATABASE_URL)throw Error('Set DATABASE_URL in .env.local first');
const sql=neon(process.env.DATABASE_URL);
const statements=readFileSync(new URL('./schema.sql',import.meta.url),'utf8').split(';').map(s=>s.trim()).filter(Boolean);
await sql.transaction(statements.map(s=>sql.query(s,[])));
console.log('Database tables are ready. Existing content was preserved.');
