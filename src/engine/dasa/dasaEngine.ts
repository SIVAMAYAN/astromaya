const DASA_SEQUENCE = [
 "Ketu",
 "Venus",
 "Sun",
 "Moon",
 "Mars",
 "Rahu",
 "Jupiter",
 "Saturn",
 "Mercury"
]

const DASA_YEARS: Record<string, number> = {

 Ketu: 7,
 Venus: 20,
 Sun: 6,
 Moon: 10,
 Mars: 7,
 Rahu: 18,
 Jupiter: 16,
 Saturn: 19,
 Mercury: 17

}
const NAKSHATRA_LORDS = [

"Ketu","Venus","Sun","Moon","Mars","Rahu","Jupiter","Saturn","Mercury",
"Ketu","Venus","Sun","Moon","Mars","Rahu","Jupiter","Saturn","Mercury",
"Ketu","Venus","Sun","Moon","Mars","Rahu","Jupiter","Saturn","Mercury"

]
export class DasaEngine {

 static calculate(moonLongitude:number, birthDate:Date){

  const nakSize = 360 / 27

  const nakIndex =
   Math.floor(moonLongitude / nakSize)

  const nakLord =
   NAKSHATRA_LORDS[nakIndex]

  const nakStart =
   nakIndex * nakSize

  const portion =
   (moonLongitude - nakStart) / nakSize

  const dasaYears =
   DASA_YEARS[nakLord]

  const balance =
   dasaYears * (1 - portion)

  const result = []

  let startYear =
   birthDate.getFullYear()

  let currentLord = nakLord

  for(let i=0;i<9;i++){

   const years =
    DASA_YEARS[currentLord]

   const endYear =
    startYear + years

   result.push({

    planet: currentLord,
    start: startYear,
    end: endYear

   })

   startYear = endYear

   const index =
    (DASA_SEQUENCE.indexOf(currentLord)+1)%9

   currentLord =
    DASA_SEQUENCE[index]

  }

  return {

   startLord: nakLord,
   balanceYears: balance,
   sequence: result

  }

 }

}