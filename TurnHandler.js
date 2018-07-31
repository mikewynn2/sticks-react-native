import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class TurnHandler extends React.Component {
    render() {
        let title = null;
        if (this.props.left > 0) {
            title = (<Text style={styles.turnTitle}>
                {'Player' + (this.props.color === 'crimson' ? ' RED' : ' BLUE') + ', It\'s Your Turn'}</Text>
            );
        }
        return(
            <View style={styles.status}>
                {title}
                <View style={styles.buttonHolder}>
                    {(this.props.left > 0) &&
                    <View style={styles.button}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: this.props.color}]} onPress={() => {
                            this.handleClick(1)
                        }} >
                            <Text style={{fontSize: 50, color: 'white', fontWeight: '900', textAlign: 'center'}}>
                                1
                            </Text>
                        </TouchableOpacity>
                    </View>
                    }
                    {(this.props.left > 1) &&
                    <View style={styles.button}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: this.props.color}]} onPress={() => {
                            this.handleClick(2)
                        }} >
                            <Text style={{fontSize: 50, color: 'white', fontWeight: '900', textAlign: 'center'}}>
                                2
                            </Text>
                        </TouchableOpacity>
                    </View>
                    }
                    {(this.props.left > 2) &&
                    <View style={styles.button}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: this.props.color}]} onPress={() => {
                            this.handleClick(3)
                        }} >
                            <Text style={{fontSize: 50, color: 'white', fontWeight: '900', textAlign: 'center'}}>
                                3
                            </Text>
                        </TouchableOpacity>
                    </View>
                    }
                </View>
            </View>
        )
    }
    handleClick(value) {
        this.props.onTurn(value);
    }
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        justifyContent: 'center',

    },
    turnTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: '900',
        alignSelf: 'center',
        marginBottom: 10,
    },
    status: {
        flex: 1,
        justifyContent: 'space-evenly',
    },

    buttonHolder: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }

})
