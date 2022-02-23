import createStripe from 'stripe-client';
import { host } from '../../utils/env';

const stripe = createStripe(
  'pk_test_51KVm3iHfv85xLQG6hPhIyxjfcMupr4ILE0prnu1D8Ht8q66JRatXwNuqdasWH5J4UNqBUBl7tKDsyK6M0QOVpN0v008ssT75Az'
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: 'POST',
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject('something went wrong processing your payment');
    }
    return res.json();
  });
};
