import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/actions';
import CharacterItem from '../components/CharacterItem';

const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.characters);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Characters"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredCharacters}
        renderItem={({ item }) => (
          <CharacterItem
            character={item}
            onPress={() => navigation.navigate('Details', { character: item })}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default MainScreen;
