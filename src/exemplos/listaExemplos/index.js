import { View, TouchableOpacity, Text } from 'react-native';

export default function ListaExemplos () {
    return(
        <View>
            <Text>Exemplos</Text>
            
            <TouchableOpacity>
                <Text>Exemplo 1</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text>Exemplo 2</Text>
            </TouchableOpacity>
        </View>
    );
}