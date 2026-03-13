'use client';

import { AstrologyCore } from '../../engine/core/astrologyCore';
import {ChartDashboard} from '../../components/layout/ChartDashboard';

export default function ChartPage() {
  const chart = AstrologyCore.generateChart({
    date: new Date(),
    latitude: 13.0827,
    longitude: 80.2707,
  });

  return (
    <div style={{ padding: 40 }}>
      <h2>AstroMaya Horoscope</h2>

      <ChartDashboard chart={chart} />
    </div>
  );
}
