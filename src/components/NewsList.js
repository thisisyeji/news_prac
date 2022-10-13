import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		setLoading(true);
		const response = await axios.get(`
  https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=6a278c02193044bebdb4e28e35fcd854`);
		setArticles(response.data.articles);
	};

	useEffect(() => {
		getData();
		setLoading(false);
	}, []);

	return (
		<>
			{loading ? <div>...loading</div> : null}
			{articles &&
				articles.map((article) => (
					<div key={article.url}>
						<img src={article.urlToImage} alt={article.title} />
						<h1>{article.title}</h1>
						<span>{article.publishedAt}</span>
					</div>
				))}
		</>
	);
};

export default NewsList;
