import { PlanetPosition } from '../../types/AstrologyTypes';

export function computePlanetPosition(
  name: string,
  longitude: number,
  speed: number,
): PlanetPosition {
  const rasi = Math.floor(longitude / 30) + 1;

  const degree = longitude % 30;

  return {
    name,
    longitude,
    latitude: 0,
    speed,
    retrograde: speed < 0,
    rasi,
    degree,
  };
}
