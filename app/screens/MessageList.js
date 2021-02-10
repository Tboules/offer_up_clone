import React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";

import {
  ListItemSeperator,
  SellerCard,
  ListItemDeleteAction,
} from "../components/list";

const DATA = [
  {
    id: 1,
    title: "M1",
    desc: "D1",
    image: require("../images/mosh.jpg"),
  },
  {
    id: 2,
    title: "M2",
    desc: "D2",
    image: require("../images/mosh.jpg"),
  },
];

export default function MessageList() {
  const [dataState, setDataState] = React.useState(DATA);
  const [refreshing, setRefreshing] = React.useState(false);

  const handleDelete = (message) => {
    const messages = dataState.filter((item) => item.id !== message.id);
    setDataState(messages);
  };

  return (
    <SafeAreaView style={styles.cont}>
      <FlatList
        data={dataState}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SellerCard
            showChev={true}
            imageLink={item.image}
            name={item.title}
            description={item.desc}
            handlePress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setDataState(DATA);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
