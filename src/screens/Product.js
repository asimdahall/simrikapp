import React, { Component } from 'react';
import { Text, View, Platform, StatusBar, Image, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Icon,
	Title,
	Content,
	CardItem,
	Card,
	Thumbnail
} from 'native-base';
import { colors } from '../theme/colors';
import { generalStyles } from '../theme/generalStyle';
let { height, width } = Dimensions.get('window');

export default class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			offer: null
		};
	}
	componentDidMount() {
		const { navigation } = this.props;
		let offer = navigation.getParam('offer', null);
		this.setState({
			offer
		});
	}
	render() {
		let { offer } = this.state;
		return (
			<Container style={{ backgroundColor: colors.primaryBackgroundColor }}>
				<View
					style={{
						backgroundColor: colors.primaryColor,
						height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
					}}
				>
					<StatusBar translucent backgroundColor={colors.primaryColor} barStyle="light-content" />
				</View>
				<ProductHeader title={offer ? offer.name : 'Offer name'} navigation={this.props.navigation} />
				{this.state.offer === null ? (
					<ActivityIndicator />
				) : (
					<Content style={{ flex: 1 }}>
						<View style={styles.imageContainer}>
							<Image
								source={{
									uri: offer.image
								}}
								style={styles.image}
							/>
						</View>

						<View style={styles.productPriceContainer}>
							<Text style={styles.producePrice}>{offer.finalPrice}</Text>
							<Text style={generalStyles.fonts.rw}>
								<Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
									{offer.price}
								</Text>
								<Text style={{ marginLeft: 5 }}>-{offer.discount}%</Text>
							</Text>
						</View>
						<View style={styles.productNameContainer}>
							<Text style={styles.productName}>{offer.name}</Text>
						</View>
						<View style={styles.productRatingContainer}>
							<Image
								source={require('../assets/rating.png')}
								resizeMode="stretch"
								style={{ height: 12, width: '20%' }}
							/>
						</View>
						<View style={styles.productDescriptionContainer}>
							<Text style={styles.productDescription}>{offer.description}</Text>
						</View>
						<View style={styles.moreDetails}>
							<View style={styles.moreDetailsItem}>
								<View style={styles.moreDetailsHeader}>
									<Text style={styles.moreDetailsHeaderText}>Vendor</Text>
								</View>
								<View style={styles.moreDetailsDesc}>
									<Text style={styles.detailsDescText}>{offer.vendor}</Text>
								</View>
							</View>

							<View style={styles.moreDetailsItem}>
								<View style={styles.moreDetailsHeader}>
									<Text style={styles.moreDetailsHeaderText}>Location</Text>
								</View>
								<View style={styles.moreDetailsDesc}>
									<Text style={styles.detailsDescText}>{offer.location}</Text>
								</View>
							</View>

							<View style={styles.moreDetailsItem}>
								<View style={styles.moreDetailsHeader}>
									<Text style={styles.moreDetailsHeaderText}>Coupon Code</Text>
								</View>
								<View style={styles.moreDetailsDesc}>
									<Text style={styles.detailsDescText}>{offer.coupon}</Text>
								</View>
							</View>
						</View>
						<View style={styles.buttonContainer}>
							<Button bordered style={styles.button}>
								<Text style={styles.buttonText}>VISIT WEBSITE</Text>
							</Button>
						</View>
						<View style={styles.buttonContainer}>
							<Button bordered style={styles.button}>
								<Text style={styles.buttonText}>VIEW ON MAP</Text>
							</Button>
						</View>
					</Content>
				)}
			</Container>
		);
	}
}

const ProductHeader = ({ navigation, title }) => (
	<Header style={{ backgroundColor: colors.primaryColor }}>
		<Left>
			<Button transparent onPress={() => navigation.pop()}>
				<Icon name="arrow-back" />
			</Button>
		</Left>
		<Body>
			<Title>{title}</Title>
		</Body>
	</Header>
);

let styles = StyleSheet.create({
	imageContainer: {
		height: height / 3,
		width: '100%'
		// borderWidth: 2
	},
	image: {
		height: '100%',
		resizeMode: 'cover'
	},
	productPriceContainer: {
		minHeight: 40,
		// borderWidth: 2,
		justifyContent: 'center',
		paddingLeft: 10
	},
	producePrice: {
		...generalStyles.fonts.h1,
		// fontWeight: 'bold',
		textTransform: 'uppercase',
		...generalStyles.fonts.rwb,
		color: colors.primaryDarkColor
	},
	productNameContainer: {
		minHeight: 30,
		// borderWidth: 2,
		justifyContent: 'center',
		paddingLeft: 10
	},
	productName: {
		...generalStyles.fonts.h3,
		// fontWeight: 'bold',
		textTransform: 'uppercase',
		...generalStyles.fonts.rwb,
		color: colors.primaryColor
	},
	productRatingContainer: {
		minHeight: 30,
		// borderWidth: 2,
		justifyContent: 'center',
		paddingLeft: 10
	},
	productDescriptionContainer: {
		minHeight: 30,
		// borderWidth: 2,
		justifyContent: 'center',
		paddingLeft: 10
	},
	productDescription: {
		...generalStyles.fonts.h4,
		// fontWeight: 'bold',
		textTransform: 'uppercase',
		...generalStyles.fonts.rw
		// color: colors.primaryColor
	},
	moreDetails: {
		marginTop: 10,
		paddingLeft: 10,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: '#aaa',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#aaa',
		paddingTop: 10
	},
	moreDetailsItem: {
		flexDirection: 'row',
		padding: 10,
		marginHorizontal: 10
	},
	moreDetailsHeader: {
		flex: 1
		// alignItems: 'center'
	},
	moreDetailsHeaderText: {
		...generalStyles.fonts.h4,
		// fontWeight: 'bold',
		textTransform: 'uppercase',
		...generalStyles.fonts.rwb,
		color: colors.primaryColor
	},

	moreDetailsDesc: {
		flex: 2,
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	moreDetailsDescText: {
		...generalStyles.fonts.h4,
		// fontWeight: 'bold',
		textTransform: 'uppercase',
		...generalStyles.fonts.rw
	},
	buttonContainer: {
		width: '100%',
		padding: 10
	},
	button: {
		width: '100%',
		color: colors.primaryColor,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10
	},
	buttonText: {
		...generalStyles.fonts.rw,
		...generalStyles.fonts.h3,
		color: colors.primaryColor
	}
});
