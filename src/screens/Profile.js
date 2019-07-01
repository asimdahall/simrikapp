import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/Header';
import { generalStyles } from '../theme/generalStyle';
import { colors } from '../theme/colors';
import Heading from '../components/Heading';

export default class Profile extends Component {
	render() {
		return (
			<View>
				<AppHeader />
				<View style={{ ...generalStyles.layout.container, height: '50%' }}>
					<View style={styles.profilePictureSection}>
						<View style={styles.profilePictureContainer}>
							<Image
								style={styles.profilePictureImage}
								source={{
									uri:
										'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg/220px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'
								}}
							/>
						</View>
						<View style={[ styles.profileNameContainer ]}>
							<Heading text="Mark Zukerberg" />
						</View>
					</View>
				</View>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	profilePictureSection: {
		height: '100%',
		// borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	profilePictureContainer: { height: '50%' },
	profilePictureImage: {
		height: 100,
		width: 100,
		borderRadius: 50,
		borderWidth: 3,
		borderColor: 'white'
	}
});
