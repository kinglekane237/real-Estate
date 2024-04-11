import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const MyComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Effectuez ici votre logique de recherche en utilisant le texte de recherche (searchText)
    // Mettez à jour le tableau des résultats de recherche (searchResults)
    // ...

    // Exemple de résultats de recherche factices
    const dummySearchResults = [
      { id: 1, title: 'Résultat 1' },
      { id: 2, title: 'Résultat 2' },
      { id: 3, title: 'Résultat 3' },
    ];

    setSearchResults(dummySearchResults);
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        placeholder="Rechercher..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <Button title="Rechercher" onPress={handleSearch} />

      <FlatList
        data={searchResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
};

export default MyComponent;