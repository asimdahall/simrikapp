import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { generalStyles } from '../../theme/generalStyle';

const Heading = ({ text, style }) => {
	return (
		<View style={[ styles.headingContainer, { ...style } ]}>
			<Text style={styles.heading}>{text}</Text>
		</View>
	);
};

let styles = StyleSheet.create({
	heading: {
		...generalStyles.fonts.rwb,
		...generalStyles.fonts.h2
	},
	headingContainer: {
		paddingVertical: 10,
		borderBottomWidth: StyleSheet.hairlineWidth
	}
});

export default Heading;
