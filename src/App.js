import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ApodInfo from './components/ApodInfo/ApodInfo';

const StyledApp = styled.div`
	& {
		text-align: center;
		background-color: #202324;
		color: #d8d4cf;
	}

	a {
		text-decoration: none;
		display: block;
		margin: 25px 0;
		color: #3391ff;
		&:visited {
			color: #3391ff;
		}
	}

	p {
		margin: 20px 20%;
	}
`;

function App() {
	const [apodData, setApodData] = useState(null);
	const [showApodInfo, setShowApodData] = useState(false);

	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
			.then((res) => {
				setApodData(res.data);
			})
			.catch();
	}, []);
	const toggleApodInfo = () => {
		setShowApodData(!showApodInfo);
	};
	if (!apodData) {
		return <h3>Loading</h3>;
	} else {
		return (
			<StyledApp>
				<h1>NASA Astronomy Photo of the Day ({apodData.date})</h1>
				<h2>{apodData.title}</h2>
				<img src={apodData.url} alt={apodData.title} />

				{showApodInfo ? (
					<ApodInfo apodData={apodData} toggleApodInfo={toggleApodInfo} />
				) : (
					<a
						href='/'
						onClick={(e) => {
							e.preventDefault();
							toggleApodInfo();
						}}
					>
						Show More
					</a>
				)}
			</StyledApp>
		);
	}
}

export default App;
