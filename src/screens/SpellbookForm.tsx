import { StackScreenProps } from "@react-navigation/stack";
import { FC, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { RouteParams, Spellbook } from "../../types";
import Input from "../components/Input";
import { containers } from "../styles/containers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

type SpellbookProps = StackScreenProps<RouteParams, "Create a Spellbook">;

const styles = StyleSheet.create({
  input: {
    padding: "4px",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#aaa",
    marginBottom: "8px",
  },
});

const SpellbookForm: FC<SpellbookProps> = ({ navigation }) => {
  const [spellbook, setSpellbook] = useState({
    Name: "",
    Character: "",
    "Core Attribute": "",
  });

  const handleChange = (key: string) => (newValue: string) => {
    setSpellbook({
      ...spellbook,
      [key]: newValue,
    });
  };

  const createSpellbook = async () => {
    let spellbooks: string[];
    const spellbooksJson = await AsyncStorage.getItem("Spellbooks");

    if (spellbooksJson != null) {
      spellbooks = JSON.parse(spellbooksJson);
    } else {
      spellbooks = [];
    }

    const id = uuidv4();

    const spellbookString = JSON.stringify({
      name: spellbook.Name,
      character: spellbook.Character,
      coreAttribute: spellbook["Core Attribute"],
    } as Spellbook);
    const spellbooksString = JSON.stringify([...spellbooks, id]);

    await AsyncStorage.setItem("Spellbooks", spellbooksString);
    await AsyncStorage.setItem(id, spellbookString);

    navigation.navigate("Spellbooks");
  };

  return (
    <View style={containers.page}>
      <View style={containers.content}>
        {Object.entries(spellbook).map(([key, value]) => (
          <Input
            key={key}
            value={value}
            setValue={handleChange(key)}
            placeholder={key}
            labelHidden
          />
        ))}
        <Button title="Create" onPress={createSpellbook} />
      </View>
    </View>
  );
};

export default SpellbookForm;
