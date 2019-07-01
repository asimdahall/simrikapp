import React, { Component, Fragment, PureComponent } from 'react';
import {
	Text,
	View,
	StatusBar,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	TouchableHighlight,
	Image,
	Animated,
	ActivityIndicator
} from 'react-native';
import { MapView, Permissions, Location, LinearGradient } from 'expo';
import { colors } from '../theme/colors';
import { Icon } from 'native-base';
import { PIN_IMAGE } from '../theme/logo';
import { generalStyles, generateBorder } from '../theme/generalStyle';
import offers from './mockData.json';
// import { generateBorder, generalStyles } from '../theme/generalStyle';
let { height, width } = Dimensions.get('window');
export default class Map extends Component {
	constructor() {
		super();
		this.state = {
			mapLoaded: false,
			region: null,
			menu: {
				active: true,
				top: new Animated.Value(-height),
				bottom: new Animated.Value(60)
			},
			offers: []
		};
	}
	getPermission = async () => {
		// let { status } = await Permissions.getAsync(Permissions.LOCATION);
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		console.log({ status });
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permissions access location was denied'
			});
		} else {
			return true;
		}
	};

	toggleActive = () => {
		Animated.parallel([
			Animated.timing(
				// Uses easing functions
				this.state.menu.top, // The value to drive
				{
					useNativeDriver: true,
					toValue: this.state.menu.active ? -height : 0,
					duration: 500
				} // Configuration
			),
			Animated.timing(
				// Uses easing functions
				this.state.menu.bottom, // The value to drive
				{
					useNativeDriver: true,
					toValue: this.state.menu.active ? 60 : -20,
					duration: 500
				} // Configuration
			)
		]).start();
		this.setState({
			...this.state,
			menu: {
				...this.state.menu,
				active: !this.state.menu.active
			}
		});
	};

	getLocation = () => {
		this.getPermission().then(async (res) => {
			if (res) {
				let location = await Location.getCurrentPositionAsync({});
				const region = {
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
					latitudeDelta: 0.1,
					longitudeDelta: 0.1
				};

				this.setState({ region });
			}
		});
	};
	getOffers = () => {
		this.setState({
			offers: offers.offers
		});
		this.props.navigation.push('ResultList');
	};
	componentDidMount() {
		this.getLocation();
		this.setState({ mapLoaded: true });
	}
	render() {
		return (
			<View style={styles.container}>
				{this.state.region ? (
					<Fragment>
						<MapComponent
							region={this.state.region}
							toggleActive={this.toggleActive}
							offers={this.state.offers}
						/>
						<Animated.View // Special animatable View
							style={[
								styles.overlay,
								{
									position: 'absolute',
									transform: [ { translateY: this.state.menu.top } ]
								}
							]}
						>
							<View style={{ display: 'flex' }}>
								<View style={styles.filterHeader}>
									<View
										style={{
											// borderWidth: 2,
											flex: 1,
											alignItems: 'center',
											height: '100%',
											justifyContent: 'flex-end'
										}}
									>
										<Text
											style={{
												...generalStyles.fonts.h3,
												color: 'grey',
												fontWeight: 'bold'
											}}
										>
											Cancel
										</Text>
									</View>
									<View
										style={{
											// borderWidth: 2,
											flex: 1,
											alignItems: 'center',
											height: '100%',
											justifyContent: 'flex-end'
										}}
									>
										<Text
											style={{
												...generalStyles.fonts.h3,

												fontWeight: 'bold'
											}}
										>
											Filters
										</Text>
									</View>
									<View
										style={{
											// borderWidth: 2,
											flex: 1,
											alignItems: 'center',
											height: '100%',
											justifyContent: 'flex-end'
										}}
									>
										<Text
											style={{
												...generalStyles.fonts.h3,
												color: colors.primaryColor,
												fontWeight: 'bold'
											}}
										>
											Save
										</Text>
									</View>
								</View>
								<View style={styles.filterContainer}>
									<View style={styles.filterItem}>
										<View style={styles.label}>
											<Text>Location</Text>
										</View>
										<View style={styles.filterForm}>
											<Text>Current location</Text>
										</View>
									</View>
									<View style={styles.filterItem}>
										<View style={styles.label}>
											<Text>Filter by</Text>
										</View>
										<View style={styles.filterForm}>
											<Text>Offer</Text>
										</View>
									</View>
								</View>
							</View>
						</Animated.View>
						<Animated.View // Special animatable View
							style={[
								styles.loginButtonContainer,
								{ position: 'absolute', transform: [ { translateY: this.state.menu.bottom } ] }
							]}
						>
							<View style={{ width: '90%' }}>
								<TouchableOpacity
									style={{
										height: 50,
										alignItems: 'center',
										justifyContent: 'center',
										width: '100%'
									}}
									onPress={this.getOffers}
								>
									<LinearGradient
										colors={[ colors.primaryColor, colors.secondaryColor ]}
										start={[ 0.0, 0.5 ]}
										end={[ 1.0, 0.5 ]}
										locations={[ 0.0, 1.0 ]}
										style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: '100%' }}
									>
										<Text
											style={{
												backgroundColor: 'transparent',
												fontSize: 15,
												color: '#fff',
												fontWeight: 'bold'
											}}
										>
											FIND THE OFFERS
										</Text>
									</LinearGradient>
								</TouchableOpacity>
							</View>
						</Animated.View>
					</Fragment>
				) : (
					<View style={{ height, width, alignItems: 'center', justifyContent: 'center' }}>
						<ActivityIndicator />
					</View>
				)}
			</View>
		);
	}
}

