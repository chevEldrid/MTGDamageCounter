import React, { Component } from 'react';
import { AppRegistry, View, Button, StyleSheet, Text, Alert } from 'react-native';




export default class App
  extends Component<
    {},
    {
      count1: number,
      count2: number,
      count3: number,
      count4: number
    }
  > {
  state = {
    count1: 40,
    count2: 40,
    count3: 40,
    count4: 40
  };

  render() {
    return (
    <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>    
            <View style={{flex: 1, backgroundColor: 'powderblue'}}>       
                <View style={styles.containerR}>      
                    <Button
                        title=" - "
                        onPress={() => this.setState({ count1: this.state.count1 - 1 })}
                    />             
                   <Text>{this.state.count1}</Text>
                    <Button
                        title=" + "
                        onPress={() => this.setState({ count1: this.state.count1 + 1 })}
                    />   
                </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <View style={styles.containerL}>      
                    <Button
                        title=" - "
                        onPress={() => this.setState({ count2: this.state.count2 - 1 })}
                    />             
                   <Text>{this.state.count2}</Text>
                    <Button
                        title=" + "
                        onPress={() => this.setState({ count2: this.state.count2 + 1 })}
                    />   
                </View>
            </View>
        </View>
        <View style={styles.centered}>
            <Button
                title=" Reset "
                onPress={() => this.setState({ count1: 40, count2: 40, count3: 40, count4: 40})}
            />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={styles.containerR}>      
                    <Button
                        title=" - "
                        onPress={() => this.setState({ count3: this.state.count3 - 1 })}
                    />             
                   <Text>{this.state.count3}</Text>
                    <Button
                        title=" + "
                        onPress={() => this.setState({ count3: this.state.count3 + 1 })}
                    />   
                </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'green'}}>
                <View style={styles.containerL}>      
                    <Button
                        title=" - "
                        onPress={() => this.setState({ count4: this.state.count4 - 1 })}
                    />             
                   <Text>{this.state.count4}</Text>
                    <Button
                        title=" + "
                        onPress={() => this.setState({ count4: this.state.count4 + 1 })}
                    />   
                </View>
            </View>
        </View>
      </View>
        
      /*<View style={styles.container}>
        <Text>{this.state.count}</Text>
        <Button
          title="increase"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
        <Button
          title="decrease"
          onPress={() => this.setState({ count: this.state.count - 1 })}
        />
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  containerR: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '90deg'}],
  },
  containerL: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '270deg'}],
  },
 centered: { 
     
 }
});