export const purchasePriceModifier = (r) => {
  if (r < -2)
    return 3;
  if (r > 24)
    return .15;
  switch (r) {
    case -2:
      return 2.5;
    case -1:
      return 2;
    case 0:
      return 1.75;
    case 1:
      return 1.5;
    case 2:
      return 1.35;
    case 3:
      return 1.25;
    case 4:
      return 1.2;
    case 5:
      return 1.15;
    case 6:
      return 1.1;
    case 7:
      return 1.05;
    case 8:
      return 1;
    case 9:
      return 0.95;
    case 10:
      return 0.90;
    case 11:
      return 0.85;
    case 12:
      return 0.8;
    case 13:
      return 0.75;
    case 14:
      return 0.7;
    case 15:
      return 0.65;
    case 16:
      return 0.6;
    case 17:
      return 0.55;
    case 18:
      return 0.5;
    case 19:
      return 0.45;
    case 20:
      return 0.4;
    case 21:
      return 0.35;
    case 22:
      return 0.3;
    case 23:
      return 0.25;
    case 24:
      return 0.5;
  }
}

export const salePriceModifier = (r) => {
  if (r < -2)
    return 0.1;
  if (r > 24)
    return 4;
  switch (r) {
    case -2:
      return 0.2;
    case -1:
      return 0.3;
    case 0:
      return 0.4;
    case 1:
      return 0.45;
    case 2:
      return 0.5;
    case 3:
      return 0.55;
    case 4:
      return 0.6;
    case 5:
      return 0.65;
    case 6:
      return 0.7;
    case 7:
      return 0.75;
    case 8:
      return 0.8;
    case 9:
      return 0.85;
    case 10:
      return 0.9;
    case 11:
      return 1;
    case 12:
      return 1.05;
    case 13:
      return 1.1;
    case 14:
      return 1.15;
    case 15:
      return 1.2;
    case 16:
      return 1.25;
    case 17:
      return 1.3;
    case 18:
      return 1.4;
    case 19:
      return 1.5;
    case 20:
      return 1.6;
    case 21:
      return 1.75;
    case 22:
      return 2;
    case 23:
      return 2.5;
    case 24:
      return 3;
  }
}
