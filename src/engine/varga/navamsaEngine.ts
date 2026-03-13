export class NavamsaEngine {
  static calculate(longitude: number) {
    const rasi = Math.floor(longitude / 30) + 1;

    const rasiDegree = longitude % 30;

    const navamsaSize = 30 / 9;

    const navamsaIndex = Math.floor(rasiDegree / navamsaSize);

    let startSign = 0;

    // Movable signs
    if ([1, 4, 7, 10].includes(rasi)) {
      startSign = rasi;
    }

    // Fixed signs
    else if ([2, 5, 8, 11].includes(rasi)) {
      startSign = ((rasi + 8 - 1) % 12) + 1;
    }

    // Dual signs
    else {
      startSign = ((rasi + 4 - 1) % 12) + 1;
    }

    const navamsaSign = ((startSign + navamsaIndex - 1) % 12) + 1;

    return {
      navamsaSign,
      navamsaIndex: navamsaIndex + 1,
    };
  }
}
