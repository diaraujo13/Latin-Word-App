//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { Button, Chip, RadioButton } from "react-native-paper";
import { LinearGradient } from 'expo';
import { buildMarkovModel } from "../util/latin.js";

// create a component
class WordGen extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      words: [],
      textResult: []
    };
  }

  async componentWillMount() {
    let words = await require("../assets/latin.json");

    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#2c3e50');
    
    await this.setState({
      words,
      loading: false
    });
  }

  generateWord = () => {
    let { words } = this.state;
    let generateModel = buildMarkovModel(words, 4);
    let newWordGenerated = generateModel.generateWord();

    this.setState({
        textResult: this.state.textResult.length > 15 ? [newWordGenerated] : [newWordGenerated, ...this.state.textResult]
    })

  };

  render() {
    let { loading, textResult } = this.state;

    if (loading) {
      return <View style={styles.container} />;
    } else {
      return (
          <View style={styles.main_container}>
            <View style={styles.container}>
            
                <ScrollView style={{flex: 1, marginTop: 40, overflow: 'hidden'}}>
                    <View style={{ flexDirection:'row', alignContent: 'space-around', justifyContent:'space-around', paddingHorizontal: 10, flexWrap:'wrap'}}>
                                {textResult.map( (el, i) => {
                                    
                                    return (
                                        <Chip
                                        icon="info"
                                        key={i}
                                        mode="outlined"
                                        style={{
                                            marginVertical: 4,
                                            backgroundColor: i == 0 ? '#966BD6' : '#CCC'
                                        }}
                                        onPress={() => console.log("Pressed")}
                                        >
                                    {el}
                                    </Chip>
                                )
                            })}
                    </View>
                </ScrollView>
                <LinearGradient
                    colors={['transparent', '#2c3e50' ]}
                    style={{
                        height: 100,
                        marginTop: -100,
                        marginBottom: 30
                    }}
                />
              <View style={styles.options_bar}>
                  <Button
                    mode="contained"
                    color="#FFB000"
                    onPress={this.generateWord}
                  >
                    Generate ONE WORD
                  </Button>
                 
                <View style={{height:50,}}>

                    <ScrollView horizontal>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <RadioButton
                            value="first"
                            status='checked'
                            />
                            <Text style={{color: '#F8F8F8', fontSize: 9}}>Latin</Text>
                            <RadioButton
                            value="second"
                            />
                            <Text style={{color: '#F8F8F8', fontSize: 9}}>Fantasy (soon)</Text>

                        </View>
                    </ScrollView>
                </View>
                <View />

                <View>
                    <Text style={{textAlign:'center', color: 'white', fontSize: 19}}>How it works?{'\n'} </Text>
                    <Text style={{textAlign:'center', color: 'white'}}>Basically, it's a Automated text generator using Markov Chain. It is an algorithm which is used to generate a new outcome from a weighted list of words based on historical text{'\n\n'}Click in the word to copy it to clipboard. </Text>
                
                </View>

                <View>
                    <Text style={{textAlign:'center', color: 'rgba(0,0,0,.2)', marginBottom: 5}}>Made with <Text style={{color: '#e74c3c'}}>♥</Text> by @diaraujo13</Text>
                </View>
              </View>
            </View>
          </View>
      );
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  options_bar: { flex: 2, paddingHorizontal: 10,   justifyContent: "space-between" },
  main_container: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default WordGen;
