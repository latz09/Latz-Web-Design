import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_AI_CHAT_WIDGET_SECTION as query } from '@/data/queries/service-automations/FETCH_AI_CHAT_WIDGET_SECTION';
import ChatWidget from './sections/ChatWidget';

const ChatWidgetContainer = async () => {
	const data = await fetchData(query);

	return (
		<>
			<ChatWidget data={data} />
		</>
	);
};

export default ChatWidgetContainer;
