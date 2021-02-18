import React from 'react';
import styled from 'styled-components';

const StyledApodInfo = styled.div`
	& {
		margin-bottom: 20px;
		background-color: '#202324';
		color: '#d8d4cf';
	}
	p {
		color: '#d8d4cf';
	}
`;

const ApodInfo = ({ apodData, toggleApodInfo }) => {
	return (
		<StyledApodInfo>
			<p>{apodData.explanation}</p>
			<p>
				Photographer: <strong>{apodData.copyright}</strong>
			</p>
			<p>Date: {apodData.date}</p>
			<a
				href='/'
				onClick={(e) => {
					e.preventDefault();
					toggleApodInfo();
				}}
			>
				Show Less
			</a>
		</StyledApodInfo>
	);
};

export default ApodInfo;
