import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import RoomInformation from './src/screens/RoomInformation';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <RoomInformation />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
