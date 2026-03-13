const NAKSHATRAS = [

"அஸ்வினி","பரணி","கார்த்திகை","ரோகிணி",
"மிருகசீரிஷம்","திருவாதிரை","புனர்பூசம்",
"பூசம்","ஆயில்யம்","மகம்","பூரம்","உத்திரம்",
"அஸ்தம்","சித்திரை","சுவாதி","விசாகம்",
"அனுஷம்","கேட்டை","மூலம்","பூராடம்",
"உத்திராடம்","திருவோணம்","அவிட்டம்",
"சதயம்","பூரட்டாதி","உத்திரட்டாதி","ரேவதி"

]

export class NakshatraEngine {

 static calculate(longitude: number) {

  const size = 360 / 27

  const index = Math.floor(longitude / size)

  const pada =
   Math.floor(
    (longitude % size) / (size / 4)
   ) + 1

  return {
   name: NAKSHATRAS[index],
   pada
  }

 }

}