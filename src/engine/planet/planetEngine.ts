import {
 Body,
 MakeTime,
 GeoVector,
 Ecliptic
} from "astronomy-engine"

export class PlanetEngine {

 static calculate(date: Date) {

  const time = MakeTime(date)

  const bodies = [
   { name: "Sun", body: Body.Sun },
   { name: "Moon", body: Body.Moon },
   { name: "Mars", body: Body.Mars },
   { name: "Mercury", body: Body.Mercury },
   { name: "Jupiter", body: Body.Jupiter },
   { name: "Venus", body: Body.Venus },
   { name: "Saturn", body: Body.Saturn }
  ]

  return bodies.map(p => {

   const vec = GeoVector(p.body, time, true)

   const ecl = Ecliptic(vec)

   const lon = (ecl.elon + 360) % 360

   return {
    name: p.name,
    longitude: lon,
    rasi: Math.floor(lon / 30) + 1
   }

  })

 }

}