import React from "react";
import { View, FlatList } from "react-native";
import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/Program";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// 1. Program Type
type Program = {
  id: number;
  university: string;
  country: string;
  description: string;
  details: string;
};

// 2. Navigation Param List
type RootStackParamList = {
  Home: undefined;
  Details: { program: Program };
};

// 3. Navigation Type
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={programs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProgramCard
            item={item}
            onPress={() =>
              navigation.navigate("Details", { program: item })
            }
          />
        )}
      />
    </View>
  );
}