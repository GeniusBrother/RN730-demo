import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import ScrollableTabView, { ScrollableTabBar } from './react-native-scrollable-tab-view';
import TabList from './tabList';


class Index extends React.Component {
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
        for(let i = 0; i < 6; i++) {
            list.push({name: `第${i}tab`, id: i})
        }
        this.setState({
            list: list,
        })
    }

    render() {
        // const { checked, list } = this.state;
        const list = [];
        for(let i = 0; i < 6; i++) {
            list.push({name: `第${i}tab`, id: i})
        }
        return (
                <View style={{flex: 1, top: 100}}>
                    <Text>1111222</Text>
                    <ScrollableTabView
                    prerenderingSiblingsNumber={list.length}
                            renderTabBar={() => <ScrollableTabBar />}
                            >
                        {
                            list.map(item => (
                                <TabList tabLabel={item.name} name={item.name} id={item.id} key={item.id}/>
                            ))
                        }
                        
                    </ScrollableTabView>
                </View>
        );
    }
}

export default Index;
