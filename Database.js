import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput
} from 'react-native'
import { DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const Get = () => {
    const [user, setUser] = useState('');
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(user);

    const getUserData = async () => {
        try {
            fetch('https://ghibliapi.herokuapp.com/films')
            .then((response)=>{return response.json()})
            .then((json)=>{
                setList(json);
                setUser(json);
            })
            .catch((err)=>{console.log("o erro foi" + err)})   
        }catch (error){
            console.error(error);
        }
    }

    useEffect(() =>{
        getUserData();    
    }, []);  


    const renderItem = ({ item }) => {
        return (
            <View>
                <DataTable>
                    <DataTable.Row style={styles.linhas}>
                            <DataTable.Cell>   
                            <Text 
                            style={{
                                color: '#fff', 
                                fontSize: 'small', 
                                fontFamily: 'Times New Roman'}}
                                >
                                {item.title}
                            </Text>
                            </DataTable.Cell>
                            <DataTable.Cell numeric >
                                <Text style={{
                                    color: '#fff', 
                                    fontSize: 'medium', 
                                    fontFamily: 'Times New Roman'}}
                                    >
                                    {item.release_date}
                                </Text>
                            </DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
 
        );
    };

    useEffect(()=>{
        if(searchText === ''){
            setList(user)
        } else {
            setList(
                user.filter((item) => {
                    if(item.title.toLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1) {
                        return true;
                    }else {
                        return false;
                    }
                })
            )
        }
    }, [searchText]);

    return (
        <View style={styles.container}>
            <Text style={
                {marginBottom: 10, 
                textItems: 'center',
                width: 200,
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 8
                }}>

                <TextInput 
                    style={styles.search} 
                    placeholder="Digite um titulo..."
                    placeholderTextColor='#fff'
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                />
                <Icon name="search" size={20} color="#fff" />
            </Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>
                        <Text style={styles.titulo}>
                            Titulo
                        </Text>
                    </DataTable.Title>
                    <DataTable.Title numeric>
                        <Text 
                        style={styles.titulo}>
                        Lançamento
                        </Text>
                    </DataTable.Title>
                </DataTable.Header>
            </DataTable>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#439BE5',
    },
    header: {
        fontFamily: 'Cooper',
        fontSize:  'larger',
        color: '#fff'
    },
    linhas : {
        width: 370,
    },
    titulo : {
        color: '#fff', 
        fontFamily: 'Cooper', 
        textAlign: 'center', 
        fontSize: 22
    },
    search: {
        backgroundColor: 'none',
        height: 20,
        borderColor: 'rgb(0,0,0)',
        display: 'flex',
        borderBottomColor: 'rgb(255,255,255)',
        borderBottomWidth: 1.5,
        color: '#fff',
        width: 150,
        fontFamily: 'Times New Roman'
    },
  });

export default Get;