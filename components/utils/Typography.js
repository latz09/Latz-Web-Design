export const MainHeading = ({ title, theme }) => {
	return <h1 className={`text-3xl lg:text-5xl font-black ${theme}`}>{title}</h1>;
};

export const TopHeading = ({ title, theme }) => {
	return <h2 className={`text-lg lg:text-xl font-bold ${theme}`}>{title}</h2>;
};

export const Description = ({ description, theme }) => {
	return <p className={`text-lg lg:text-xl leading-8 lg:leading-9 ${theme}`}>{description}</p>;
};
