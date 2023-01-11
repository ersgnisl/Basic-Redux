import React from "react";
import {View,Button,Text,StyleSheet} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {increaseNumber,decreaseNumber} from "../redux/actions/NumberAction";

function NumberProcess (){
const dispacth = useDispatch();
const state = useSelector((state) => state);
console.log(state);

return (
    <>
<View
style = {{
    flexWrap: "wrap",
    flexDirection : "row",
    justifyContent: "center",
    alignItems: "center",
}}>
    <Button title="-" onPress={()=> dispacth(decreaseNumber())}/>
    <Text>{state.counter}</Text>
    <Button title="+" onPress={()=> dispacth(increaseNumber())}/>


</View>
</>
);
}
export default NumberProcess;