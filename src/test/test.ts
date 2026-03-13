import { AstrologyCore } from "../engine/core/astrologyCore"

const chart = AstrologyCore.generateChart({

 date: new Date(),
 latitude: 13.0827,
 longitude: 80.2707

})

console.log(chart)