import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import AppHeader from '../components/Header';
import Card from '../components/Card';
import { generalStyles } from '../theme/generalStyle';
import { colors } from '../theme/colors';
import VerticalCard from '../components/VerticalCard';
let { height, width } = Dimensions.get('window');

export default class Dashboard extends Component {
	state = {
		entries: [ { title: 'LOl' }, { title: 'pol' }, { title: 'sol' } ]
	};
	_renderItem({ item, index }) {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{item.title}</Text>
			</View>
		);
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppHeader />
				<ScrollView style={{ flex: 1 }}>
					<View style={{ ...generalStyles.layout.container }}>
						<View style={styles.sliderSection}>
							<View style={styles.header}>
								<View style={styles.headerLeft}>
									<Text style={styles.headerLeftText}>Deals of the day</Text>
								</View>
								<TouchableHighlight style={styles.headerRight}>
									<Text style={styles.headerRightText}>View more >>></Text>
								</TouchableHighlight>
							</View>
							<View style={styles.sliderContainer}>
								{/* <Card /> */}
								<Carousel
									autoplay={true}
									ref={(c) => {
										this._carousel = c;
									}}
									data={this.state.entries}
									renderItem={() => <Card />}
									sliderWidth={width - 20}
									itemWidth={width - 20}
									loop={true}
								/>
							</View>
						</View>

						<View style={styles.sliderSection}>
							<View style={styles.header}>
								<View style={styles.headerLeft}>
									<Text style={styles.headerLeftText}>Featured offers</Text>
								</View>
								<TouchableHighlight style={styles.headerRight}>
									<Text style={styles.headerRightText}>View more >>></Text>
								</TouchableHighlight>
							</View>
							<View style={styles.sliderContainer}>
								{/* <Card /> */}
								<Carousel
									autoplay={true}
									ref={(c) => {
										this._carousel = c;
									}}
									data={this.state.entries}
									renderItem={() => <Card />}
									sliderWidth={width - 20}
									itemWidth={width - 20}
									loop={true}
								/>
							</View>
						</View>

						<View style={styles.sliderSection}>
							<View style={styles.header}>
								<View style={styles.headerLeft}>
									<Text style={styles.headerLeftText}>Coupons</Text>
								</View>
								<TouchableHighlight style={styles.headerRight}>
									<Text style={styles.headerRightText}>View more >>></Text>
								</TouchableHighlight>
							</View>
						</View>
						<View style={styles.verticalCardContainer}>
							<VerticalCard />
							<VerticalCard />
							<VerticalCard />
							<VerticalCard />
						</View>

						<View style={styles.sliderSection}>
							<View style={styles.header}>
								<View style={styles.headerLeft}>
									<Text style={styles.headerLeftText}>Offers near you</Text>
								</View>
								<TouchableHighlight style={styles.headerRight}>
									<Text style={styles.headerRightText}>View more >>></Text>
								</TouchableHighlight>
							</View>
						</View>
						<View style={styles.verticalCardContainer}>
							<VerticalCard />
							<VerticalCard />
							<VerticalCard />
							<VerticalCard />
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	headerLeftText: {
		...generalStyles.fonts.h3,
		...generalStyles.fonts.rwb
	},
	headerRightText: {
		...generalStyles.fonts.h4,
		...generalStyles.fonts.rwb,
		color: colors.primaryColor
	},
	sliderSection: {
		marginTop: 20
	},
	sliderContainer: {
		minHeight: 100
		// borderWidth: 2
	},
	verticalCardContainer: {
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		flexDirection: 'row'
	}
});
