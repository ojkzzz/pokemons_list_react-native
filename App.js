import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";
import { allPokemons } from "./constants/pokemons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {allPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" && 25,
  },
});
