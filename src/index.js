import React from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Login, Map, Dashboard, Categories, Vendors, Flyers, Profile } from './screens';
import { colors } from './theme/colors';
import ResultList from './screens/ResultList';
import Product from './screens/Product';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default () => {
	return (
		<View style={{ flex: 1, width: '100%' }}>
			<StackApp />
		</View>
	);
};

let TabApp = createAppContainer(
	createBottomTabNavigator(
		{
			Profile: {
				screen: Profile,
				navigationOptions: {
					tabBarIcon: ({ tintColor, focused }) => (
						<Icon
							style={{ color: focused ? 'white' : colors.primaryDarkColor }}
							name="face-profile"
							type="MaterialCommunityIcons"
						/>
					)
				}
			},

			Dashboard: {
				screen: Dashboard,
				navigationOptions: {
					tabBarIcon: ({ tintColor, focused }) => (
						<Icon
							style={{ color: focused ? 'white' : colors.primaryDarkColor }}
							name="home"
							type="MaterialCommunityIcons"
						/>
					)
				}
			},

			Categories: {
				screen: Categories,
				navigationOptions: {
					tabBarIcon: ({ tintColor, focused }) => (
						<Icon
							style={{ color: focused ? 'white' : colors.primaryDarkColor }}
							name="list"
							type="MaterialIcons"
						/>
					)
				}
			},

			Vendors: {
				screen: Vendors,
				navigationOptions: {
					tabBarIcon: ({ tintColor, focused, navigation }) => (
						// <TouchableOpacity
						// 	onPress={() => console.log(navigation)}
						// 	style={{
						// 		width: 100,
						// 		height: 100,
						// 		borderRadius: 50,
						// 		alignItems: 'center',
						// 		justifyContent: 'center',
						// 		zIndex: 99999,
						// 		// top: -30,
						// 		backgroundColor: focused ? colors.primaryColor : colors.primaryDarkColor
						// 		// backgroundColor:
						// 	}}
						// >
						// <Icon style={{ color: 'white' }} name="store" type="MaterialCommunityIcons" />
						<Icon
							style={{ color: focused ? 'white' : colors.primaryDarkColor }}
							name="store"
							type="MaterialIcons"
						/>
						// </TouchableOpacity>
					)
				}
			},
			Flyers: {
				screen: Flyers,
				navigationOptions: {
					tabBarIcon: ({ tintColor, focused }) => (
						<Icon
							style={{ color: focused ? 'white' : colors.primaryDarkColor }}
							name="newspaper"
							type="MaterialCommunityIcons"
						/>
					)
				}
			}

			// ResultList: {
			// 	screen: ResultList
			// },
			// Map: {
			// 	screen: Map
			// },
			// Product: {
			// 	screen: Product
			// }
		},
		{
			defaultNavigationOptions: {},
			tabBarOptions: {
				// showLabel: false,
				tintColor: colors.primaryDarkColor,
				activeBackgroundColor: colors.primaryColor,
				activeTintColor: 'white'
			}
		}
	)
);

let StackApp = createAppContainer(
	createStackNavigator(
		{
			TabApp: {
				screen: TabApp
			}
		},
		{ headerMode: 'none' }
	)
);
