import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class GameStatus extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'space-around'}}>
                <Text style={[styles.status, {color: this.props.color}]}>{this.props.status}</Text>
            
                <View style={styles.reset}>
                    <Button title="NEW GAME" color="grey" onPress={this.props.onReset} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    reset: {
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    status: {
        fontSize: 80,
        alignSelf: 'center',
    },

})

