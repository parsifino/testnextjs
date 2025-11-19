// scripts/test-db.mjs
import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log('DB OK:', res.rows[0]);
  } catch (err) {
    console.error('DB ERROR:', err);
  } finally {
    await client.end();
  }
}

main();
