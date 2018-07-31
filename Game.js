import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StickBoard from './StickBoard';
import TurnHandler from './TurnHandler';
import GameStatus from './GameStatus';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player1Turn: true,
            total: 20,
            left: 20,
            status: ''
        }
    }

    render() {
        const color = this.state.player1Turn ? 'crimson' : 'dodgerblue';
        return (
            <View style={styles.main}>
                <Text style={styles.title}>STICKS</Text>
                {(this.state.left > 0) &&
                    <React.Fragment>
                        <StickBoard total={this.state.total} left={this.state.left} color={color} />
                        <TurnHandler color={color} left={this.state.left} onTurn={this.handleTurn.bind(this)} />
                    </React.Fragment>
                }
                <GameStatus status={this.state.status} color={color} onReset={this.handleReset.bind(this)} />
            </View>
        )
    }



    handleTurn(value) {
        const newState = {...this.state};
        newState.left -= value;
        newState.player1Turn = !newState.player1Turn;

        if (newState.left === 0) {
            newState.status = (newState.player1Turn ? 'RED' : 'BLUE') + ' WINS!';
        }
        this.setState(newState);
    }

    handleReset() {
        this.setState({
            player1Turn: true,
            total: 20,
            left: 20,
            status: ''
        })
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent:'space-between',
        alignItems: 'stretch',
    },
    title: {
        color: 'white',
        marginTop: 30,
        fontSize: 50,
        fontWeight: '900',
        alignSelf: 'center',
    },
    reset: {
        marginBottom: 30,
        alignSelf: 'center',
    }
});
