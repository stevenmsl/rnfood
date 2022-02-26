import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

/* term is maintained by SearchScreen using state */
interface SearchBarProps {
  onTermSubmit: () => void;
  onTermChange: (term: string) => void;
  term: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  term,
  onTermChange,
  onTermSubmit,
}) => {
  // console.log('search bar redrawed');
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});

export default SearchBar;
