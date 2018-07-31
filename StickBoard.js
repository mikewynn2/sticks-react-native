import React from 'react';
import { Text, View } from 'react-native';

export default class StickBoard extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    fontSize: 80,
                    color: this.props.color,
                    fontWeight: '100'
                }}>{'|'.repeat(this.props.left)}</Text>
            </View>
        );
    }
}
