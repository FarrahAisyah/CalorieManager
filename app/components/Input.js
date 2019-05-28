import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { inputPlaceholder } from '../utils/Colors';

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
	<TextInput
		style={styles.input}
		value={inputValue}
		onChangeText={onChangeText}
		placeholder="Type here to add food."
		placeholderTextColor={inputPlaceholder}
		multiline={true}
		autoCapitalize="sentences"
		underlineColorAndroid="transparent"
		selectionColor={'white'}
		maxLength={30}
		returnKeyType="done"
		autoCorrect={false}
		blurOnSubmit={true}
		onSubmitEditing={onDoneAddItem}
	/>
);

const styles = StyleSheet.create({
	input: {
		paddingTop: 10,
		paddingRight: 15,
		fontSize: 25,
		color: 'white',
		fontWeight: '300'
	}
});

export default Input;
