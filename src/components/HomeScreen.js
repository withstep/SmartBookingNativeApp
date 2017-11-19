import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Week extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <TouchableOpacity style={[weekStyle.weekItem,  weekStyle.weekItemLast]} >
        <View style={[weekStyle.week, this.props.style]}>
          <Text style={weekStyle.weekText}>{this.props.text}</Text>
        </View>
        <View style={weekStyle.dayView}>
          <Text style={weekStyle.day}>{this.props.day}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class Weekly extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    let now = new Date(this.props.year, this.props.month, this.props.day);
    let nowDayOfWeek = now.getDay();
    let nowDay = now.getDate();
    let nowMonth = now.getMonth();
    let nowYear = now.getYear();
    nowYear += (nowYear < 2000) ? 1900 : 0;
    let weekDates = new Array();
    let weekItems = new Array(
        {text : '일', style : weekStyle.sun},
        {text : '월', style : weekStyle.mon},
        {text : '화', style : weekStyle.tue},
        {text : '수', style : weekStyle.wed},
        {text : '목', style : weekStyle.thu},
        {text : '금', style : weekStyle.fri},
        {text : '토', style : weekStyle.sat}
    )
    for(let i = 0; i < 7; i++) {
      let weekDate = new Date(nowYear, nowMonth, nowDay + (i - nowDayOfWeek));
      weekDates.push({
        day: weekDate.getDate(),
        text: weekItems[i].text,
        style: weekItems[i].style,
      });
    }
    this.state.dates = weekDates;
  }
  render() {
    return (
      <View style={weekStyle.wrapper}>
        {this.state.dates.map((contact,i)=> {
          return (<Week
              day={contact.day}
              text={contact.text}
              style={contact.style}
            />);
        })}
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
      date: this.props.year + '.' + (this.props.month+1)
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
  month: now.getMonth(),
  day: now.getDate()
}

const weekStyle = StyleSheet.create({
  wrapper : {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#404041',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  weekItem : {
    flex: 1,
    borderRightWidth: 0.5,
    borderRightColor: '#333334'
  },
  weekItemLast : {
    borderRightWidth: 0
  },
  week: {
    flex: 1,
    flexDirection: 'row',
  },
  mon : {
    backgroundColor: '#f36f21'
  },
  tue : {
    backgroundColor: '#ffcb08'
  },
  wed : {
    backgroundColor: '#8dc63f'
  },
  thu : {
    backgroundColor: '#00aeef'
  },
  fri : {
    backgroundColor: '#283891'
  },
  sat : {
    backgroundColor: '#662d91'
  },
  sun : {
    backgroundColor: '#ed1c24'
  },
  weekText : {
    flex: 1,
    height: 35,
    lineHeight: 25,
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dayView: {
    flex: 1,
    flexDirection: 'row'
  },
  day : {
    flex: 1,
    color: '#6d6e71',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    height: 35,
    lineHeight: 25
  }
});

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