class MapComponent extends PureComponent {
	render() {
		return (
			<MapView
				style={styles.map}
				region={this.props.region}
				onPress={this.props.toggleActive}
				showMyLocationButton
				// onPanDrag={(data) => {
				// 	console.log({ data });
				// }}
			>
				<MapView.Marker
					coordinate={this.props.region}
					title={'You current location'}
					pinColor={colors.primaryDarkColor}
					showCallout={true}
				/>

				{this.props.offers.map((offer, i) => {
					return (
						<MapView.Marker
							key={i}
							coordinate={offer.region}
							title={offer.name}
							pinColor={colors.primaryColor}
							showCallout={true}
						/>
					);
				})}
			</MapView>
		);
	}
}

// const CustomMarker = () => (
// 	<View style={{ ...generateBorder('red', 2), alignItems: 'center', justifyContent: 'center', padding: 10 }}>
// 		<Image source={PIN_IMAGE} style={{ height: 50, width: 30 }} resizeMode="stretch" />
// 		<View style={styles.title}>
// 			<Text style={generalStyles.h3}>Changathali</Text>
// 		</View>
// 	</View>
// );

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
		// justifyContent: 'center'
	},
	map: {
		...StyleSheet.absoluteFillObject
	},
	overlay: {
		position: 'absolute',
		// borderWidth: 2,
		backgroundColor: 'rgb(255, 255, 255)',
		width: width,
		height: height / 2 - 50,
		// padding: 10,
		// borderRadius: 10,
		justifyContent: 'flex-start',
		// alignItems: 'center',
		// shadowColor: '#000',
		flexDirection: 'row'
		// shadowOffset: {
		// 	width: 0,
		// 	height: 3
		// },
		// shadowOpacity: 0.29,
		// shadowRadius: 4.65,

		// elevation: 7
	},
	loginButtonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 0,
		width: '100%'
	},
	text: {
		marginLeft: 10
	},
	title: {
		width: '50%'
	},
	filterHeader: {
		// borderWidth: 2,
		height: '20%',
		justifyContent: 'space-around',
		flexDirection: 'row',
		width: width,
		alignItems: 'center',
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'grey',
		paddingBottom: 10
	},
	filterContainer: {
		flex: 1,
		// borderWidth: 2,
		marginTop: 5,
		padding: 10
	},
	filterItem: {
		width: '100%',
		// borderWidth: 2,
		marginTop: 5,
		padding: 15
	},
	filterForm: {
		// borderWidth: 2,
		marginTop: 5,
		borderRadius: 20,
		width: '100%',
		padding: 15,
		backgroundColor: '#eeeeee'
	}
});
