import React, { useState } from 'react';
import { Image,View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const UserScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
      console.log('Login button pressed');
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <><View>
       
        <Image style={styles.amongus} source={require("../assets/USER1.jpg")} />
      </View><View style={styles.container}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input} />
  
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input} />
  
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>
  
        
          <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordButtonText}>
                Forgot password?
              </Text>
            </TouchableOpacity>
  
          <TouchableOpacity style={styles.registerButton}>
             <Text style={styles.registerButtonText}>
                Not have an account yet?{" "}
                <Text style={styles.registerButtonTextHighlight}>
                  Register now!
                </Text>
              </Text>
            </TouchableOpacity>
  
        </View></>
  
    );
  };
  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    forgotPasswordButton: {
      alignSelf: "center",
    },
    forgotPasswordButtonText: {
      color: "#3662AA",
      fontSize: 16,
      fontWeight: "500",
    },
    registerButton: {
      alignSelf: "center",
      marginTop: 40,
    },
    registerButtonText: {
      fontSize: 16,
      color: "#7C808D",
    },
    registerButtonTextHighlight: {
      fontSize: 16,
      color: "#3662AA",
      fontWeight: "500",
    },
    amongus: {
      position: "absolute",
      top: 70,
      left:130,
      width: 148,
      height: 144,
      marginTop: 50,
  
    },
    container: {
      flex: 1,
      color:'pink',
      justifyContent: 'center',
      paddingHorizontal: 16,
      marginTop: 150,
    },
    input: {
      marginBottom: 10,
    },
    button: {
      marginTop: 16,
    },
  });

export default UserScreen;