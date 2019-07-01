import React, { Component, useEffect } from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import MainApp from './src';

export default class App extends Component {
	state = {
		fontLoaded: false
	};
	async componentDidMount() {
		await Font.loadAsync({
			...Ionicons.font,
			Raleway: require('./src/assets/fonts/Raleway/Raleway-Regular.ttf'),
			RalewayBold: require('./src/assets/fonts/Raleway/Raleway-Bold.ttf'),
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		});
		this.setState({
			fontLoaded: true
		});
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.fontLoaded ? <MainApp /> : <ActivityIndicator size="large" />}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
