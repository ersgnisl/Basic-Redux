
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import NumberProcess from './components/NumberProcess';
import stores from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const {store,persistor} = stores();

export default function App (){
return(
<Provider store = {store}>
  <PersistGate loading = {null} persistor = {persistor}>
<View style = {style.container}>
<NumberProcess/>
<StatusBar style = "auto" />
</View>
</PersistGate>
</Provider>
);
}

const style = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#fff',
    alignItems: "center",
    justifyContent: "center",
  },
})

