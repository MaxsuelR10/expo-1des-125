import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackExemplos from './stackExemplos';
import StackAtividades from './stackAtividades';

function BottomTabs() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#ff0' },
                // headerShown: false,   
                tabBarActiveTintColor: 'green',
                // tabBarInactiveTintColor: 'orange', 
                // tabBarShowLabel: false, 
                // tabBarLabelStyle: { display: 'none' }                 
                // tabBarLabelPosition: 'below-icon'                
            }}
        // initialRouteName="Home"
        >
            <Tab.Screen
                name="StackExemplos"
                component={StackExemplos}
                options={{
                    title: 'Exemplos',
                    // tabBarLabelStyle: {
                    //     fontSize: 16,
                    //     fontFamily: 'Georgia',
                    //     fontWeight: 300,
                    // },
                }}

            />
            <Tab.Screen 
                name="StackAtividades" 
                component={StackAtividades}  
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;