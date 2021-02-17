import React from 'react';
import './ApodInfo.css';

const ApodInfo = ({ apodData, toggleApodInfo }) => {
	return (
		<div className='apodInfo-container'>
			<p>{apodData.explanation}</p>
			<p>Photographer: {apodData.copyright}</p>
			<p>Date: {apodData.date}</p>
			<a
				href='#'
				onClick={(e) => {
					e.preventDefault();
					toggleApodInfo();
				}}
			>
				Show Less
			</a>
		</div>
	);
};

export default ApodInfo;
