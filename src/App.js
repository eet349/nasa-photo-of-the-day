import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApodInfo from './components/ApodInfo/ApodInfo';
import './App.css';

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
			<div className='App'>
				<h1>NASA Astronomy Photo of the Day ({apodData.date})</h1>
				<h2>{apodData.title}</h2>
				<img src={apodData.url} />

				{showApodInfo ? (
					<ApodInfo apodData={apodData} toggleApodInfo={toggleApodInfo} />
				) : (
					<a
						style={{ display: 'block' }}
						href='#'
						onClick={(e) => {
							e.preventDefault();
							toggleApodInfo();
						}}
					>
						More Info
					</a>
				)}
			</div>
		);
	}
}

export default App;
