import mongoose from 'mongoose';

const PlanetSchema = new mongoose.Schema({
  rasi: Number,
  degree: Number,

  nakshatra: Number,
  pada: Number,

  house: Number,

  speed: Number,
  retrograde: Boolean,
});

const HoroscopeSchema = new mongoose.Schema(
  {
    name: String,
    gender: String,

    birth: {
      date: Date,
      time: String,
      timezone: Number,

      place: String,
      country: String,

      latitude: Number,
      longitude: Number,
    },

    astroTime: {
      julianDay: Number,
      gmst: Number,
      lst: Number,
      ayanamsa: Number,
    },

    lagna: {
      rasi: Number,
      degree: Number,
      nakshatra: Number,
      pada: Number,
    },

    planets: {
      sun: PlanetSchema,
      moon: PlanetSchema,
      mars: PlanetSchema,
      mercury: PlanetSchema,
      jupiter: PlanetSchema,
      venus: PlanetSchema,
      saturn: PlanetSchema,
      rahu: PlanetSchema,
      ketu: PlanetSchema,
    },

    houses: Array,

    divisionalCharts: Object,

    dashas: Object,

    shadbala: Object,

    status: String,
  },
  { timestamps: true },
);

export default mongoose.models.Horoscope ||
  mongoose.model('Horoscope', HoroscopeSchema);
