import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const categories = [
	{
		name: 'all',
		text: '전체보기',
	},
	{
		name: 'business',
		text: '비즈니스',
	},
	{
		name: 'entertainment',
		text: '연예',
	},
	{
		name: 'health',
		text: '건강',
	},
	{
		name: 'science',
		text: '과학',
	},
	{
		name: 'sports',
		text: '스포츠',
	},
	{
		name: 'technology',
		text: '기술',
	},
];

const NavBox = styled.div`
	background-color: white;
	border: 1px solid #333;
	padding: 10px;
	margin-top: 50px;
	display: flex;
	justify-content: center;
`;

const Category = styled(NavLink)`
	font-size: 18px;

	color: black;
	text-decoration: none;
	text-transform: capitalize;
	border: 1px solid transparent;
	border-radius: 30px;
	padding: 10px 15px;
	margin: 5px;
	transition: 0.5s;

	&:hover {
		border: 1px solid #333;
	}

	&.active {
		border: 1px solid #333;
		background-color: #222;
		color: #fff;
	}
`;

const Categories = () => {
	return (
		<NavBox>
			{categories.map((c) => (
				<Category
					key={c.name}
					activeClassName='active'
					exact={c.name === 'all'}
					to={c.name === 'all' ? '/' : `${c.name}`}>
					{c.name}
				</Category>
			))}
		</NavBox>
	);
};

export default Categories;
