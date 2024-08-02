// /app/lib/sanity/sanityFetch.js

import { sanityClient } from "./sanityConnection";

export async function fetchData(query) {
  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
}
