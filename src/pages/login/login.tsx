import React from 'react';
import { NextPage } from 'next';
import { Button, Input } from 'antd';
import { Container, Image, ImageContainer, InputContainer, RightContainer } from './login.style';
import { Text } from 'common/common.styles';

const LoginScreen: NextPage = () => {
	return (
		<Container>
			<RightContainer>
				<InputContainer>
					<Text className='mb-8 font-black text-2xl'>Sign In</Text>
					<Input placeholder='Enter email' className='mb-6' />
					<Input placeholder='Enter password' type='password' />

					<Button type='default' block className='mt-4'>Login</Button>

					<Text className='underline text-sm text-end mt-2'>Forgot Password?</Text>
				</InputContainer>
			</RightContainer>
			<ImageContainer>
				<Image src='https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg' />
			</ImageContainer>
		</Container>
	);
};

export default LoginScreen;
