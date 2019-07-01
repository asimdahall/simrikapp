import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { generalStyles } from '../../theme/generalStyle';
import Card from '../ShadowCard';

export default class VerticalCard extends Component {
	render() {
		return (
			<Card style={styles.verticalCard}>
				<View style={styles.imageContainer}>
					<Image
						source={{
							uri:
								'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						}}
						style={{ height: '100%', width: '100%' }}
						// style={styles.thumbnailImage}
					/>
				</View>
				<View style={styles.description}>
					<View style={styles.details}>
						<View style={styles.descHeaderContainer}>
							<Text style={styles.descHeaderText}>Bhatbhateni</Text>
						</View>
						<View style={styles.descDetailContainer}>
							<Text style={styles.descDetailText}>50 coupons/Rs.123</Text>
						</View>
					</View>
				</View>
			</Card>
		);
	}
}

let styles = StyleSheet.create({
	verticalCard: {
		marginTop: 15,
		width: '40%',
		height: 150,
		// borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.8,
		shadowRadius: 1,

		elevation: 1,
		borderWidth: 0
		// // elevation: 9
	},
	imageContainer: {
		height: '70%',
		width: '100%'
	},
	details: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
	},
	descHeaderText: {
		...generalStyles.fonts.rwb
	},
	descDetailText: {
		...generalStyles.fonts.h5,
		color: 'grey',
		...generalStyles.fonts.rw
	}
});
