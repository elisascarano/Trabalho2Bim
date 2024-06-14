import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Images from '../assets/images/world.png'
import Titulo from '../assets/images/Titulo.png'
import Sobre from './sobre';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
       if (page === 'home') {
          return (
             <View style={styles.container}>
                <ImageBackground source={Images} style={styles.image}>
                    <Image source={Titulo}></Image>
                    <Text style={styles.title}>Página Principal</Text>
                    <Text style={styles.title}>Exemplo 1</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>Clique aqui</Text>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    image: {
        width: 400,
        height: 800,
    }
});