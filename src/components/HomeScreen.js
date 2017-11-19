import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Weekly extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        sun: '', // 일
        mon: '', // 월
        tue: '', // 화
        wed: '', // 수
        thu: '', // 목
        fri: '', // 금
        sat: '', // 토
    };
    this.onLoad = this.onLoad.bind(this);
    this.onLoad();
  }
  onLoad = (data) => {
    // let date = new Date(this.props.year, this.props.month, this.props.day);
    alert('load first');
    this.setState(previousState => {
        return { sun : '1' };
    });
  }
  render () {
    return (
      <View style={{flex: 1, marginLeft: 10, marginRight: 10, marginTop: 15, marginBottom: 15, flexDirection: 'row', borderRadius: 5, overflow: 'hidden', backgroundColor: '#404041', justifyContent: 'space-between', alignItems: 'center'}}>

        <TouchableOpacity style={{flex: 1, borderRightWidth: 0.5, borderRightColor: '#333334'}} >
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#f36f21'}}>
            <Text style={{flex: 1, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', height: 35, lineHeight: 25, fontSize: 16}}>월</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1, color: '#6d6e71', textAlign: 'center', fontSize: 16, fontWeight: 'bold', height: 35, lineHeight: 25}}>{this.state.mon}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1, borderRightWidth: 0.5, borderRightColor: '#333334'}} >
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#ffcb08'}}>
            <Text style={{flex: 1, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', height: 35, lineHeight: 25, fontSize: 16}}>화</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1, color: '#6d6e71', textAlign: 'center', fontSize: 16, fontWeight: 'bold', height: 35, lineHeight: 25}}>{this.state.tue}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1, borderRightWidth: 0.5, borderRightColor: '#333334'}} >
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#8dc63f'}}>
            <Text style={{flex: 1, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', height: 35, lineHeight: 25, fontSize: 16}}>수</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1, color: '#6d6e71', textAlign: 'center', fontSize: 16, fontWeight: 'bold', height: 35, lineHeight: 25}}>{this.state.wed}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1, borderRightWidth: 0.5, borderRightColor: '#333334'}} >
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#00aeef'}}>
            <Text style={{flex: 1, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', height: 35, lineHeight: 25, fontSize: 16}}>목</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1, color: '#6d6e71', textAlign: 'center', fontSize: 16, fontWeight: 'bold', height: 35, lineHeight: 25}}>{this.state.thu}</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={{flex: 1, borderRightWidth: 0.5, borderRightColor: '#333334'}} >
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#283891'}}>
            <Text style={{flex: 1, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', height: 35, lineHeight: 25, fontSize: 16}}>금</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1, color: '#6d6e71', textAlign: 'center', fontSize: 16, fontWeight: 'bold', height: 35, lineHeight: 25}}>{this.state.fri}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1, borderRightWidth: 0.5, borderRightColor: '#333334'}} >
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#662d91'}}>
            <Text style={{flex: 1, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', height: 35, lineHeight: 25, fontSize: 16}}>토</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1, color: '#6d6e71', textAlign: 'center', fontSize: 16, fontWeight: 'bold', height: 35, lineHeight: 25}}>{this.state.sat}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1, borderRightWidth: 0.5, borderRightColor: '#333334'}} >
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#ed1c24'}}>
            <Text style={{flex: 1, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', height: 35, lineHeight: 25, fontSize: 16}}>일</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1, color: '#6d6e71', textAlign: 'center', fontSize: 16, fontWeight: 'bold', height: 35, lineHeight: 25}}>{this.state.sun}</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      year: this.props.year,
      month: this.props.month,
      day: this.props.day,
      date: this.props.year + '.' + this.props.month
    };
  }
  static navigationOptions = {
    title: '스마트 예약 시스템',
  };
  render() {
    const { navigate } = this.props.navigation;
    let currDate = this.state.date;

    return (
      <View style={homeStyle.wrapper}>
        <View style={{flex: 1, flexDirection: 'row', height: 100, alignItems: 'center'}}>
          <View style={homeStyle.column}>
            <TouchableOpacity
            onPress={() => {alert('This Week')}}
            style={homeStyle.btn}>
              <Text style={{color: '#404041'}}>
                <Icon
                name="caret-left"
                size={15}/>&nbsp;
                This Week
              </Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyle.column}>
            <TouchableOpacity
            onPress={() => {alert('aa')}}>
              <Text style={homeStyle.hdTitle}>{currDate}</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyle.column}>
            <TouchableOpacity
            onPress={() => {alert('Next Week')}}
            style={homeStyle.btn}>
              <Text style={{color: '#404041'}}>
                Next Week&nbsp;
                <Icon
                name="caret-right"
                size={15}/>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, height: 100}}>
          <Weekly onLoad={this.onLoad} year={this.state.year} month={this.state.month} day={this.state.day} />
        </View>
        <View style={{flex: 5}}>

        </View>
      </View>
    );
  }
}

let now = new Date();
HomeScreen.defaultProps = {
  year: now.getFullYear(),
  month: (now.getMonth()+1),
  day: now.getDate()
}

const homeStyle = StyleSheet.create({
  wrapper : {
    flex: 1,
    justifyContent: 'space-between',
  },
  column : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hdTitle : {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#404041',
  },
  btn : {
    borderWidth: 1,
    borderColor: '#bcbdc0',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 30,
    backgroundColor: '#ffffff',
  }
});
