'use client';

type Planet = {
  name: string;
  rasi: number;
};

const CELL = 120;

const GRID = [
  [12, 1, 2, 3],
  [11, 0, 0, 4],
  [10, 0, 0, 5],
  [9, 8, 7, 6],
];

export default function SouthIndianChart({ planets }: { planets: Planet[] }) {
  const getPlanets = (rasi: number) => planets.filter((p) => p.rasi === rasi);

  return (
    <svg width={CELL * 4} height={CELL * 4}>
      {GRID.map((row, y) =>
        row.map((rasi, x) => {
          if (rasi === 0) return null;

          const px = x * CELL;
          const py = y * CELL;

          const rasiPlanets = getPlanets(rasi);

          return (
            <g key={`${x}-${y}`}>
              <rect
                x={px}
                y={py}
                width={CELL}
                height={CELL}
                fill="white"
                stroke="black"
              />

              <text x={px + 6} y={py + 16} fontSize="12">
                {rasi}
              </text>

              {rasiPlanets.map((p, i) => (
                <text
                  key={p.name}
                  x={px + 10}
                  y={py + 35 + i * 16}
                  fontSize="14"
                >
                  {p.name}
                </text>
              ))}
            </g>
          );
        }),
      )}
    </svg>
  );
}
