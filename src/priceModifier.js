export const purchasePriceModifier = (r, step) => {
  if (r < -2)
    return step === 'raw' ? 3 : 2;
  if (r > 24)
    return step === 'raw' ? .15 : 0.575;
  switch (r) {
    case -2:
      return step === 'raw' ? 2.5 : 1.75;
    case -1:
      return step === 'raw' ? 2 : 1.5;
    case 0:
      return step === 'raw' ? 1.75 : 1.375;
    case 1:
      return step === 'raw' ? 1.5 : 1.25;
    case 2:
      return step === 'raw' ? 1.35 : 1.175;
    case 3:
      return step === 'raw' ? 1.25 : 1.125;
    case 4:
      return step === 'raw' ? 1.2 : 1.1;
    case 5:
      return step === 'raw' ? 1.15 : 1.075;
    case 6:
      return step === 'raw' ? 1.1 : 1.05;
    case 7:
      return step === 'raw' ? 1.05 : 1.025;
    case 8:
      return 1;
    case 9:
      return step === 'raw' ? 0.95 : 0.975;
    case 10:
      return step === 'raw' ? 0.90 : 0.95;
    case 11:
      return step === 'raw' ? 0.85 : 0.925;
    case 12:
      return step === 'raw' ? 0.8 : 0.9;
    case 13:
      return step === 'raw' ? 0.75 : 0.875;
    case 14:
      return step === 'raw' ? 0.7 : 0.85;
    case 15:
      return step === 'raw' ? 0.65 : 0.825;
    case 16:
      return step === 'raw' ? 0.6 : 0.8;
    case 17:
      return step === 'raw' ? 0.55 : 0.775;
    case 18:
      return step === 'raw' ? 0.5 : 0.75;
    case 19:
      return step === 'raw' ? 0.45 : 0.725;
    case 20:
      return step === 'raw' ? 0.4 : 0.7;
    case 21:
      return step === 'raw' ? 0.35 : 0.675;
    case 22:
      return step === 'raw' ? 0.3 : 0.65;
    case 23:
      return step === 'raw' ? 0.25 : 0.625;
    case 24:
      return step === 'raw' ? 0.2 : 0.6;
  }
}

export const salePriceModifier = (r, step) => {
  if (r < -2)
    return step === 'raw' ? 0.1 : 0.55;
  if (r > 24)
    return step === 'raw' ? 4 : 2.5;
  switch (r) {
    case -2:
      return step === 'raw' ? 0.2 : 0.6;
    case -1:
      return step === 'raw' ? 0.3 : 0.65;
    case 0:
      return step === 'raw' ? 0.4 : 0.7;
    case 1:
      return step === 'raw' ? 0.45 : 0.725;
    case 2:
      return step === 'raw' ? 0.5 : 0.75;
    case 3:
      return step === 'raw' ? 0.55 : 0.775;
    case 4:
      return step === 'raw' ? 0.6 : 0.8;
    case 5:
      return step === 'raw' ? 0.65 : 0.825;
    case 6:
      return step === 'raw' ? 0.7 : 0.85;
    case 7:
      return step === 'raw' ? 0.75 : 0.875;
    case 8:
      return step === 'raw' ? 0.8 : 0.9;
    case 9:
      return step === 'raw' ? 0.85 : 0.925;
    case 10:
      return step === 'raw' ? 0.9 : 0.95;
    case 11:
      return 1;
    case 12:
      return step === 'raw' ? 1.05 : 1.025;
    case 13:
      return step === 'raw' ? 1.1 : 1.05;
    case 14:
      return step === 'raw' ? 1.15 : 1.075;
    case 15:
      return step === 'raw' ? 1.2 : 1.1;
    case 16:
      return step === 'raw' ? 1.25 : 1.125;
    case 17:
      return step === 'raw' ? 1.3 : 1.15;
    case 18:
      return step === 'raw' ? 1.4 : 1.2;
    case 19:
      return step === 'raw' ? 1.5 : 1.25;
    case 20:
      return step === 'raw' ? 1.6 : 1.3;
    case 21:
      return step === 'raw' ? 1.75 : 1.375;
    case 22:
      return step === 'raw' ? 2 : 1.5;
    case 23:
      return step === 'raw' ? 2.5 : 1.75;
    case 24:
      return step === 'raw' ? 3 : 2;
  }
}
