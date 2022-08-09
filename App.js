import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import CalModal from './components/CalModal';
import Draggable from 'react-native-draggable';
import CalModal2 from './components/CalModal2';
import { data } from './data/data';

const App = () => {
  const [value, setValue] = useState("0");
  const [value2, setValue2] = useState('0')
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <View style={styles.container}>
      {/* <TextInput value={value} style={styles.TextInput} onPressIn={() => setModal(!modal)} />
      <TextInput value={value2} style={styles.TextInput} onPressIn={() => setModal2(!modal2)} />
      {modal ?
        <Draggable x={50} y={50}>
          <CalModal value={value} setValue={setValue} modal={modal} setModal={setModal} />
        </Draggable>
        : null}

      {modal2 ?
        <Draggable x={50} y={50}>
          <CalModal2 value={value2} setValue={setValue2} modal={modal2} setModal={setModal2} />
        </Draggable>
        : null} */}

      {data.map((item, index) => (
        <View key={index}>
          <Text>{item.firstname}</Text>
          <TextInput value={item.value} style={styles.TextInput} onPressIn={() => setModal2(!modal2)} />
          {modal2 ?
            <>
           
              <Draggable x={50} y={50}>
                <CalModal2 value={item.value} setValue={setValue2} modal={modal2} setModal={setModal2} />
              </Draggable>
            </>
            : null}

        </View>
      ))}
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    height: 36,
    width: 300,
    borderColor: '#000',
    borderWidth: 2,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    fontSize: 26,
    marginTop: 20
  },
})