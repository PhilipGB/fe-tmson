import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchResults } from '../utils/api-filterjobs';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { StyledJobCard } from '../styles';
import styled from 'styled-components';

const SearchResults = (props) => {
	const { search } = useLocation();
	const [searchResults, setSearchResults] = useState([]);

	console.log(search);

	useEffect(() => {
		getSearchResults(search).then((searchFromApi) => {
			setSearchResults(searchFromApi);
		});
	}, [search]);

	return (
		<StyledResults>
			<main>
				<SearchBar />
				<h1 id="search">Search Results:</h1>
				<StyledSearchContainer>
					{searchResults &&
						searchResults.map((results) => {
							console.log(results);
							return (
								<StyledJobCard key={results.task_id}>
									<div>
										<h1>JOB</h1>
									</div>
									<img src={results.thumbnail_image_url} />
									<h2>Search result: {results.task_name}</h2>
									<h2>Skill category: {results.skill_category}</h2>
									<h2>Skill subcategory: {results.skill_subcategory}</h2>
									<Link key={results.task_id} to={`/tasks/${results.task_id}`}>
										{' '}
										See more...{' '}
									</Link>
								</StyledJobCard>
							);
						})}
				</StyledSearchContainer>
			</main>
		</StyledResults>
	);
};

export const StyledSearchContainer = styled.div`
	display: grid;
	width: 70vw;
	margin: auto;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 2fr));
`;

export const StyledResults = styled.div`
	background-color: black;
	color: white;
	height: 100vh;

	#search {
		margin: 2rem 2rem;
		color: #3ac2bb;
	}
`;

export default SearchResults;
