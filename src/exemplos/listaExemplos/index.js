import { View, TouchableOpacity, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';  

export default function ListaExemplos () {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplos</Text>
            
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Ex1')}>
                <Text style={styles.txtBotao}>Exemplo 1</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Ex2')}>
                <Text style={styles.txtBotao}>Exemplo 2</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Ex3')}>
                <Text style={styles.txtBotao}>Exemplo 3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Ex4')}>
                <Text style={styles.txtBotao}>Exemplo 4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Ex5')}>
                <Text style={styles.txtBotao}>Exemplo 5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Ex6')}>
                <Text style={styles.txtBotao}>Exemplo 6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Ex7')}>
                <Text style={styles.txtBotao}>Exemplo 7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Ex8')}>
                <Text style={styles.txtBotao}>Exemplo 8</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Ex9')}>
                <Text style={styles.txtBotao}>Exemplo 9</Text>
            </TouchableOpacity>
        </View>
    );
}