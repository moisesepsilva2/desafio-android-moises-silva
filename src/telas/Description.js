import React, { Component } from 'react'
import { ScrollView, Image, Dimensions, Text, Button, Alert } from 'react-native'


const SCREEN_WIDTH = Dimensions.get('screen').width
export default class Description extends Component {
    static navigationOptions = {
        title: 'Descrição do Herói'
    }

        render() {
            const { hero } = this.props.navigation.state.params
          return (
           <ScrollView>
               <Image 
                    source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}} 
                    style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}}
                />
                <Text style={{padding:10, fontSize:20}}>{hero.name}</Text>
                <Text style={{padding:10}}>{hero.description}</Text>
               <Button
          title="Ver detalhamento de HQ's"
          onPress={() => Alert.alert('Este herói aparece em : ',hero.comics.items.length+' Quadrinhos, '+hero.series.items.length+' Séries e '+hero.stories.items.length+' Estórias')}
        />
                         
           </ScrollView> 
           


        )

       
        
      
    }
}