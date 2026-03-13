export class AshtakavargaEngine {
  static calculate(planets: any[]) {
    const bavResults: any = {};

    const bavList: number[][] = [];

    planets.forEach((p) => {
      const bav = calculateBAV(p.name, p.rasi);

      bavResults[p.name] = bav;

      bavList.push(bav);
    });

    const sav = calculateSAV(bavList);

    return {
      bav: bavResults,
      sav,
    };
  }
}
const ASHTAKAVARGA_RULES: Record<string, number[]> = {
  Sun: [1, 2, 4, 7, 8, 9, 10, 11],

  Moon: [3, 6, 7, 10, 11],

  Mars: [3, 5, 6, 10, 11],

  Mercury: [2, 4, 6, 8, 10, 11],

  Jupiter: [5, 6, 9, 11],

  Venus: [6, 7, 12],

  Saturn: [3, 5, 6, 11],
};
function calculateBAV(planet: string, house: number) {
  const favorable = ASHTAKAVARGA_RULES[planet] ?? [];

  const bav: number[] = [];

  for (let i = 1; i <= 12; i++) {
    const relative = ((i - house + 12) % 12) + 1;

    bav.push(favorable.includes(relative) ? 1 : 0);
  }

  return bav;
}
function calculateSAV(bavList: number[][]) {
  const sav = new Array(12).fill(0);

  bavList.forEach((bav) => {
    for (let i = 0; i < 12; i++) {
      sav[i] += bav[i];
    }
  });

  return sav;
}
