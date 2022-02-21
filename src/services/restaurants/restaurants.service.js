//import { mocks, mockImages } from './mock';
import camelize from 'camelize';
import { host, isMock } from '../../utils/env';

// lat lng input and placesNearby returns a list of restaurants nearby.
export const restaurantsRequest = (location) => {
  // console.log(location);
  // console.log(host);
  return fetch(`${host}/placesNearby?location=${location}&mock=${isMock}`).then(
    (res) => {
      return res.json();
    }
  );
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResults);
};
