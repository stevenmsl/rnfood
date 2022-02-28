import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ResultDetail from './ResultDetail';
import {Business} from '../services/types';
import {ResultShowScreenPropsType} from '../screens/ResultShowScreen';

interface ResultListProps {
  title: string;
  results: Business[];
}
const ResultList: React.FC<ResultListProps> = ({title, results}) => {
  /*ref-02 */
  const nav = useNavigation<ResultShowScreenPropsType>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                /*nav does have the navigate method*/
                //@ts-ignorets
                nav.navigate('ResultShow', {id: item.id});
              }}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultList;
