import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

export default class Alpha extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.total}>0</Text>
                </View>
                <View style={[styles.bottom, styles.row]}>
                    <View style={styles.dark}>
                        <View style={styles.row}>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>7</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>8</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>9</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.row}>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>4</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>5</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>6</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.row}>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>1</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>2</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>3</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.row}>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>.</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#535353" onPress={this.numberPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>0</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#535353" onPress={this.opeartionPressed} style={styles.inputPadding}>
                                <Text style={styles.input}>=</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.light}>
                        <TouchableHighlight underlayColor="#696969" onPress={this.opeartionPressed} style={styles.operationPadding}>
                            <Text style={styles.operation}>DEL</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#696969" onPress={this.opeartionPressed} style={styles.operationPadding}>
                            <Text style={styles.operation}>%</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#696969" onPress={this.opeartionPressed} style={styles.operationPadding}>
                            <Text style={styles.operation}>X</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#696969" onPress={this.opeartionPressed} style={styles.operationPadding}>
                            <Text style={styles.operation}>+</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#696969" onPress={this.opeartionPressed} style={styles.operationPadding}>
                            <Text style={styles.operation}>-</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
    numberPressed() {
        console.log("number");
    }
    opeartionPressed() {
        console.log("operation");
    }
}

const styles = StyleSheet.create({
    dark: {
        backgroundColor: '#454545'
    },
    light: {
        backgroundColor: '#636363'
    },
    inputPadding: {
        alignItems: 'center',
        borderRadius: 47,
        height: 94,
        justifyContent: 'center',
        width: 94
    },
    input: {
        fontSize: 32,
        color: '#FFFFFF'
    },
    operationPadding: {
        alignItems: 'center',
        borderRadius: 39,
        height: 78,
        justifyContent: 'center',
        width: 78
    },
    operation: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    top: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    bottom: {
        flex: 0.7
    },
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    total: {
        color: '#747474',
        fontSize: 64,
        padding: 16
    }
});