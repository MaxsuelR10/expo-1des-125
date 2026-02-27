import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ff0',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        }, 
        voltar: {
            width: '100%',
            alignItems: 'flex-start',
        },
        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: '#777',
        },
        txt: {
            fontSize: RFPercentage(2.5),
        },
        botao: {
            // borderWidth: RFPercentage(0.3),
            padding: RFPercentage(1),
            // width: '60%',
            alignItems: 'center',
            borderRadius: RFPercentage(1),
            margin: RFPercentage(1), 
            backgroundColor: 'tomato'
        },
        txtBotao: {
            fontSize: RFPercentage(2), 
            color: '#ffff00',
        },
        exemplo: {
            flex: 1,
            backgroundColor: '#ff0',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
    }
);

export default styles;