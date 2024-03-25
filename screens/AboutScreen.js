import { Text, Button, StyleSheet } from "react-native";
import MainLayout from "../layouts/MainLayout";

export default function AboutScreen ({ navigation }) {
    return (
        <MainLayout>
            <Text style={styles.heading}>Incredible ToDo</Text>
            <Text style={styles.subtitle}>by Leina Capili</Text>
            <Text style={styles.subtitle}>Today's date: March 24, 2024 Sunday</Text>
            <Button
                title='Go to Home'
                onPress={() => navigation.navigate("Home")}
            />
        </MainLayout>
    );
}

const styles = StyleSheet.create({
   heading: {
    fontSize: 20,
    fontFamily: 'Futura',
    textAlign: 'center',
    marginTop: 16,
    padding: 10,
   },
   subtitle: {
    fontSize: 12,
    fontFamily: 'Futura',
    textAlign: 'center',
   },
});
