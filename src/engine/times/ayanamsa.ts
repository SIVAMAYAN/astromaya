export function calculateLahiriAyanamsa(jd: number) {
  const t = (jd - 2451545.0) / 36525;

  const ayanamsa = 22.460148 + 1.396042 * t + 0.000087 * t * t;

  return ayanamsa;
}
