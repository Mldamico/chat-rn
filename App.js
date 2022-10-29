import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/components/ChatListItem";

const chat = {
  id: "1",
  user: {
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp",
    name: "Morgan",
  },
  lastMessage: {
    text: "Hello!",
    createdAt: "07:30",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
