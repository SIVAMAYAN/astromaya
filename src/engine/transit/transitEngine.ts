export class TransitEngine {
  static calculate(natalPlanets: any[], transitPlanets: any[]) {
    const results: any[] = [];

    transitPlanets.forEach((tp) => {
      natalPlanets.forEach((np) => {
        const angle = Math.abs(tp.longitude - np.longitude);

        const diff = angle > 180 ? 360 - angle : angle;

        let aspect = null;

        if (diff < 5) aspect = 'Conjunction';
        else if (Math.abs(diff - 180) < 5) aspect = 'Opposition';
        else if (Math.abs(diff - 120) < 5) aspect = 'Trine';
        else if (Math.abs(diff - 90) < 5) aspect = 'Square';
        else if (Math.abs(diff - 60) < 5) aspect = 'Sextile';

        if (aspect) {
          results.push({
            transitPlanet: tp.name,
            natalPlanet: np.name,
            aspect,
            angle: diff,
          });
        }
      });
    });

    return results;
  }
}
