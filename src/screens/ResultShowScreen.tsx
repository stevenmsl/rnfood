import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../services/yelp';
import {RootStackParamList} from '../navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BusinessDetail} from '../services/types';

export type ResultShowScreenPropsType = NativeStackScreenProps<
  RootStackParamList,
  'ResultShow'
>;

export interface ResultShowScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'ResultShow'> {}
const ResultShowScreen: React.FC<ResultShowScreenProps> = ({route}) => {
  const [result, setResult] = useState<BusinessDetail>();

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  const id = route.params.id;
  /* make sure getResult got executed
     only if id is changed
  */
  useEffect(() => {
    getResult(id);
  }, [id]);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>

      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultShowScreen;
