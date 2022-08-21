import axios from 'axios';
import { Ad } from 'components/models';

export async function getAds() {
  try {
    const { data, status } = await axios.get<Ad[]>(
      'https://cors-anywhere.herokuapp.com/http://178.223.75.184:3000/ads',
      {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
    } else {
      console.log('unexpected error: ', error);
    }
    return [];
  }
}
