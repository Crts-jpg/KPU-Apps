import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === 'Admin' && password === 'Admin') {
            navigation.replace('Home'); 
        } else {
            setError('Username atau password salah');
        }
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/maskot.jpg')}
                style={styles.topImage}
                resizeMode="contain"
            />

            <View style={styles.formContainer}>
                <Text style={styles.title}>Login to your account</Text>

                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image 
                            source={require('../../assets/icons8-facebook-48.png')}
                            style={styles.socialIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image 
                            source={require('../../assets/icons8-twitter-48.png')} 
                            style={styles.socialIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image 
                            source={require('../../assets/icons8-google-48.png')} 
                            style={styles.socialIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.orText}>or use your email account</Text>

                <TextInput 
                    placeholder="Email"
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor="#666"
                />
                <TextInput 
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor="#666"
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <View style={styles.optionsContainer}>
                    <TouchableOpacity>
                        <Text style={styles.rememberMeText}>Remember me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Don’t have an account? Register here</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    topImage: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        alignSelf: 'center',
    },
    formContainer: {
        marginBottom: 30,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 15,
    },
    socialButton: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 8,
    },
    socialIcon: {
        width: 30,
        height: 30,
    },
    orText: {
        textAlign: 'center',
        marginBottom: 15,
        color: '#666',
    },
    input: {
        height: 50,
        borderColor: '#D32F2F',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    errorText: {
        color: '#D32F2F',
        marginBottom: 15,
        textAlign: 'center',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    rememberMeText: {
        fontSize: 14,
        color: '#666',
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#D32F2F',
    },
    loginButton: {
        backgroundColor: '#F57C00',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerText: {
        color: '#FFA726',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default LoginScreen;
