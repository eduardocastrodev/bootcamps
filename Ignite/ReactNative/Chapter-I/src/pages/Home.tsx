import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string,
  name: string,
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills((oldState) => [...oldState, data]);
  }
  
  function handleRemoveSkill( id: string ) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id,
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting("Good Afternoon");
    } else {
      setGretting("Good Evening");
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Eduardo!</Text>
      <Text style={styles.gretting}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={ setNewSkill }
      />

      <Button 
        onPress={handleAddNewSkill}
        title="Add"
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={ (item) => item.id }
        renderItem={({ item }) => 
          <SkillCard 
            skill={ item.name } 
            onPress={() => handleRemoveSkill(item.id)}
          />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    color: "#fff",
    backgroundColor: "#1F1E25",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  gretting: {
    color: "#fff",
    fontSize: 16,
  },
});
