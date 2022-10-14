import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
	background-color: #efefef;
	border: 1px solid #999;
	border-radius: 20px;
	padding: 30px;
	margin-bottom: 50px;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	transition: 0.5s;

	&:hover {
		box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
		background-color: #fff;
		transform: translateY(-5px);
	}

	.news_title {
		width: 40%;
		a {
			text-decoration: none;
			color: black;

			display: flex;
			justify-content: center;
			align-items: center;

			img {
				width: 90%;
				margin: 0 auto;
				margin-bottom: 20px;
			}
		}
	}

	.news_contents {
		width: 60%;
		a {
			text-decoration: none;
			color: black;

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
			{urlToImage && (
				<div className='news_title'>
					<a href={url}>
						<img src={urlToImage} alt={title} />
					</a>
				</div>
			)}

			<div className='news_contents'>
				<a href={url}>
					<h1>{title}</h1>
					<p>{description}</p>
					<span> {publishedAt.substring(0, 10)}</span>
				</a>
			</div>
		</ItemBox>
	);
};

export default NewsItem;
