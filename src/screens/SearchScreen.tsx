import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const {searchApi, results, errorMessage} = useResults();
  const filterByPrice = (price: string) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          console.log(`search ${term}`);
          searchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList results={filterByPrice('$')} title="Cost Effective" />
        <ResultList results={filterByPrice('$$')} title="Bit Pricier" />
        <ResultList results={filterByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
