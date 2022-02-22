import React from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import createStripe from 'stripe-client';

const stripe = createStripe(
  'pk_test_51KVm3iHfv85xLQG6hPhIyxjfcMupr4ILE0prnu1D8Ht8q66JRatXwNuqdasWH5J4UNqBUBl7tKDsyK6M0QOVpN0v008ssT75Az'
);

export const CreditCardInput = () => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes('incomplete');
    console.log(isIncomplete);
    console.log(values.number);
    if (!isIncomplete) {
      const card = {
        number: values.number,
        exp_month: values.exp_month,
        exp_year: values.exp_year,
        cvc: values.cvc,
        name: 'Fred',
      };
      const info = await stripe.createToken({ card });
      console.log(info);
    }
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
