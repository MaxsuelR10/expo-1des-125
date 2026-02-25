import { StyleSheet} from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import Botao from '../ex06/botao';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: RFPercentage(1),
    },
    botao: {
        borderWidth: RFPercentage(1),
    },
    txtBotao: {
        fontSize: RFPercentage(4),
    }
});

export default styles;