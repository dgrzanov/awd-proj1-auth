// @ts-ignore
import conn from "../../lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  // @ts-ignore
  const { rows } = await conn.query(
    `SELECT * FROM public.competition WHERE id = $1`,
    [params.id]
  );

  return Response.json(rows[0]);
}
