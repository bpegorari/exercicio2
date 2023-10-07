/**
 * @format
 */
import App from './App';
import {name as appName} from './app.json';
import{View, Text, AppRegistry} from 'react-native';
import{styles} from './styles';

AppRegistry.registerComponent(appName, () => App);

function Display(props){  

  return(
    <View style={styles.tela}>
      <Text style={styles.dado}>
        {props.exibir}
      </Text>
    </View>
  )
}

export{Display};

