import { useState } from "react";
import { Checkbox, Icon, Divider } from "react-native-paper";
import { SwipeRow } from 'react-native-swipe-list-view';
import { Alert, TouchableOpacity, Text, View } from "react-native";
import styles from "../styles";

const TodoItem = ({ todo, remove, toggle }) => {
    const [checked, setChecked] = useState(false);

    const removeTodo = () => {
        remove(todo.id);
    };

    const toggleTodo = () => {
        toggle(todo.id);
        setChecked(!checked);
    }

    return (
        <SwipeRow rightOpenValue={-50}>
            <View style={styles.deleteView}>
                <TouchableOpacity
                    style={styles.deleteTouchable}
                    onPress={() =>
                        Alert.alert(
                            'Delete Task?',
                            `Are you sure you want to delete the task "${todo.text}"?`,
                            [
                                {
                                    text: 'Cancel',
                                    style: 'cancel'
                                },
                                {
                                    text: 'OK',
                                    onPress: () =>
                                        removeTodo()
                                }
                            ],
                            { cancelable: false }
                        )
                    }
                >
                    <Text style={styles.deleteText}>
                        <Icon source='delete-outline' size={30} color="white" />
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                {/* Task Display with Category */}
                <View style={styles.taskContainer}>
                    <Checkbox.Item
                        label={todo.text}
                        status={todo.completed ? 'checked' : 'unchecked'}
                        onPress={toggleTodo}
                        style={{ backgroundColor: 'white' }}
                        position="leading"
                        labelStyle={{ textAlign: 'left', paddingLeft: 10 }}
                        labelVariant="titleLarge"
                        color="purple"
                        uncheckedColor="purple"
                    />
                    {todo.category && (  // Display category if it exists
                        <Text style={styles.categoryText}>Category: {todo.category}</Text>
                    )}
                </View>
                <Divider horizontalInset />
            </View>
        </SwipeRow>
    )
}


export default TodoItem;
