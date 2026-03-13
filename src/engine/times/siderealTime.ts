export function calculateGMST(jd: number): number {
  const T = (jd - 2451545.0) / 36525;

  let gmst =
    280.46061837 + 360.98564736629 * (jd - 2451545) + 0.000387933 * T * T;

  gmst = gmst % 360;

  return gmst;
}

export function calculateLST(gmst: number, longitude: number) {
  return (gmst + longitude + 360) % 360;
}
