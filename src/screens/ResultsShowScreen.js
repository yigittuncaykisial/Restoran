import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultsShowScreen({ route }) {
    const [result, setResult] = useState(null);
    const id = route.params.id;
  
    const getResult = async (id) => {
      try {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };
  
    useEffect(() => {
      getResult(id);
    }, []);
  
    if (!result) {
      return null;
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.isim}>{result.name}</Text>
        <Text style={styles.telno}>{result.phone}</Text>
        {
            result.is_closed ? 
            <AntDesign name="closecircleo" size={30} color="black"/>:
            <MaterialIcons name="delivery-dining" size={32} color="black"
             />
            }
         
        <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    image: {
      width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius:12,
    },
    isim:{
      fontSize:30,
      fontWeight:'bold',
    },
    telno:{
        fontSize:20,
        marginBottom:7,
    }
  });
  