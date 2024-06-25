import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Home from './home';
import Map from "../assets/images/map.png"

export default function App(){
    const [page, setPage] = React.useState('sobre');
    
    const renderPage = () => {
        if (page === 'sobre') {
            return (
            <View style={styles.container}>
                <ImageBackground source={Map} style={styles.image}>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>

                    <View style={styles.box}>
                        <Text style={styles.item}>Latitude e Longitude</Text>
                        <Text style={styles.subtext}>-22.790351711148155</Text>
                        <Text style={styles.subtext}>-50.207837376186625</Text>
                        <Text style={styles.item}>Localização Atual</Text>
                        <Text style={styles.subtext}>Escola Técnica Estadual Professor Mário Antônio Verza, Palmital - SP</Text>
                        <TouchableOpacity style={styles.buttonGetLocation} onPress={() => setPage('home')}>
                            <Text style={styles.buttonText}>Obter Localização</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
);
        } else if (page === 'home') {
          return <Home />;
        };
};
        return <View style={styles.container}>{renderPage()}</View>;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFE0E2',
        width: 430
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#D4D4D4',
        padding: 10,
        borderRadius: 5,
        width: 55,
        height: 35
    },
    buttonGetLocation: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        width: 150,
        height: 35
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    image: {
        width: 370,
        height: 700,
        display: "flex",
        justifyContent: 'space-between',
        borderRadius: 12,
        padding: 12
    },
    box: {
        backgroundColor: "#333333",
        width: "100%",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        borderRadius: 20
    },
    subtext: {
        color: "white",
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center"
    },
    item: {
        marginBottom: 15,
        color: "#888787",
        opacity: 80
    }
});