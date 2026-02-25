import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaExemplos from '../exemplos/listaExemplos';
import Exemplo01 from '../exemplos/ex01';
import Exemplo02 from '../exemplos/ex02';
import Exemplo03 from '../exemplos/ex03'; 
import Exemplo04 from '../exemplos/ex04'; 
import Exemplo05 from '../exemplos/ex05'; 
import Exemplo06 from '../exemplos/ex06';
import Exemplo07 from '../exemplos/ex07';
import Exemplo08 from '../exemplos/ex08';
import Exemplo09 from '../exemplos/ex09';

const Stack = createNativeStackNavigator();

function StackExemplos() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ListaExemplos} />
      <Stack.Screen name="Ex1" component={Exemplo01} />
      <Stack.Screen name="Ex2" component={Exemplo02} />
      <Stack.Screen name="Ex3" component={Exemplo03} />
      <Stack.Screen name="Ex4" component={Exemplo04} />
      <Stack.Screen name="Ex5" component={Exemplo05} />
      <Stack.Screen name="Ex6" component={Exemplo06} />
      <Stack.Screen name="Ex7" component={Exemplo07} />
      <Stack.Screen name="Ex8" component={Exemplo08} />
      <Stack.Screen name="Ex9" component={Exemplo09} />
    </Stack.Navigator>
  );
}

export default StackExemplos;