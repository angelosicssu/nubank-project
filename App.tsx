import { SafeAreaView, Text } from 'react-native';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/app.routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
