import React, { Component, Fragment } from 'react';
import { Text, View, StatusBar, Platform, TextInput, StyleSheet } from 'react-native';
import { Header, Left, Button, Body, Title, Icon } from 'native-base';
import { colors } from '../../theme/colors';
import { generalStyles } from '../../theme/generalStyle';

export default class AppHeader extends Component {
	render() {
		return (
			<Fragment>
				<View
					style={{
						backgroundColor: colors.primaryColor,
						height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
					}}
				>
					<StatusBar translucent backgroundColor={colors.primaryColor} barStyle="light-content" />
				</View>
				<Header style={[ styles.header, { backgroundColor: colors.primaryColor } ]}>
					{/* <View style={styles.leftButton}>
						<Button transparent onPress={() => navigation.pop()}>
							<Icon name="arrow-back" />
						</Button>
					</View> */}
					<View style={styles.searchContainer}>
						<View style={styles.searchIconContainer}>
							<Icon name="search" />
						</View>
						<View style={styles.searchInputContainer}>
							<TextInput style={styles.searchInput} placeholder="search for offer, flyer, coupons" />
						</View>
					</View>
				</Header>
			</Fragment>
		);
	}
}

let styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		// paddingTop: StatusBar.currentHeight,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	leftButton: {
		width: '20%',
		// flex: 1,
		// borderWidth: 2,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	searchContainer: {
		// flex: 1,
		width: '100%',
		// borderWidth: 2,
		flexDirection: 'row',
		height: '60%',
		alignItems: 'center',
		backgroundColor: colors.white
		// padding: 5
	},
	searchIconContainer: {
		// borderWidth: 2,
		width: '15%',
		alignItems: 'center'
	},
	searchInputContainer: {
		// borderWidth: 2,
		width: '85%',
		height: '100%',
		justifyContent: 'center',
		...generalStyles.fonts.rw
	}
});
