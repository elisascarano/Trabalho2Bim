import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Images from '../assets/images/telainicial.png'
import Sobre from './sobre';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
       if (page === 'home') {
          return (
             <View style={styles.container}>
                <ImageBackground source={Images} style={styles.image}>
                    <View style={styles.box}>
                        <Text style={styles.text}>Seja bem-vindo, aqui a sua localização está ao alcance de um toque. Vamos começar a explorar!</Text>
                        <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
             </View>

           );
       } else if (page === 'sobre') {
        return <Sobre />;
       }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 450
    },
    box: {
        backgroundColor: "#D6D3CE",
        height: 200,
        display: 'flex',
        justifyContent: 'flex-end',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: 25
    },
    text: {
        color: "#564F4F",
        fontWeight: "bold",
        textAlign: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        width: 170,
        height: 35,
        alignItems: 'center',
        alignSelf: "center",
        marginTop: 15,
        borderRadius: 30,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    image: {
        width: 350,
        height: 700,
        display: "flex",
        justifyContent: 'flex-end',
    }
});