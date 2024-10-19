import TodoList from './components/TodoList';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';  // Import Provider // Assuming TodoList is your main component

const App = () => {
    return (
        <PaperProvider>
            <TodoList />
        </PaperProvider>
    );
};

export default App;


