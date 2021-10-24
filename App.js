import React, { useState } from 'react';
import { FlatList, StyleSheet, View, StatusBar, SafeAreaView, Pressable, Text } from 'react-native';
import GoalInput from './components/GoalInput';
import ListItem from './components/ListItem';

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  const handleDelete =(id)=>{
    setCourseGoals(currentGoal=>{
      let oldList  = [...currentGoal];
      let index = oldList.findIndex(goal=> goal.id === id);
      if(index !== -1) {
        oldList.splice(index, 1);
      }
      return oldList;
    })
  }

  const addGoalHandler = () => {
    setCourseGoals(previousGoals => [...previousGoals, { id: Math.random().toString(), title: enteredGoal }])
    setIsModalOpen(false);
    setEnteredGoal("")
  }

  const renderItem = ({ item }) => <ListItem title={item.title} onDelete={()=>handleDelete(item.id)} />


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Pressable onPress={()=> setIsModalOpen(true)} style={styles.modalButton} >
          <Text style={styles.textStyle}> Add New Goal</Text>
        </Pressable>
        <GoalInput
        modalVisible={isModalOpen}
        onModalClose={()=> setIsModalOpen(false)}
          onTextChange={goalInputHandler}
          textValue={enteredGoal}
          onAddToList={addGoalHandler} />
        {!!courseGoals.length && (<FlatList data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem} />)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  screen: {
    padding: 20,
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor:"rgba(62, 121, 247, .7)",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },


});
