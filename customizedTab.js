import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class YourTabBar extends Component {

    constructor(props){
        super();
        console.log(props);
    }

    // We will use this function in array's map
    renderTabBarButton(route, idx){
        console.log(route, idx);

        let icon;
        const {
            activeTintColor,
            inactiveTintColor,
            navigation,
            getLabelText,
            renderIcon,
        } = this.props;
        const color = navigation.state.index === idx ? activeTintColor : inactiveTintColor;
        const label = getLabelText({ route });
        this.color=color;
        this.label=label;
        switch(idx){
            case 0:
                icon=<Entypo name={"home"} color={color} size={25}/>;
                break;
            case 1:
                icon=<Ionicons name={"ios-compass-outline"} color={color} size={25}/>;
                break;
            case 3:
                icon=<MaterialCommunityIcons name={"message-processing"} color={color} size={25}/>;
                break;
            case 4:
                icon=<FontAwesome name={"user"} color={color} size={25}/>;
                break;
        }

        return (
            <TouchableOpacity
                onPress={() => {
                    if(navigation.state !== idx ){
                        navigation.navigate(route.routeName);
                    }
                }}
                style={{flex:1, alignItems:"center", justifyContent:"center"}} // Your style goes here
                key={route.routeName}
            >
                {icon}
                <Text style={{ color, fontSize:12 }}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        let {height, width} = Dimensions.get('window');
        let tabBarButtons = this.props.navigation.state.routes.map(this.renderTabBarButton.bind(this));
        tabBarButtons.splice(2, 1, <View style={{flex:1, alignItems:"center"}}><CenterButton label={this.label} color={this.color} {...this.props}/></View>);
        return (
            <LinearGradient
                colors={['#666', '#333', '#000']}
                style={{
                    flexDirection: 'row',  // we want our tab bar is bar not column
                    height: height/12,
                    width:"100%",
                }}
            >
                { tabBarButtons }
            </LinearGradient>
        );
    }
}

class CenterButton extends React.Component{

    navigateToHome=()=>{console.log(this.props)};

    render() {
        let {height, width} = Dimensions.get('window');
        return (
                <TouchableOpacity
                    style={{
                        height: width / 7,
                        width: width /7,
                        backgroundColor: "#F23485",
                        borderRadius:width/14,
                        position:"absolute",
                        bottom:height/12-width/14,
                    }}
                    onPress={()=>{this.props.navigation.navigate("home")}}
                />
        )
    }
}