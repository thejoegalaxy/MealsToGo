const liveHost = 'https://us-central1-mealstogo-c557b.cloudfunctions.net';
const localHost = 'http://localhost:5001/mealstogo-c557b/us-central1';

export const isDevelopment = process.env.NODE_ENV === 'development';

//export const host = isDevelopment ? localHost : liveHost;
export const host = liveHost;
