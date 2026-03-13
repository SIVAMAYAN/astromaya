const NAISARGIKA_BALA: Record<string, number> = {
  Sun: 60,
  Moon: 51,
  Venus: 43,
  Jupiter: 34,
  Mercury: 26,
  Mars: 17,
  Saturn: 9,
};
function calculateDigBala(planet: string, house: number): number {
  if (planet === 'Sun' || planet === 'Mars') {
    return house === 10 ? 60 : 20;
  }

  if (planet === 'Moon' || planet === 'Venus') {
    return house === 4 ? 60 : 20;
  }

  if (planet === 'Jupiter' || planet === 'Mercury') {
    return house === 1 ? 60 : 20;
  }

  if (planet === 'Saturn') {
    return house === 7 ? 60 : 20;
  }

  return 30;
}
const EXALTATION: Record<string, number> = {
  Sun: 10,
  Moon: 2,
  Mars: 10,
  Mercury: 6,
  Jupiter: 4,
  Venus: 12,
  Saturn: 7,
};

function calculateSthanaBala(planet: string, rasi: number): number {
  const exalt = EXALTATION[planet];

  const distance = Math.abs(rasi - exalt);

  return Math.max(0, 60 - distance * 5);
}
function calculateKalaBala(date: Date): number {
  const hour = date.getHours();

  if (hour >= 6 && hour <= 18) {
    return 40;
  }

  return 20;
}
function calculateChestaBala(retrograde: boolean): number {
  return retrograde ? 48 : 24;
}
