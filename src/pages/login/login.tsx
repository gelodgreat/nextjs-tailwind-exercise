import React, { useState } from 'react';
import { NextPage } from 'next';
import { Button, Form, Input } from 'antd';
import { Container, Image, ImageContainer, InputContainer, RightContainer } from './login.style';
import { Text } from 'common/common.styles';
import userDataMock from 'data/users.json';

const LoginScreen: NextPage = () => {
	const [userAuthenticated, setUserAuthenticated] = useState<boolean | null>(null);

	const handleOnSubmit = (values: any) => {
		setUserAuthenticated(false);
		const userData = userDataMock.find((userdata) => userdata.email === values.email && userdata.password === values.password);
		if (userData) {
			localStorage.setItem('user', JSON.stringify(userData));
			setUserAuthenticated(true);
		} else {
			console.log('not auth');
			setUserAuthenticated(false);
		}
	};

	return (
		<Container>
			<RightContainer>
				<InputContainer>
					<Text className='mb-8 font-black text-2xl'>Sign In</Text>

					<Form onFinish={handleOnSubmit}>
						<Form.Item name='email' rules={[{ required: true, message: 'Please enter your email address!' }]}>
							<Input placeholder='Enter email address' />
						</Form.Item>
						<Form.Item name='password' rules={[{ required: true, message: 'Please enter your password!' }]}>
							<Input.Password placeholder='Enter password' />
						</Form.Item>
						<Form.Item>
							<Button type='default' block className='mt-4' htmlType='submit'>
								Login
							</Button>
						</Form.Item>
					</Form>

					{userAuthenticated !== null && <Text className={`text-md font-medium ${userAuthenticated ? 'text-green-500' : 'text-red-500'}`}>{userAuthenticated ? `You've been authenticated successfully` : `User not found, Invalid Credentials`}</Text>}
					<Text className='underline text-sm text-end mt-2'>Forgot Password?</Text>
				</InputContainer>
			</RightContainer>

			<ImageContainer>
				<Image src='https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg' alt='https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg' />
			</ImageContainer>
		</Container>
	);
};

export default LoginScreen;
