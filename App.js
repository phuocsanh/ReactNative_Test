/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {DragSortableView} from 'react-native-drag-sort';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DragItem from './src/components/DragItem';
import SortableListView from './src/components/SortableListView';
const {width} = Dimensions.get('window');

const parentWidth = width;
const childrenWidth = width;
const childrenHeight = 48;

const data = [
  {title: 'item 1'},
  {title: 'item 2'},
  {title: 'item 3'},
  {title: 'item 4'},
];
const App = () => {
  const sortableViewRef = useRef();
  const isDarkMode = useColorScheme() === 'dark';
  const [state, setState] = useState(true);
  const [dataNew, setData] = useState(true);

  const renderItem = (item, index) => {
    return (
      <View style={{paddingHorizontal: 30, flex: 1, backgroundColor: 'red'}}>
        <Text
          style={{
            width: parentWidth - 60,
            height: 50,
            backgroundColor: 'green',
            marginTop: 10,
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ScrollView ref={sortableViewRef} scrollEnabled={state}>
        <DragSortableView
          dataSource={data}
          parentWidth={parentWidth}
          childrenWidth={childrenWidth}
          childrenHeight={childrenHeight}
          scaleStatus={'scaleY'}
          keyExtractor={(item, index) => item.title}
          onDragStart={(startIndex, endIndex) => {
            setState(false);
          }}
          onDragEnd={startIndex => {
            setState(true);
          }}
          onDataChange={data1 => {
            if (data1.length != data.length) {
              setData(data1);
            }
          }}
          // delayLongPress={1000}
          onClickItem={(data, item, index) => {}}
          renderItem={(item, index) => {
            return renderItem(item, index);
          }}
        />
      </ScrollView> */}
      <DragItem />
      {/* <SortableListView /> */}
    </SafeAreaView>
  );
};

export default App;
