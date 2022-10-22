/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { HomeCardProps } from './HomeCard.props';
import { Container, Image, BottomContainer } from './HomeCard.style';
import { FaBed, FaBath, FaHouseUser, FaHammer, FaCheckSquare } from 'react-icons/fa';
import { Row, Col, Text } from 'common/common.styles';
export const HomeCard = (props: HomeCardProps) => {
	const { data } = props;
	return (
		<Container>
			<div className='z-10 relative'>
				<Image src={data.imgSrc} />
			</div>
			<BottomContainer>
				<Row className='justify-between content-between mt-2'>
					<Col>
						<Text className='max-w-xs font-bold font text-sm'>{data.address}</Text>
						<Text>{`${data.city}, ${data.state} ${data.zipCode}`}</Text>
					</Col>
					<div>
						<FaCheckSquare color='green' size={20} />
					</div>
				</Row>
				<Row className='justify-between content-between mt-2'>
					<Row>
						<FaBed color='grey' size={12} />
						<Text className='text-xs -mt-0.5 ml-1'>{data.bedrooms}</Text>
					</Row>
					<Row>
						<FaBath color='grey' size={12} />
						<Text className='text-xs -mt-0.5 ml-1'>{data.bathrooms}</Text>
					</Row>
					<Row>
						<FaHouseUser color='grey' size={12} />
						<Text className='text-xs -mt-0.5 ml-1'>{data.sqft}</Text>
					</Row>
					<Row>
						<FaHammer color='grey' size={12} />
						<Text className='text-xs -mt-0.5 ml-1'>yr:{data.yearBuilt}</Text>
					</Row>
				</Row>
			</BottomContainer>
		</Container>
	);
};

export default HomeCard;
