//@ts-ignore
import conn from "./db";
import roundRobin from "./roundRobin";

export const generateCompetition = (competitors: string[], comp_id: number) => {
  //@ts-ignore
  const conf = roundRobin[competitors.length];
  Object.keys(conf).forEach((roundKey) => {
    const round = conf[roundKey];
    round.forEach((match: [number, number]) => {
      //@ts-ignore
      const home = match[0];
      const away = match[1];
      if (away !== -1) {
        //@ts-ignore
        conn.query(
          `INSERT INTO public.match (competition_id, round, competitor_home, competitor_away) VALUES ($1, $2, $3, $4);`,
          [comp_id, Number(roundKey), competitors[home], competitors[away]]
        );
        console.log(
          `comp_id: ${comp_id} round ${roundKey} match: ${competitors[home]} - ${competitors[away]}`
        );
      }
    });
  });
};
