import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    // Make a GET request to the external API to get movies
    const apiUrl = 'http://xvip.pro:80/player_api.php';
    const username = 'asir-abdelhady';
    const password = '01154454803';
    const action = 'get_vod_streams';

    const getRequestUrl = `${apiUrl}?username=${username}&password=${password}&action=${action}`;
    
    const response = await axios.get(getRequestUrl);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch movies. Status code: ${response.status}`);
    }

    // Assuming the response data is an array of movies
    const movies = response.data;

    // Print the response to the console
    console.log('API Response:', movies);

    return res.status(200).json(movies);
  } catch (error) {
    console.error('Error:', (error as Error).message);
    return res.status(500).end();
  }
}
