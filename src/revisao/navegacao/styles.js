import { StyleSheet } from 'react-native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // justifyContent: 'center', 
        backgroundColor: '#fafafa',
        flex: 1,
        padding: 20,
    },
    botao: {
        width: '70%',
        padding: 10,
        borderWidth: RFPercentage(0.5),
        borderRadius: 20, 
        marginBottom: 10,
    },
    titulo: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold', 
        marginBottom: 30,
    },
    textoBtn: {
        fontSize: RFPercentage(4),
    }
});

export default styles;