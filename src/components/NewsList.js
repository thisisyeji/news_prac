import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import styled from 'styled-components';

const ListBox = styled.section`
	width: 768px;
	margin: 100px auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

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
		<ListBox>
			{loading ? <div>...loading</div> : null}
			{articles &&
				articles.map((article) => (
					<div key={article.url}>
						<NewsItem article={article} />
					</div>
				))}
		</ListBox>
	);
};

export default NewsList;
