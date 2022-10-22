import React from 'react';
import { NextPage } from 'next';
import homeDataJson from 'data/homes.json';
import HomeCard from 'components/HomeCard/HomeCard';

const HomeScreen: NextPage = () => {
	return (
		<div className='flex flex-row flex-wrap w-full'>
			{homeDataJson.map((home, index) => {
				return <HomeCard key={index} data={home} />;
			})}
		</div>
	);
};

export default HomeScreen;
