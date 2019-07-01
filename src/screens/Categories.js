import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import AppHeader from '../components/Header';
import { generalStyles } from '../theme/generalStyle';
import Heading from '../components/Heading';
import Card from '../components/ShadowCard';
import { Button } from 'native-base';
import { colors } from '../theme/colors';
// import { ScrollView } from 'react-native-gesture-handler';

export default class Categpries extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppHeader />
				<ScrollView style={{ flex: 1 }}>
					<View style={{ ...generalStyles.layout.container }}>
						<Heading text="Categories" />

						<View style={styles.categoryCardContainer}>
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

let CategoryCard = () => (
	<Card style={{ width: '45%' }}>
		<View style={styles.categoryCard}>
			<View style={styles.categoryCardDesc}>
				<View style={styles.headingContainer}>
					<Text style={{ ...generalStyles.fonts.rwb }}>Liquor</Text>
				</View>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					style={{
						backgroundColor: colors.primaryColor,
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						height: '90%'
					}}
				>
					<Text style={[ { color: 'white', ...generalStyles.fonts.rw } ]}>View More</Text>
				</Button>
			</View>
		</View>
	</Card>
);

let styles = StyleSheet.create({
	categoryCardContainer: {
		flexDirection: 'row',
		width: '100%',
		// borderWidth: 2,
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	categoryCard: {
		width: '100%',
		height: 120,
		justifyContent: 'space-between'
	},
	categoryCardDesc: {
		alignItems: 'center'
	},
	buttonContainer: {
		height: '40%',
		// marginTop: 15,
		// borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'center'
		// paddingLeft: '20%'
	}
});
