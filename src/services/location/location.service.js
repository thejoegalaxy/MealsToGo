import camelize from 'camelize';
import { host, isMock } from '../../utils/env';

// city name is transformed into lat lng location.
export const locationRequest = (searchTerm) => {
  // console.log(searchTerm);
  // console.log(host);
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`).then(
    (res) => {
      return res.json();
    }
  );
};

export const locationTransform = (result) => {
  //console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  // console.log(lat, lng);
  return { lat, lng, viewport: geometry.viewport };
};
