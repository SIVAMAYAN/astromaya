export class LagnaEngine {

 static calculate(jd: number, lat: number, lon: number) {

  const gmst =
   280.46061837 +
   360.98564736629 * (jd - 2451545)

  const lst = gmst + lon

  const lagna =
   Math.atan2(
    Math.sin(lst * Math.PI / 180),
    Math.cos(lst * Math.PI / 180)
   ) * 180 / Math.PI

  return (lagna + 360) % 360

 }

}