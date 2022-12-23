import { StyleSheet } from "react-native";

export const containers = StyleSheet.create({
  page: {
    backgroundColor: '#26408B',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40px',
    paddingBottom: '40px',
    color: 'white'
  },
  content: {
    display: 'flex',
    padding: '16px',
    borderRadius: 8,
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '300px',
  },
});
