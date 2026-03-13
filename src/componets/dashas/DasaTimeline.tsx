'use client';

export default function DasaTimeline({ dasa }) {
  return (
    <div>
      <h3>Dasa Period</h3>

      {dasa.map((d) => (
        <div key={d.planet}>
          {d.planet} : {d.start} → {d.end}
        </div>
      ))}
    </div>
  );
}
