import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

function style() {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerOne}>
                <Image style={styles.headerImage} source={{uri: "https://cdn.getir.com/misc/emoji/house.png"}}/>
                <View style={styles.headerOneView}>
                    <Text testID='place-text' style={{fontWeight : '600', fontSize : 16}}>Ev</Text>
                    <Text style={{fontWeight:'500', fontSize : 11.5, color:'#6E7480', marginLeft:6, marginRight:1}}>Dedepaşa Blv. Yenişehir Mahallesi..</Text>
                    <Entypo testID='right-icon' name="chevron-right" size={22} color="#5D3EBC" />
                </View>
                <View style={styles.headerTwo}>
                    <Text style={{fontSize:10, fontWeight : 'bold', color :'#5D3EBD'}}>TVS</Text>
                    <Text style={{fontSize:20, fontWeight : 'bold', color :'#5D3EBD'}}>13<Text style={{fontSize : 16}}>dk</Text></Text>
                </View>
            </View>
            <View>

            </View>
        </View>
    )
}

export default style