import React from "react";
import { View, ScrollView, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";

class TabList extends React.Component {
    constructor(props) {
        super(props);
        this.page = 'edit';
        this.state = {
            initialList: [],
            checked: [],
            list: []
        };
    }


    async componentDidMount() {
        const { index, name } = this.props;
        const list = [];
        for(let i = 0; i < 200; i++) {
            list.push({name: `${name}_${i}`})
        }
        this.setState({
            list: list,
        })
    }

    render() {
        const { list } = this.state;
        return (
            <View style={styles.section}>
                <ScrollView style={styles.main} >
                    {list.map((item, index) => {
                        return (
                            <View key={item.name}>
                                <Text>{item.name}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
    //   borderColor: 'red',
    //   borderWidth: 2
    },
    section: {
      flex: 1
    },
  });

export default TabList;
