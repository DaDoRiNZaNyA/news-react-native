import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FullPostScreen } from "./FullPost";
import { Home } from "./Home";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: 
                "Новости" }}/>
                <Stack.Screen name="FullPost" component={FullPostScreen} options={{ title: 
                "Новость" }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
