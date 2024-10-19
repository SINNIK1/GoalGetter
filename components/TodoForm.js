import { useState } from "react";
import { TextInput, Button, Snackbar } from "react-native-paper"; // Added Snackbar for feedback
import { View } from "react-native";


const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');
    const [category, setCategory] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false); // State for Snackbar visibility

    const handleSubmit = () => {
        if (text.trim() === '' || category.trim() === '') {
            setSnackbarVisible(true); // Show Snackbar if input is empty
            return;
        }

        addTodo(text, category);  // Pass both text and category
        setText('');  // Reset the text input
        setCategory('');  // Reset the category input
    };

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <TextInput 
                label='Add task'
                value={text}
                mode="outlined"
                activeOutlineColor="purple"
                onChangeText={text => setText(text)}
                right={
                    <TextInput.Icon 
                        icon='pencil' 
                        onPress={handleSubmit}
                        iconColor='purple'
                    />
                }
                onSubmitEditing={handleSubmit}
                style={{ marginBottom: 10 }}
            />
            <TextInput
                label='Add category'  // New input for category
                value={category}
                mode="outlined"
                activeOutlineColor="purple"
                onChangeText={category => setCategory(category)}
                onSubmitEditing={handleSubmit}
                style={{ marginBottom: 10 }}
            />
            <Button mode="contained" onPress={handleSubmit} buttonColor="purple">
                Add Task
            </Button>

            {/* Snackbar for feedback */}
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000}
                action={{
                    label: 'Close',
                    onPress: () => {
                        setSnackbarVisible(false);
                    },
                }}
            >
                Please fill in both fields!
            </Snackbar>
        </View>
    );
};

export default TodoForm;
