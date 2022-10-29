import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://qph.cf2.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>Morgan</Text>
          <Text style={styles.subtitle}>8:00</Text>
        </View>
        <Text style={styles.subtitle}> Hello!!!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: { fontWeight: "bold", flex: 1 },
  subtitle: { color: "grey" },
});
export default ChatListItem;
