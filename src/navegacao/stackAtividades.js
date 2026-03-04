import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaAtividades from '../atividades/listaAtividades';
import Atividade01 from '../atividades/atv01';
import Atividade02 from '../atividades/atv02';
import Atividade03 from '../atividades/atv03';
import Atividade04 from '../atividades/atv04';
import Atividade05 from '../atividades/atv05';
import Atividade06 from '../atividades/atv06';
import Atividade07 from '../atividades/atv07';

const Stack = createNativeStackNavigator();

function StackAtividades() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#777'},         
        // headerShown: false,
      }}                  
    >
      <Stack.Screen name="Home" component={ListaAtividades} options={{headerTintColor: '#fff',}} />
      <Stack.Screen
        name="Atividade01"
        component={Atividade01}
        options={{ title: 'Atividade 1' }}               
      />
      <Stack.Screen name="Atividade02" component={Atividade02} />
      <Stack.Screen name="Atividade03" component={Atividade03} />
      <Stack.Screen name="Atividade04" component={Atividade04} />
      <Stack.Screen name="Atividade05" component={Atividade05} />
      <Stack.Screen name="Atividade06" component={Atividade06} />
      <Stack.Screen name="Atividade07" component={Atividade07} />
    </Stack.Navigator>
  );
}

export default StackAtividades;