import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
	margin-bottom: 80px;

	a {
		width: 100%;
		text-decoration: none;
		color: black;

		img {
			width: 100%;
			margin-bottom: 20px;
		}
		h1 {
			font-size: 24px;
			font-weight: 700;
			margin-bottom: 20px;

			&:hover {
				text-decoration: underline;
			}
		}

		p {
			line-height: 1.5;
			margin-bottom: 10px;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	span {
		display: block;
		width: 100%;
		text-align: right;
	}
`;

const NewsItem = ({ article }) => {
	const { url, urlToImage, description, title, publishedAt } = article;
	return (
		<ItemBox>
			<a href={url}>
				<img src={urlToImage} alt={title} />
				<h1>{title}</h1>
				<p>{description}</p>
			</a>

			<span> {publishedAt.substring(0, 10)}</span>
		</ItemBox>
	);
};

export default NewsItem;
