import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import Icon  from 'react-native-icons';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {date:"2016.05"}
    }
    static navigationOptions = {
        title: '스마트 예약 시스템',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={homeStyle.wrapper}>
                <View style={{flex: 1, flexDirection: 'row', height: 100, alignItems: 'center'}}>
                    <View style={homeStyle.column}>
                        <TouchableOpacity
                            onPress={() => {alert('This Week')}}
                            style={homeStyle.btn}>
                            <Text>This Week</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={homeStyle.column}>
                        <TouchableOpacity
                            onPress={() => {alert('aa')}}>
                        <Text style={homeStyle.hdTitle}>{this.state.date}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={homeStyle.column}>
                        <TouchableOpacity
                            onPress={() => {alert('Next Week')}}
                            style={homeStyle.btn}>
                            <Text>Next Week</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1, height: 100, backgroundColor: '#ed1c24'}}>

                </View>
                <View style={{flex: 5}}>

                </View>
            </View>
        );
    }
}
const homeStyle = StyleSheet.create({
    wrapper : {
        flex: 1,
        justifyContent: 'space-between'
    },
    column : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hdTitle : {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#404041',
    },
    btn : {
        borderWidth: 1,
        borderColor: '#bcbdc0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        color: '#404041'
    }
});
