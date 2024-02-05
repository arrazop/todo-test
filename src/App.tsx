import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {myTheme} from './theme';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={myTheme}>
            <SafeAreaView>
              <Text>Hello</Text>
            </SafeAreaView>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
