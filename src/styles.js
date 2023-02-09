import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        // justifyContent: 'space-between',
        alignItems: 'center',
        height: '8%',
        width: '100%',
        borderBottomWidth: 1,
        backgroundColor: '#113795'
    },
    headerText: {
        flex: 8,
        alignItems: 'center'
    },
    headerCartRightIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    button: {
        margin: 5,
        paddingHorizontal: 30,
        padding: 10,
        backgroundColor: '#113795',
        borderRadius: 15,
    },
    itemCard: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        elevation: 4
    },
    mediumText: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center'
    },
    itemContainer: {
        borderRadius: 10,
        width: '45%',
        backgroundColor: 'white',
        margin: 10,
        elevation: 4
    },
    itemImage: {
        flex: 0.7,
        height: 100,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    itemDetailsContainer: {
        flex: 0.3,
        padding: 10,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemPrice: {
        color: 'gray',
        fontSize: 16,
    },
})