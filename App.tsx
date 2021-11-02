import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import React,{useState} from 'react'

function App (){

  const[name,setName]= useState('');
  const[age,setAge]= useState('');

  return (
    <View style={styles.container}> 
        <Image
        style={styles.backgroundImage}
        source={{uri:'https://www.xtrafondos.com/descargar.php?id=3079&vertical=1'}}
        />
        <Text style={styles.textonombre} >
        Ingresa tu nombre:
        </Text>
        <TextInput 
        style={styles.textInput} 
        value={name}
        onChangeText={val => setName(val) }
        />

        <Text style={styles.textoedad} >
        Ingresa tu edad:
        </Text>
        <TextInput 
        style={styles.textInput} 
        value={age}
        onChangeText={val => setAge(val) }
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={()=> {
          var ageS = parseInt(age)
          var suma = 0;
          var res=0;
          var x=0;
            if(age == '' || name =='')
                Alert.alert("Rellena los campos")
            else if(ageS < 10 ) {
                suma= ageS * 7
                while(suma > 10){
                    res= suma%10;
                    x= Math.floor(suma /= 10)
                    suma=res+x;
                }
            }else
              suma=ageS
                while(suma > 10){
                  res= suma%10;
                  x= Math.floor(suma /= 10)
                  suma=res+x;
                }
            Alert.alert("Hola "+name  +" Tu numero de la suerte es:"+ suma)
        }}>
          <Text> obtener numero </Text>
        </TouchableOpacity>
    </View>
  )
};
export default App;



var styles = StyleSheet.create({

  container:{
  alignItems: 'center',
  display: 'flex',
},

  backgroundImage:{
    width: '100%',
    height: 750,
    position: 'absolute',
  },
  textonombre:{
        fontSize: 20,
        alignItems: 'center',
        fontWeight: 'bold',
        margin: 20,
        marginTop: 200,
        letterSpacing: 2,
        color: '#DB7093',
  },
  textoedad:{
    fontSize: 20,
    alignItems: 'center',
    fontWeight: 'bold',
    margin: 10,
    letterSpacing: 2,
    color: '#DB7093',
},
  textInput:{
  borderColor: '#00BFFF',
    backgroundColor: '#DB7093',
    padding: 8,
    margin: 10,
    width: 200,
    borderWidth: 2,
  },
  button:{
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#DB7093',
    marginTop: 20,
  },
})


