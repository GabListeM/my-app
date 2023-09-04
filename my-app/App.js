import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 
import AppTab from './AppTab';
 
export default function App() {
  return (
    
     <>
       <AppTab/>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';

// import AppTab from './AppTab';

// export default function App() {
//   return (
//     <>
//       <AppTab />
//       <StatusBar style="light" />
//     </>
//   );
// }
