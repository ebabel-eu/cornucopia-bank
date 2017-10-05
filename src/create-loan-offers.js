const createLoanOffers = () => {
  const randomRate = (minimum) => (Math.random() * (minimum/2)) + minimum;
  rateOffers = [randomRate(2), randomRate(4), randomRate(6)];
  rateOffers.sort();

  const percentageOffers = rateOffers.map(rateOffer => rateOffer.toFixed(2));
  const aprNote = (minAmount, maxAmount, minYears, maxYears) =>
    `% APR representative (fixed) on unsecured loans from €${minAmount} to €${maxAmount} for ${minYears} to ${maxYears} years. Terms and conditions apply. Subject to status. Dutch residents aged 18 to 79.`;

  const loanOffers = [
    {
      title: 'Our best loan rate',
      description: 'Time limited offer until stocks last',
      rate: rateOffers[0] / 100,
      rateDescription: `${percentageOffers[0]}%`,
      rateNote: `${percentageOffers[0]}${aprNote('7,500', '14,999', 1, 5)}`,
      minAmount: 7500,
      maxAmount: 14999,
      minYears: 1,
      maxYears: 5,
      image: '/images/cat1.jpg',
    },
    {
      title: 'Car loan',
      description: 'Go further with your car loan',
      rate: rateOffers[1] / 100,
      rateDescription: `${percentageOffers[1]}%`,
      rateNote: `${percentageOffers[1]}${aprNote('3,000', '5,000', 1, 10)}`,
      minAmount: 3000,
      maxAmount: 5000,
      minYears: 1,
      maxYears: 10,
      image: '/images/cat2.jpg',
    },
    {
      title: 'Flexi-loan',
      description: 'Freedom to delay payments for up to 36 months',
      rate: rateOffers[2] / 100,
      rateDescription: `${percentageOffers[2]}%`,
      rateNote: `${percentageOffers[2]}${aprNote('500', '2,000', 5, 20)}`,
      minAmount: 500,
      maxAmount: 2000,
      minYears: 5,
      maxYears: 20,
      image: '/images/cat3.jpg',
    },
  ];

  localStorage['loanOffers'] = JSON.stringify(loanOffers);

  return loanOffers;
};
