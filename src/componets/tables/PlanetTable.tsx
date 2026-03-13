'use client';

export default function PlanetTable({ planets }) {
  return (
    <table border={1} cellPadding={6}>
      <thead>
        <tr>
          <th>Planet</th>
          <th>Rasi</th>
          <th>Nakshatra</th>
          <th>Pada</th>
          <th>Navamsa</th>
        </tr>
      </thead>

      <tbody>
        {planets.map((p) => (
          <tr key={p.name}>
            <td>{p.name}</td>
            <td>{p.rasi}</td>
            <td>{p.nakshatra}</td>
            <td>{p.pada}</td>
            <td>{p.navamsa}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
