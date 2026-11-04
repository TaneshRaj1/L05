import React from 'react';
import {View, Text, TextInput,Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import  {useState} from 'react';

//Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
}
const MyApp = () => {

    // Declare variables
    const [name,setName]=useState('');
    const [type, setType]=useState('');
    const [pw, setPw] = useState('john');

    return (
        <View>
            <Text></Text>
            <Text>User Type:</Text>

            {/* Ex1G: Create a TextInput labelled as "User Name".*/}
            {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
            <Picker onValueChange={(value) => setType(value)}
                style={{backgroundColor:'grey'}}>
                <Picker.Item label='Admin' value='Admin'/>
                <Picker.Item label='Guest' value='Guest'/>
            </Picker>

            {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath */}
            <InputBox label="User Name:" onChangeText={(name) => setName(name)}/>
            <InputBox label="Password:" onChangeText={(value) => setPw(value)}/>


            {/* Ex1C: Add a Button with the title "LOG IN".   */}
            {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}
            <Button onPress={()=> Alert.alert("Welcome!")} title="LOG IN"/>

            <Text></Text>

            {/* Ex1E: Add TouchableOpacity labelled as "Alternative LOG IN" with Alert message "Hi hi!" */}
            <TouchableOpacity  onPress={()=> {ToastAndroid.show(pw, ToastAndroid.SHORT)}}>
                <Text>Alternative LOG IN</Text>
                <Text>Entered Password:{pw}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw == correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }
            }>
                <Text>LOG IN</Text>
            </TouchableOpacity>

            {/* Ex1F: change Alert message to Toast message */}

        </View>
    );
};

export default MyApp;
