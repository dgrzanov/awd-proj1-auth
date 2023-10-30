import { unmountComponentAtNode } from "react-dom";
import conn from "../../lib/db";
import { generateCompetition } from "../../lib/helpers";

export async function POST(request: Request) {
  const res = await request.json();
  // const db = await conn.connect();
  console.log("res:", res);
  const scoringSystem = res.scoringSystem.split("/");
  const compData = {
    name: res["competitionName"],
    competitors: res.competitorList.split(";"),
    win: scoringSystem[0],
    draw: scoringSystem[1],
    defeat: scoringSystem[2],
  };

  const result = await conn.query(
    `INSERT INTO competition (name, win, draw, defeat) VALUES ($1, $2, $3, $4) RETURNING id`,
    [compData.name, compData.win, compData.draw, compData.defeat]
  );
  const newId = result.rows[0].id;
  console.log(newId);
  generateCompetition(compData.competitors, newId);
  return Response.json({ success: true });
}

export async function GET() {
  return Response.json({ test: "testujem" });
}
