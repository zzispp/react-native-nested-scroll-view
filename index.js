import { Platform, ScrollView } from 'react-native';

export default Platform.OS === 'android'
  ? require('./lib/ScrollView')
  : ScrollView;
