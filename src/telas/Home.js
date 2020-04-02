import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native'
import md5 from 'js-md5'

const PUBLIC_KEY = 'fa8f53f726b9d8f64c4a005f5deb4c30'
const PRIVATE_KEY = 'b9b71568c94780568122c58d916bc2c53ecbcaa1'

export default class Home extends React.PureComponent {
    static navigationOptions = {
        title: 'Heróis da Marvel'
    }
    
    state = {
        data: []
    }
    
    async componentDidMount() {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        this.setState({data: responseJson.data.results})
        console.log(data);
    }

    _renderItem = ({item}) => {
        return  (
            <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
                <Image style={{height: 50, width: 50, borderRadius: 25}} source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                <Text style={{marginLeft: 10}}>{item.name}</Text>                             
            </TouchableOpacity>
        )
    }

    _onItemPress = (item) => {
       
        this.props.navigation.navigate('Description', {hero: item})
    } 

    render() {
        return (
            <FlatList 
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:3, backgroundColor: '#000'}} 
                />}
            />
        )
    }
}