import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Exemplo01() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.voltar}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.txtBotao}>Voltar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.exemplo}>
                <Text style={styles.titulo}>Exemplo 1</Text>
                <Text style={styles.txt}>Introdução React Native com Expo</Text>
            </View>
        </View>
    );
}

