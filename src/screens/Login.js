import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Image,
	TouchableHighlight,
	KeyboardAvoidingView,
	Platform,
	TouchableOpacity,
	TextInput
} from 'react-native';
import { Form, Item, Label, Icon } from 'native-base';
import { LinearGradient } from 'expo';
import { colors } from '../theme/colors';
import { generateBorder, generalStyles } from '../theme/generalStyle';
import logo from '../theme/logo';

export default (props) => {
	login = () => {
		props.navigation.navigate('ResultList');
	};
	return (
		<KeyboardAvoidingView style={styles.loginPage} behavior="padding">
			<View
				// colors={[ colors.secondaryColor, colors.primaryColor ]}
				// start={[ 0.0, 0.5 ]}
				// end={[ 1.0, 0.5 ]}
				// locations={[ 0.0, 1.0 ]}
				style={{
					backgroundColor: colors.primaryColor,
					padding: 15,
					alignItems: 'center',
					width: '100%',
					flex: 1
				}}
			>
				<View
					style={{
						backgroundColor: colors.primaryColor,
						height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
					}}
				>
					<StatusBar translucent backgroundColor={colors.primaryDarkColor} barStyle="light-content" />
				</View>
				<View
					style={{
						flex: 1,
						// ...generateBorder('red', 2),
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<View style={styles.header}>
						<Image source={logo} />
					</View>
				</View>
			</View>
			<View style={styles.loginBoxContainer}>
				<View style={styles.loginBox}>
					<View style={styles.loginBoxHeader}>
						<Text style={styles.loginBoxHeaderText}>WELCOME</Text>
					</View>
					<View style={styles.loginFormContainer}>
						<Form style={{ justifyContent: 'space-around', flex: 1, alignItems: 'center' }}>
							<View style={styles.loginFormInput}>
								<View style={styles.loginFormIconContainer}>
									<Icon active name="person" style={styles.loginFormIcon} />
								</View>
								<View style={styles.loginFormInputBox}>
									<TextInput
										style={{ ...generalStyles.fonts.rw }}
										placeholderTextColor="grey"
										placeholder="Username"
									/>
								</View>
							</View>
							<View style={styles.loginFormInput}>
								<View style={styles.loginFormIconContainer}>
									<Icon active name="key" style={styles.loginFormIcon} />
								</View>
								<View style={styles.loginFormInputBox}>
									<TextInput
										style={{ ...generalStyles.fonts.rw }}
										placeholderTextColor="grey"
										placeholder="Password"
									/>
								</View>
							</View>
						</Form>
						<View style={styles.loginButtonContainer}>
							<TouchableOpacity
								style={{
									height: 50,
									alignItems: 'center',
									justifyContent: 'center',
									width: '90%'
								}}
								onPress={this.login}
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
											// fontWeight: 'bold',
											...generalStyles.fonts.rw
										}}
									>
										LOGIN
									</Text>
								</LinearGradient>
							</TouchableOpacity>

							<View style={{ marginTop: 10 }}>
								<Text
									style={{
										...generalStyles.fonts.h5,
										...generalStyles.fonts.rw,
										color: colors.primaryColor
									}}
								>
									Forgot Password?
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={{ marginTop: 5, padding: 5 }}>
				<Text
					style={{
						...generalStyles.fonts.h5,
						...generalStyles.fonts.rw
					}}
				>
					<Text>Don't have an account?</Text>
					<Text
						style={{
							color: colors.primaryColor
						}}
					>
						Sign up
					</Text>
				</Text>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	loginPage: {
		flex: 1,
		width: '100%',
		backgroundColor: colors.primaryBackgroundColor,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	headerText: {
		color: colors.white,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		...generalStyles.fonts.h1
	},
	loginBoxContainer: {
		width: '100%',
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	loginBox: {
		borderRadius: 20,
		backgroundColor: colors.white,
		width: '85%',
		height: '80%',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		borderWidth: 0,
		elevation: 9
	},
	loginBoxHeader: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
		justifyContent: 'center'
	},
	loginBoxHeaderText: {
		color: colors.secondaryColor,
		...generalStyles.fonts.h1,
		// fontWeight: 'bold',
		...generalStyles.fonts.rw
	},
	loginFormContainer: {
		flex: 3,
		padding: 10
		// ...generateBorder('green', 3),
	},
	loginFormInput: {
		// borderWidth: 2,
		width: '100%',
		flexDirection: 'row',
		padding: 10
	},
	loginFormIconContainer: {
		backgroundColor: colors.secondaryColor,
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center',
		width: '15%',
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20
	},
	loginFormIcon: {
		color: colors.white,
		fontSize: 20
	},
	loginFormInputBox: {
		borderWidth: StyleSheet.hairlineWidth,
		flex: 1,
		padding: 5,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20
	},
	loginButtonContainer: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 10
		// justifyContent: 'flex-start'
	}
});
