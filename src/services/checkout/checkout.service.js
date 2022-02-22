import createStripe from 'stripe-client';

const stripe = createStripe(
  'pk_test_51KVm3iHfv85xLQG6hPhIyxjfcMupr4ILE0prnu1D8Ht8q66JRatXwNuqdasWH5J4UNqBUBl7tKDsyK6M0QOVpN0v008ssT75Az'
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
