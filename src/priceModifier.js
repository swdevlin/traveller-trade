export const purchasePriceModifier = (r, step) => {
  if (step === '1%') {
    if (r < -3)
      r = -3;
    else if (r > 25)
      r = 25;
    return 1 + (8-r)/100.0;
  }

  let v;
  if (r < -2)
    v = 3;
  else if (r > 24)
    v = .15;
  else
    switch (r) {
      case -2:
        v = 2.5; break;
      case -1:
        v = 2; break;
      case 0:
        v = 1.75; break;
      case 1:
        v = 1.5; break;
      case 2:
        v = 1.35; break;
      case 3:
        v = 1.25; break;
      case 4:
        v = 1.2; break;
      case 5:
        v = 1.15; break;
      case 6:
        v = 1.1; break;
      case 7:
        v = 1.05; break;
      case 8:
        v = 1; break;
      case 9:
        v = 0.95; break;
      case 10:
        v = 0.90; break;
      case 11:
        v = 0.85; break;
      case 12:
        v = 0.8; break;
      case 13:
        v = 0.75; break;
      case 14:
        v = 0.7; break;
      case 15:
        v = 0.65; break;
      case 16:
        v = 0.6; break;
      case 17:
        v = 0.55; break;
      case 18:
        v = 0.5; break;
      case 19:
        v = 0.45; break;
      case 20:
        v = 0.4; break;
      case 21:
        v = 0.35; break;
      case 22:
        v = 0.3; break;
      case 23:
        v = 0.25; break;
      case 24:
        v = 0.2; break;
    }
  if (step === 'half')
    v = 1 + (v-1)/2
  return v;

}

export const salePriceModifier = (r, step) => {
  if (step === '1%') {
    if (r < -3)
      r = -3;
    else if (r > 25)
      r = 25;
    return 1 - (11-r)/100.0;
  }
  let v;
  if (r < -2)
    v = 0.1;
  else if (r > 24)
    v = 4;
  else
    switch (r) {
      case -2:
        v = 0.2; break;
      case -1:
        v = 0.3; break;
      case 0:
        v = 0.4; break;
      case 1:
        v = 0.45; break;
      case 2:
        v = 0.5; break;
      case 3:
        v = 0.55; break;
      case 4:
        v = 0.6; break;
      case 5:
        v = 0.65; break;
      case 6:
        v = 0.7; break;
      case 7:
        v = 0.75; break;
      case 8:
        v = 0.8; break;
      case 9:
        v = 0.85; break;
      case 10:
        v = 0.9; break;
      case 11:
        v = 1; break;
      case 12:
        v = 1.05; break;
      case 13:
        v = 1.1; break;
      case 14:
        v = 1.15; break;
      case 15:
        v = 1.2; break;
      case 16:
        v = 1.25; break;
      case 17:
        v = 1.3; break;
      case 18:
        v = 1.4; break;
      case 19:
        v = 1.5; break;
      case 20:
        v = 1.6; break;
      case 21:
        v = 1.75; break;
      case 22:
        v = 2; break;
      case 23:
        v = 2.5; break;
      case 24:
        v = 3; break;
    }

  if (step === 'half')
    v = 1 + (v-1)/2

  return v;
}
