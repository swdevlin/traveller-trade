import {purchasePriceModifier, salePriceModifier} from "./priceModifier";

const DICE_ODDS = [
  0,0,1/36,2/36,3/36,4/36,5/36,6/36,5/36,4/36,3/36,2/36,1/36
];

const THREE_DICE_ODDS = [
  0,
  0,
  0,
  1/216,
  3/216,
  6/216,
  10/216,
  15/216,
  21/216,
  25/216,
  27/216,
  27/216,
  25/216,
  21/216,
  15/216,
  10/216,
  6/216,
  3/216,
  1/216
]

const DEFAULT_SUPPLIER_BROKER = 2;
const DEFAULT_PURCHASER_BROKER = 2;

export const averagePurchasePrice = (price, dm, broker, brokerRule, brokerMultiplier, step) => {
  let ap = 0;
  if (brokerRule === 'effect') {
    for (let e = 2; e <= 12; e++) {
      const effect = e + broker - 8;
      const half_effect = Math.ceil(effect / 2);
      for (let r = 3; r <= 18; r++)
        ap += price * purchasePriceModifier(r + dm + effect - DEFAULT_SUPPLIER_BROKER, step) * THREE_DICE_ODDS[r] * DICE_ODDS[e];
    }
  } else if (brokerRule === 'halfeffect') {
      for (let e=2; e<=12; e++ ) {
        const effect = Math.ceil((e + broker - 8)/2);
        for (let r=3; r<=18; r++)
          ap += price*purchasePriceModifier(r+dm+effect-DEFAULT_SUPPLIER_BROKER, step)*THREE_DICE_ODDS[r]*DICE_ODDS[e];
      }
  } else if (brokerRule === 'effect%') {
    for (let e=2; e<=12; e++ ) {
      const emult = 1 - (e + broker - 8) * brokerMultiplier / 100;
      for (let r=3; r<=18; r++)
        ap += price*purchasePriceModifier(r+dm, step)*THREE_DICE_ODDS[r]*emult*DICE_ODDS[e];
    }
  } else
    for (let r=3; r<=18; r++)
      if (brokerRule === 'percent')
        ap += price * purchasePriceModifier(r + dm, step) * THREE_DICE_ODDS[r] * (1 - (broker * brokerMultiplier) / 100);
      else
        ap += price * purchasePriceModifier(r + dm + broker - DEFAULT_SUPPLIER_BROKER, step) * THREE_DICE_ODDS[r];
  return Math.round(ap);
};

export const averageSalePrice = (price, dm, broker, brokerRule, brokerMultiplier, step) => {
  let ap = 0;
  if (brokerRule === 'effect') {
    for (let e = 2; e <= 12; e++) {
      const effect = e + broker - 8;
      for (let r = 3; r <= 18; r++)
        ap += price * salePriceModifier(r + dm + effect - DEFAULT_PURCHASER_BROKER, step) * THREE_DICE_ODDS[r] * DICE_ODDS[e];
    }
  } else if (brokerRule === 'halfeffect') {
    for (let e=2; e<=12; e++ ) {
      const effect = Math.ceil((e + broker - 8)/2);
      for (let r=3; r<=18; r++)
        ap += price*salePriceModifier(r+dm+effect-DEFAULT_PURCHASER_BROKER, step)*THREE_DICE_ODDS[r]*DICE_ODDS[e];
    }
  } else if (brokerRule === 'effect%') {
    for (let e=2; e<=12; e++ ) {
      const emult = 1+(e+broker-8)*brokerMultiplier/100;
      for (let r=3; r<=18; r++)
        ap += price*salePriceModifier(r+dm, step)*THREE_DICE_ODDS[r]*emult*DICE_ODDS[e];
    }
  } else {
    for (let r=3; r<=18; r++)
      if (brokerRule === 'raw')
        ap += price * salePriceModifier(r + dm - DEFAULT_PURCHASER_BROKER, step) * THREE_DICE_ODDS[r];
      else if (brokerRule === 'bas')
        ap += price * salePriceModifier(r + broker + dm - DEFAULT_PURCHASER_BROKER, step) * THREE_DICE_ODDS[r];
      else if (brokerRule === 'hbas')
        ap += price * salePriceModifier(r + Math.ceil(broker/2) + dm - DEFAULT_PURCHASER_BROKER, step) * THREE_DICE_ODDS[r];
      else
        ap += price*salePriceModifier(r+dm, step)*THREE_DICE_ODDS[r]*(1+(broker*brokerMultiplier)/100);
  }
  return Math.round(ap);
};
