// app/api/dbtest/route.ts
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT NOW()');
    return Response.json({ ok: true, now: result.rows[0].now });
  } catch (err: any) {
    console.error(err);
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
