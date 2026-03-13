module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/componets/charts/SouthIndianChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SouthIndianChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const CELL = 120;
const GRID = [
    [
        12,
        1,
        2,
        3
    ],
    [
        11,
        0,
        0,
        4
    ],
    [
        10,
        0,
        0,
        5
    ],
    [
        9,
        8,
        7,
        6
    ]
];
function SouthIndianChart({ planets }) {
    const getPlanets = (rasi)=>planets.filter((p)=>p.rasi === rasi);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: CELL * 4,
        height: CELL * 4,
        children: GRID.map((row, y)=>row.map((rasi, x)=>{
                if (rasi === 0) return null;
                const px = x * CELL;
                const py = y * CELL;
                const rasiPlanets = getPlanets(rasi);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: px,
                            y: py,
                            width: CELL,
                            height: CELL,
                            fill: "white",
                            stroke: "black"
                        }, void 0, false, {
                            fileName: "[project]/src/componets/charts/SouthIndianChart.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: px + 6,
                            y: py + 16,
                            fontSize: "12",
                            children: rasi
                        }, void 0, false, {
                            fileName: "[project]/src/componets/charts/SouthIndianChart.tsx",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this),
                        rasiPlanets.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: px + 10,
                                y: py + 35 + i * 16,
                                fontSize: "14",
                                children: p.name
                            }, p.name, false, {
                                fileName: "[project]/src/componets/charts/SouthIndianChart.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, this))
                    ]
                }, `${x}-${y}`, true, {
                    fileName: "[project]/src/componets/charts/SouthIndianChart.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, this);
            }))
    }, void 0, false, {
        fileName: "[project]/src/componets/charts/SouthIndianChart.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/engine/planet/planetEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlanetEngine",
    ()=>PlanetEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/astronomy-engine/esm/astronomy.js [app-ssr] (ecmascript)");
;
class PlanetEngine {
    static calculate(date) {
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MakeTime"])(date);
        const bodies = [
            {
                name: "Sun",
                body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Sun
            },
            {
                name: "Moon",
                body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Moon
            },
            {
                name: "Mars",
                body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Mars
            },
            {
                name: "Mercury",
                body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Mercury
            },
            {
                name: "Jupiter",
                body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Jupiter
            },
            {
                name: "Venus",
                body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Venus
            },
            {
                name: "Saturn",
                body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Saturn
            }
        ];
        return bodies.map((p)=>{
            const vec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeoVector"])(p.body, time, true);
            const ecl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ecliptic"])(vec);
            const lon = (ecl.elon + 360) % 360;
            return {
                name: p.name,
                longitude: lon,
                rasi: Math.floor(lon / 30) + 1
            };
        });
    }
}
}),
"[project]/src/engine/lagna/lagnaEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LagnaEngine",
    ()=>LagnaEngine
]);
class LagnaEngine {
    static calculate(jd, lat, lon) {
        const gmst = 280.46061837 + 360.98564736629 * (jd - 2451545);
        const lst = gmst + lon;
        const lagna = Math.atan2(Math.sin(lst * Math.PI / 180), Math.cos(lst * Math.PI / 180)) * 180 / Math.PI;
        return (lagna + 360) % 360;
    }
}
}),
"[project]/src/engine/houses/houseEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HouseEngine",
    ()=>HouseEngine
]);
class HouseEngine {
    static calculateHouses(lagna) {
        const houses = [];
        for(let i = 0; i < 12; i++){
            houses.push((lagna + i * 30) % 360);
        }
        return houses;
    }
    static calculateHouse(transitLongitude, lagna) {
        const diff = (transitLongitude - lagna + 360) % 360;
        return Math.floor(diff / 30) + 1;
    }
}
}),
"[project]/src/engine/nakshatra/nakshatraEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NakshatraEngine",
    ()=>NakshatraEngine
]);
const NAKSHATRAS = [
    "அஸ்வினி",
    "பரணி",
    "கார்த்திகை",
    "ரோகிணி",
    "மிருகசீரிஷம்",
    "திருவாதிரை",
    "புனர்பூசம்",
    "பூசம்",
    "ஆயில்யம்",
    "மகம்",
    "பூரம்",
    "உத்திரம்",
    "அஸ்தம்",
    "சித்திரை",
    "சுவாதி",
    "விசாகம்",
    "அனுஷம்",
    "கேட்டை",
    "மூலம்",
    "பூராடம்",
    "உத்திராடம்",
    "திருவோணம்",
    "அவிட்டம்",
    "சதயம்",
    "பூரட்டாதி",
    "உத்திரட்டாதி",
    "ரேவதி"
];
class NakshatraEngine {
    static calculate(longitude) {
        const size = 360 / 27;
        const index = Math.floor(longitude / size);
        const pada = Math.floor(longitude % size / (size / 4)) + 1;
        return {
            name: NAKSHATRAS[index],
            pada
        };
    }
}
}),
"[project]/src/engine/utils/julian.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "julianDay",
    ()=>julianDay
]);
function julianDay(date) {
    return date.getTime() / 86400000 + 2440587.5;
}
}),
"[project]/src/engine/dasa/dasaEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DasaEngine",
    ()=>DasaEngine
]);
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
];
const DASA_YEARS = {
    Ketu: 7,
    Venus: 20,
    Sun: 6,
    Moon: 10,
    Mars: 7,
    Rahu: 18,
    Jupiter: 16,
    Saturn: 19,
    Mercury: 17
};
const NAKSHATRA_LORDS = [
    "Ketu",
    "Venus",
    "Sun",
    "Moon",
    "Mars",
    "Rahu",
    "Jupiter",
    "Saturn",
    "Mercury",
    "Ketu",
    "Venus",
    "Sun",
    "Moon",
    "Mars",
    "Rahu",
    "Jupiter",
    "Saturn",
    "Mercury",
    "Ketu",
    "Venus",
    "Sun",
    "Moon",
    "Mars",
    "Rahu",
    "Jupiter",
    "Saturn",
    "Mercury"
];
class DasaEngine {
    static calculate(moonLongitude, birthDate) {
        const nakSize = 360 / 27;
        const nakIndex = Math.floor(moonLongitude / nakSize);
        const nakLord = NAKSHATRA_LORDS[nakIndex];
        const nakStart = nakIndex * nakSize;
        const portion = (moonLongitude - nakStart) / nakSize;
        const dasaYears = DASA_YEARS[nakLord];
        const balance = dasaYears * (1 - portion);
        const result = [];
        let startYear = birthDate.getFullYear();
        let currentLord = nakLord;
        for(let i = 0; i < 9; i++){
            const years = DASA_YEARS[currentLord];
            const endYear = startYear + years;
            result.push({
                planet: currentLord,
                start: startYear,
                end: endYear
            });
            startYear = endYear;
            const index = (DASA_SEQUENCE.indexOf(currentLord) + 1) % 9;
            currentLord = DASA_SEQUENCE[index];
        }
        return {
            startLord: nakLord,
            balanceYears: balance,
            sequence: result
        };
    }
}
}),
"[project]/src/engine/varga/navamsaEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavamsaEngine",
    ()=>NavamsaEngine
]);
class NavamsaEngine {
    static calculate(longitude) {
        const rasi = Math.floor(longitude / 30) + 1;
        const rasiDegree = longitude % 30;
        const navamsaSize = 30 / 9;
        const navamsaIndex = Math.floor(rasiDegree / navamsaSize);
        let startSign = 0;
        // Movable signs
        if ([
            1,
            4,
            7,
            10
        ].includes(rasi)) {
            startSign = rasi;
        } else if ([
            2,
            5,
            8,
            11
        ].includes(rasi)) {
            startSign = (rasi + 8 - 1) % 12 + 1;
        } else {
            startSign = (rasi + 4 - 1) % 12 + 1;
        }
        const navamsaSign = (startSign + navamsaIndex - 1) % 12 + 1;
        return {
            navamsaSign,
            navamsaIndex: navamsaIndex + 1
        };
    }
}
}),
"[project]/src/engine/ashtakavarga/ashtakavargaEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AshtakavargaEngine",
    ()=>AshtakavargaEngine
]);
class AshtakavargaEngine {
    static calculate(planets) {
        const bavResults = {};
        const bavList = [];
        planets.forEach((p)=>{
            const bav = calculateBAV(p.name, p.rasi);
            bavResults[p.name] = bav;
            bavList.push(bav);
        });
        const sav = calculateSAV(bavList);
        return {
            bav: bavResults,
            sav
        };
    }
}
const ASHTAKAVARGA_RULES = {
    Sun: [
        1,
        2,
        4,
        7,
        8,
        9,
        10,
        11
    ],
    Moon: [
        3,
        6,
        7,
        10,
        11
    ],
    Mars: [
        3,
        5,
        6,
        10,
        11
    ],
    Mercury: [
        2,
        4,
        6,
        8,
        10,
        11
    ],
    Jupiter: [
        5,
        6,
        9,
        11
    ],
    Venus: [
        6,
        7,
        12
    ],
    Saturn: [
        3,
        5,
        6,
        11
    ]
};
function calculateBAV(planet, house) {
    const favorable = ASHTAKAVARGA_RULES[planet] ?? [];
    const bav = [];
    for(let i = 1; i <= 12; i++){
        const relative = (i - house + 12) % 12 + 1;
        bav.push(favorable.includes(relative) ? 1 : 0);
    }
    return bav;
}
function calculateSAV(bavList) {
    const sav = new Array(12).fill(0);
    bavList.forEach((bav)=>{
        for(let i = 0; i < 12; i++){
            sav[i] += bav[i];
        }
    });
    return sav;
}
}),
"[project]/src/engine/transit/transitEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitEngine",
    ()=>TransitEngine
]);
class TransitEngine {
    static calculate(natalPlanets, transitPlanets) {
        const results = [];
        transitPlanets.forEach((tp)=>{
            natalPlanets.forEach((np)=>{
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
                        angle: diff
                    });
                }
            });
        });
        return results;
    }
}
}),
"[project]/src/engine/core/astrologyCore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AstrologyCore",
    ()=>AstrologyCore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$planet$2f$planetEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/planet/planetEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$lagna$2f$lagnaEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/lagna/lagnaEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$houses$2f$houseEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/houses/houseEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$nakshatra$2f$nakshatraEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/nakshatra/nakshatraEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$utils$2f$julian$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/utils/julian.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dasa$2f$dasaEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dasa/dasaEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$varga$2f$navamsaEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/varga/navamsaEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$ashtakavarga$2f$ashtakavargaEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/ashtakavarga/ashtakavargaEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$transit$2f$transitEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/transit/transitEngine.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class AstrologyCore {
    static generateChart(input) {
        const planets = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$planet$2f$planetEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlanetEngine"].calculate(input.date);
        const jd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$utils$2f$julian$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["julianDay"])(input.date);
        const lagna = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$lagna$2f$lagnaEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LagnaEngine"].calculate(jd, input.latitude, input.longitude);
        const houses = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$houses$2f$houseEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HouseEngine"].calculateHouses(lagna);
        const planetDetails = planets.map((p)=>{
            const nak = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$nakshatra$2f$nakshatraEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NakshatraEngine"].calculate(p.longitude);
            const navamsa = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$varga$2f$navamsaEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavamsaEngine"].calculate(p.longitude);
            return {
                ...p,
                nakshatra: nak.name,
                pada: nak.pada,
                navamsa: navamsa.navamsaSign
            };
        });
        const moon = planetDetails.find((p)=>p.name === 'Moon');
        if (!moon) {
            throw new Error('Moon not found');
        }
        const dasa = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dasa$2f$dasaEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DasaEngine"].calculate(moon.longitude, input.date);
        const ashtakavarga = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$ashtakavarga$2f$ashtakavargaEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AshtakavargaEngine"].calculate(planetDetails);
        // Transit calculation (current planetary positions)
        const transitPlanets = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$planet$2f$planetEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlanetEngine"].calculate(new Date());
        const transit = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$transit$2f$transitEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitEngine"].calculate(planetDetails, transitPlanets);
        return {
            lagna,
            houses,
            planets: planetDetails,
            dasa,
            ashtakavarga,
            transit
        };
    }
}
}),
"[project]/src/app/chart/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChartPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$componets$2f$charts$2f$SouthIndianChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/componets/charts/SouthIndianChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$core$2f$astrologyCore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/core/astrologyCore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ChartPage() {
    const chart = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$core$2f$astrologyCore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AstrologyCore"].generateChart({
        date: new Date(),
        latitude: 13.0827,
        longitude: 80.2707
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 40
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "South Indian Horoscope"
            }, void 0, false, {
                fileName: "[project]/src/app/chart/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$componets$2f$charts$2f$SouthIndianChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                planets: chart.planets
            }, void 0, false, {
                fileName: "[project]/src/app/chart/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/chart/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e75d987d._.js.map