import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { inputPlaceholder } from '../utils/Colors';

const Input2 = ({ inputValue2, onChangeText, onDoneAddItem2 }) => (
	<TextInput
		style={styles.input}
		value2={inputValue2}
		onChangeText={onChangeText}
		placeholder="Type here to add calorie."
		placeholderTextColor={inputPlaceholder}
		multiline={true}
		autoCapitalize="sentences"
		underlineColorAndroid="transparent"
		selectionColor={'white'}
		maxLength={30}
		returnKeyType="done"
		autoCorrect={false}
		blurOnSubmit={true}
		onSubmitEditing={onDoneAddItem2}
	/>
);

const styles = StyleSheet.create({
	input: {
		paddingTop: 10,
		paddingRight: 15,
		fontSize: 34,
		color: 'white',
		fontWeight: '500'
	}
});

export default Input2;
