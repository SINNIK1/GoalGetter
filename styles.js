

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    heading: {
        marginBottom: 10,
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 35,
        backgroundColor: '#eb5e28',
        color: 'white',
    },
    bottomBtns: {
        justifyContent: 'center', 
        paddingTop: 20, 
        paddingBottom: 10,
        paddingHorizontal: 15,
    },
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    deleteTouchable: {
        backgroundColor: '#eb5e28',
        height: '100%',
        justifyContent: 'center'
    },
    deleteText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16,
        width: 50
    },
    taskContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
    },
    categoryText: {
        fontSize: 14,
        paddingLeft: 10,
        color: '#888',  // Grey color for category
        fontStyle: 'italic',
    }
});

export default styles;