import React from 'react';
import { Text, View, ScrollView, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title, List, ListItem, Thumbnail, Item, Input } from 'native-base';
import { YourTabBar } from "./customizedTab";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

let pink="#F23485";

class HomeScreen extends React.Component {
    render() {
        let {height, width} = Dimensions.get('window');
        return (
            <Container style={{backgroundColor:"#000"}}>
                <Header style={{backgroundColor:"#000"}}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Home</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <View style={{flexDirection:"row", width:width, height:height/10, alignItems:"center", justifyContent:"space-around"}}>
                        <Image style={{width: 50, height: 50, borderRadius:25}} source={require("./img/user1.jpeg")}/>
                        <Text style={{color:"#fff"}}>{"@blackpanther56~\n Wakanda King"}</Text>
                        <View style={{flexDirection:"row", height:"100%", paddingTop:"5%"}}>
                            <Button rounded light style={{backgroundColor:pink, width:50, height:20, justifyContent:"center"}}
                                    onPress={()=>{Alert.alert("Message", "Button pressed!")}}
                            >
                                <Text style={{color:"#fff", fontSize:12}}>Edit</Text>
                            </Button>
                            <Button rounded light
                                    style={{backgroundColor:pink, width:50, height:20, justifyContent:"center", marginLeft:10}}
                                    onPress={()=>{Alert.alert("Message", "Button pressed!")}}
                            >
                                <Text style={{color:"#fff", fontSize:12}}>Post</Text>
                            </Button>
                            <Button rounded light
                                    style={{backgroundColor:pink, width:50, height:20, justifyContent:"center", marginLeft:10}}
                                    onPress={()=>{Alert.alert("Message", "Button pressed!")}}
                            >
                                <Text style={{color:"#fff", fontSize:12}}>Rock</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:"5%", marginTop:"2%"}}>
                        <Text style={{color:"#ccc", fontSize:14}}>
                            Astronomy, reading, coffee-shop people watching, playing make believe with my nephew, eating out on Monday nights, and staying inside on rainy days. Just a few of the things that make me happy. Maybe you can help add to the list.
                        </Text>
                    </View>
                    <View style={{ width:width, height:height/2, padding:"2%", justifyContent:"space-around", paddingHorizontal:width/50}}>
                        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people1.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people2.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people3.jpeg")}/>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people4.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people5.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people6.jpg")}/>
                        </View>
                        <Text onPress={() => this.props.navigation.navigate('view')} style={{color:pink, textAlign:"center"}}>View all</Text>
                    </View>

                    <View style={{flexDirection:"row",height:height/10, width:width}}>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                            <TouchableOpacity style={{width:"90%", height:"60%"}} onPress={()=>{Alert.alert("Message", "Button pressed!")}}>
                                <LinearGradient colors={[pink, "#f2c530"]} style={{flex:1, borderRadius:200, justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{color:"#fff"}}>Send friend request</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row",flex:1, alignItems:"center", justifyContent:"flex-end", paddingRight:30}}>
                            <EvilIcons name={"heart"} color={pink} size={50} onPress={()=>{Alert.alert("Message", "Button pressed!")}}/>
                            <FontAwesome name={"send-o"} color={pink} size={34} style={{marginLeft:10}} onPress={()=>{Alert.alert("Message", "Button pressed!")}}/>
                        </View>
                    </View>
                    <Container style={{width:width, height:height/2}}>
                        <View style={{paddingHorizontal:width*0.05}}>
                            <Item rounded style={{height:50, width:width*0.9, backgroundColor:"#fff"}}>
                                <Input placeholder='Type your comment here' style={{fontSize:14, flex:2}}/>
                                <TouchableOpacity style={{flex:1}} onPress={()=>{Alert.alert("Message", "Button pressed!")}}>
                                    <LinearGradient colors={[pink, "#f2c530"]} style={{flex:1, borderTopRightRadius:200, borderBottomRightRadius:200, justifyContent:"center", alignItems:"center"}}>
                                        <Text style={{color:"#fff"}}>Post</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </Item>
                        </View>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={require("./img/user1.jpeg")} />
                                </Left>
                                <Body>
                                <Text style={{color:"#fff"}}>Wakhanda king</Text>
                                <Text style={{color:"#fff"}} note>Doing what you like will always keep you happy</Text>
                                </Body>
                                <Right>
                                    <Text style={{color:"#fff"}} note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={require("./img/user1.jpeg")} />
                                </Left>
                                <Body>
                                <Text style={{color:"#fff"}}>Wakhanda king</Text>
                                <Text style={{color:"#fff"}} note>Doing what you like will always keep you happy</Text>
                                </Body>
                                <Right>
                                    <Text style={{color:"#fff"}} note>3:45 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={require("./img/user1.jpeg")} />
                                </Left>
                                <Body>
                                <Text style={{color:"#fff"}}>Wakhanda king</Text>
                                <Text style={{color:"#fff"}} note>Doing what you like will always keep you happy</Text>
                                </Body>
                                <Right>
                                    <Text style={{color:"#fff"}} note>3:48 pm</Text>
                                </Right>
                            </ListItem>
                        </List>
                    </Container>
                </ScrollView>
            </Container>
        );
    }
}

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile!</Text>
            </View>
        );
    }
}

class MessageScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Messaging!</Text>
            </View>
        );
    }
}

class DiscoverScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Discover screen!</Text>
            </View>
        );
    }
}
class ViewImage extends React.Component {
    render() {
        let {height, width} = Dimensions.get('window');
        return (
            <Container style={{backgroundColor:"#000"}}>
                <Header style={{backgroundColor:"#000"}}>
                    <Left>
                        <Button transparent onPress={()=>{this.props.navigation.navigate("home")}}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Images</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <View style={{ width:width, height:height, padding:"2%", justifyContent:"space-around", paddingHorizontal:width/50}}>
                        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people1.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people2.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people3.jpeg")}/>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people4.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people5.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people6.jpg")}/>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people4.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people5.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people6.jpg")}/>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people4.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people5.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people6.jpg")}/>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people4.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people5.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people6.jpg")}/>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people4.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people5.jpg")}/>
                            <Image resizeMode={"cover"} style={{width: width/3-width*0.05, height: height/4-height*0.07}} source={require("./img/people6.jpg")}/>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

export default createBottomTabNavigator(
    {
        home: HomeScreen,
        discover: DiscoverScreen,
        view:ViewImage,
        message: MessageScreen,
        profile: ProfileScreen,
    },
    {
        tabBarOptions: {
            activeTintColor: 'rgb(255, 195, 43)',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: YourTabBar
    },
);