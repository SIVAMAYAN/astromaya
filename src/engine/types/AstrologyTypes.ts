export interface BirthData {
  date: string;
  time: string;
  latitude: number;
  longitude: number;
  timezone: number;
}

export interface AstroTime {
  julianDay: number;
  gmst: number;
  lst: number;
  ayanamsa: number;
}

export interface PlanetPosition {
  name: string;
  longitude: number;
  latitude: number;
  speed: number;
  retrograde: boolean;
  rasi: number;
  degree: number;
}

export interface LagnaData {
  rasi: number;
  degree: number;
}

export interface House {
  number: number;
  start: number;
  mid: number;
  end: number;
}

export interface HoroscopeResult {
  astroTime: AstroTime;
  lagna: LagnaData;
  planets: PlanetPosition[];
  houses: House[];
}
