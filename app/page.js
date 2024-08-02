import { fetchData } from "@/lib/sanity/sanityFetch";
import { FETCH_HOME_PAGE_DATA_QUERY as query } from "@/data/queries/home-page/FETCH_HOME_PAGE_DATA_QUERY";


export default async function Home() {
	const [data] = await fetchData(query);

	return (
		<main className=' p-32'>
			<h1 className='text-4xl  font-bold'>Latz Web Design</h1>
			<p className=''>dfkjaklvjklaj</p>
		</main>
	);
}
