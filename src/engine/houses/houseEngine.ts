export class HouseEngine {
  static calculateHouses(lagna: number): number[] {
    const houses: number[] = [];

    for (let i = 0; i < 12; i++) {
      houses.push((lagna + i * 30) % 360);
    }

    return houses;
  }
  static calculateHouse(transitLongitude: number, lagna: number) {
    const diff = (transitLongitude - lagna + 360) % 360;

    return Math.floor(diff / 30) + 1;
  }
}
