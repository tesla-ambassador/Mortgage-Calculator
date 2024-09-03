export function repayments(p: number, r: number, t: number): [number, number] {
  r = r / 100;
  const ratePerMonth = r / 12;
  const timeExponet = 12 * t;
  const denomPower = Math.pow(1 + ratePerMonth, -timeExponet);
  const numerator = p * ratePerMonth;
  const denomenator = 1 - denomPower;

  const monthlyPayment = numerator / denomenator;
  const paymentOverTerm = monthlyPayment * timeExponet;

  return [
    Math.round(monthlyPayment * 100) / 100,
    Math.round(paymentOverTerm * 100) / 100,
  ];
}

export function interest(p: number, r: number, t: number): [number, number] {
  r = r / 100;

  const term = t * 12;

  const monthlyInterest = (p * r) / 12;
  const interestOverTerm = monthlyInterest * term;

  return [monthlyInterest, interestOverTerm];
}

export function formatDisplay(n: number): string {
  // The commented method failed

  //   const regex = /(\d)(?=(\d{3}) + (?!\d))/g;
  //   const replacement = "£1";
  //   const formattedNumber = n.toString().replace(regex, replacement);

  const formattedNumber = n.toLocaleString();

  return formattedNumber;
}
