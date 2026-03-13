import { PlanetEngine } from '../planet/planetEngine';
import { LagnaEngine } from '../lagna/lagnaEngine';
import { HouseEngine } from '../houses/houseEngine';
import { NakshatraEngine } from '../nakshatra/nakshatraEngine';
import { julianDay } from '../utils/julian';
import { DasaEngine } from '../dasa/dasaEngine';
import { NavamsaEngine } from '../varga/navamsaEngine';
import { AshtakavargaEngine } from '../ashtakavarga/ashtakavargaEngine';
import { TransitEngine } from '../transit/transitEngine';

interface ChartInput {
  date: Date;
  latitude: number;
  longitude: number;
}

export class AstrologyCore {
  static generateChart(input: ChartInput) {
    const planets = PlanetEngine.calculate(input.date);

    const jd = julianDay(input.date);

    const lagna = LagnaEngine.calculate(jd, input.latitude, input.longitude);

    const houses = HouseEngine.calculateHouses(lagna);

    const planetDetails = planets.map((p) => {
      const nak = NakshatraEngine.calculate(p.longitude);

      const navamsa = NavamsaEngine.calculate(p.longitude);

      return {
        ...p,
        nakshatra: nak.name,
        pada: nak.pada,
        navamsa: navamsa.navamsaSign,
      };
    });

    const moon = planetDetails.find((p) => p.name === 'Moon');

    if (!moon) {
      throw new Error('Moon not found');
    }

    const dasa = DasaEngine.calculate(moon.longitude, input.date);

    const ashtakavarga = AshtakavargaEngine.calculate(planetDetails);

    // Transit calculation (current planetary positions)
    const transitPlanets = PlanetEngine.calculate(new Date());

    const transit = TransitEngine.calculate(planetDetails, transitPlanets);

    return {
      lagna,
      houses,
      planets: planetDetails,
      dasa,
      ashtakavarga,
      transit,
    };
  }
}
