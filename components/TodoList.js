// TodoList.js
import { ScrollView, View } from "react-native";
import { Text, Divider, SegmentedButtons } from "react-native-paper";
import { useState, useEffect } from "react";
import { initializeDatabase, fetchTodos, addTodo, removeTodo, toggleTodo } from "../database/Database";
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import styles from "../styles";

const FILTER_MAP = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed,
};

const TodoList = () => {
    const [fancy, setfancy] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        initializeDatabase();  // Initialize the database and create the table
        loadTodos();  // Load existing todos from SQLite
    }, []);

    const loadTodos = async () => {
        try {
            const todos = await fetchTodos();
            setfancy(todos);
        } catch (error) {
            console.log('Error fetching todos:', error);
        }
    };

    const handleAddTodo = async (text, category) => {
        try {
            const newTodo = await addTodo(text, category);
            setfancy(prevfancy => [...prevfancy, newTodo]);
        } catch (error) {
            console.log('Error adding task:', error);
        }
    };

    const handleRemoveTodo = async (id) => {
        try {
            await removeTodo(id);
            setfancy(prevfancy => prevfancy.filter(t => t.id !== id));
        } catch (error) {
            console.log('Error removing task:', error);
        }
    };

    const handleToggleTodo = async (id) => {
        const todo = fancy.find(t => t.id === id);
        const completed = !todo.completed;

        try {
            await toggleTodo(id, completed);
            setfancy(prevfancy => prevfancy.map(t => 
                t.id === id ? { ...t, completed } : t
            ));
        } catch (error) {
            console.log('Error toggling task:', error);
        }
    };

    const taskList = fancy
        .filter(FILTER_MAP[filter])
        .map((todo) => (
            <TodoItem 
                todo={todo}
                key={todo.id}
                remove={handleRemoveTodo}
                toggle={handleToggleTodo}
            />
        ));

    return (
        <View style={{ marginTop: 40, height: '93%' }}>
            <Text variant="headlineSmall" style={styles.heading}>
                What is Up for today?
            </Text>
            <TodoForm addTodo={handleAddTodo} />
            {fancy.length !== 0 
                ? <ScrollView>
                    {taskList}
                  </ScrollView>
                : <ScrollView style={{ paddingTop: 50 }}>
                    <Text variant="titleLarge" style={{ textAlign: 'center' }}>your list is empty</Text>
                  </ScrollView>
            }
            <Divider horizontalInset={true} />
            <View style={styles.bottomBtns}>
                <SegmentedButtons 
                    value={filter}
                    onValueChange={setFilter}
                    theme={{ 
                        colors: { 
                            secondaryContainer: '#DFC5FE' 
                        }
                    }}
                    buttons={[
                        { value: 'All', label: 'All' },
                        { value: 'Active', label: 'Active' },
                        { value: 'Completed', label: 'Completed' },
                    ]}
                />
            </View>
        </View>
    );
};

export default TodoList;
