import React, { Component } from 'react';
import {
	Text,
	Dimensions,
	View,
	ScrollView,
	Image,
	Platform,
	StatusBar,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import offers from './mockData.json';
import { Button, Icon, Header, Left, Right } from 'native-base';
import { colors } from '../theme/colors';
import { generalStyles } from '../theme/generalStyle';
let { height, width } = Dimensions.get('window');

export default class ResultList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			offers: []
		};
	}
	componentDidMount() {
		this.setState({
			offers: offers.offers
		});
	}
	render() {
		return (
			<React.Fragment>
				<View
					style={{
						backgroundColor: colors.primaryColor,
						height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
					}}
				>
					<StatusBar translucent backgroundColor={colors.primaryDarkColor} barStyle="light-content" />
				</View>
				<View>
					<Header style={[ { backgroundColor: colors.primaryColor }, styles.header ]}>
						<View style={styles.headerTitle}>
							<Text style={[ { ...generalStyles.fonts.rw }, styles.headerTtleText ]}>Offers list</Text>
						</View>
						<View style={styles.headerButton}>
							<TouchableOpacity
								transparent
								bordered
								style={{
									flex: 1,
									alignItems: 'center',
									justifyContent: 'center',
									padding: 10,
									zIndex: 999
									// borderWidth: 2
								}}
								onPress={() => {
									console.log('Ok');
									this.props.navigation.navigate('Map');
								}}
							>
								<Icon type="MaterialIcons" name="location-on" style={{ color: 'white' }} />
							</TouchableOpacity>
						</View>
					</Header>
				</View>

				<ScrollView
					style={{
						flex: 1
						// borderWidth: 2
					}}
				>
					{this.state.offers.map((offer, i) => (
						<Result offer={offer} key={i} navigation={this.props.navigation} />
					))}
				</ScrollView>
			</React.Fragment>
		);
	}
}

function Result({ offer, navigation }) {
	const { image, name, description } = offer;
	return (
		<TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Product', { offer })}>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: image }}
					style={{ height: '100%', width: '100px' }}
					style={styles.thumbnailImage}
				/>
			</View>

			<View style={styles.detailContainer}>
				<View style={styles.title}>
					<Text style={styles.titleText}>{name}</Text>
				</View>
				<View style={styles.description}>
					<Text style={styles.descriptionText}>{description}</Text>
				</View>
				<View style={{ padding: 3 }}>
					<Text
						style={{
							fontWeight: 'bold',
							...generalStyles.fonts.h5,
							color: 'grey',
							...generalStyles.fonts.rwb
						}}
					>
						1.2 Kms
					</Text>
				</View>
				<View style={{ padding: 3 }}>
					<Image
						source={require('../assets/rating.png')}
						resizeMode="stretch"
						style={{ height: 10, width: '25%', padding: 3 }}
					/>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<Icon
						type="MaterialIcons"
						name="location-on"
						style={{ color: 'white', ...generalStyles.fonts.h3 }}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
}

let styles = StyleSheet.create({
	card: {
		// borderWidth: 0.1,
		padding: 10,
		flex: 1,
		margin: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		borderWidth: 0,
		elevation: 9,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
		borderRadius: 10
	},
	imageContainer: {
		flex: 2,
		// borderWidth: 2
		// borderWidth: 2,
		height: '100%'
	},
	thumbnailImage: {
		height: '100%',
		width: '100%'
		// borderRadius: 25
	},
	detailContainer: {
		flex: 4,
		// borderWidth: 2,
		padding: 10
		// borderWidth: 2
	},
	title: {
		// borderWidth: 2,
		padding: 3
	},
	titleText: {
		...generalStyles.fonts.h3,
		// fontWeight: 'bold',
		fontFamily: 'Raleway'
	},
	description: {
		padding: 3,
		...generalStyles.fonts.rw
		// borderWidth: 2
	},
	descriptionText: {
		...generalStyles.fonts.h5
	},
	header: {
		// borderWidth: 3
		alignItems: 'center'
	},
	headerTitle: {
		flex: 1,
		// borderWidth: 3,
		alignItems: 'center',
		justifyContent: 'center',
		height: '50%'
	},
	headerTtleText: {
		color: 'white',
		...generalStyles.fonts.rwb,
		...generalStyles.fonts.h2
	},
	headerButton: {
		flex: 1,
		// borderWidth: 3,,
		height: '50%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		height: '100%'
		// borderWidth: 2
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		width: 30,
		height: 30,
		backgroundColor: colors.primaryColor
	}
});
