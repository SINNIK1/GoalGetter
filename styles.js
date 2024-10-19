import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    heading: {
        marginBottom: 10,
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 35,
        backgroundColor: 'purple',
        color: 'white',
        borderRadius: 10, // Rounded edges
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3, // For Android
    },
    bottomBtns: {
        justifyContent: 'center', 
        paddingTop: 25, 
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10, // Rounded edges
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android
    },
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    deleteTouchable: {
        backgroundColor: 'purple',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10, // Rounded edges
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android
    },
    deleteText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16,
        width: 50,
    },
    taskContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderRadius: 10, // Rounded edges
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android
    },
    categoryText: {
        fontSize: 14,
        paddingLeft: 10,
        color: 'black',  // Grey color for category
        fontStyle: 'bold',
        textShadowColor: '#000', // Shadow color for text
        textShadowOffset: { width: 1, height: 1 }, // Shadow offset
        textShadowRadius: 1, // Shadow radius
    }
});

export default styles;
