import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { generalStyles } from '../../theme/generalStyle';

const Card = ({ style, children }) => {
	return <View style={[ styles.verticalCard, { ...style } ]}>{children}</View>;
};

let styles = StyleSheet.create({
	verticalCard: {
		marginTop: 15,
		padding: 10,
		// borderRadius: 10,
		shadowColor: '#ccc',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowOpacity: 0.8,
		shadowRadius: 1,

		elevation: 3,
		borderWidth: 0
		// // elevation: 9
	}
});
export default Card;
