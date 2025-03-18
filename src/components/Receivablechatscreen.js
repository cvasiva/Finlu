import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Receivablechatscreen = ({ navigation }) => {
    const invoices = [
        {
            id: '1',
            amount: '₹190',
            description: '7 Carbon filters, 12 Solnot valve',
            time: '03:22 PM',
            image: null,
        },
        {
            id: '2',
            amount: '₹190',
            description: '7 Carbon filters, 12 Solnot valve',
            time: '03:22 PM',
            image: 'https://via.placeholder.com/100', // Placeholder Image URL
        },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={22} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Business name</Text>
                <Icon name="check-circle" size={16} color="white" />
            </View>

            {/* Date */}
            <Text style={styles.dateText}>Jan 09</Text>

            {/* Invoices List */}
            <FlatList
                data={invoices}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.invoiceCard}>
                        <View style={styles.invoiceHeader}>
                            <Text style={styles.amountText}>{item.amount}</Text>
                            <TouchableOpacity>
                                <Icon name="chevron-right" size={16} color="gray" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.descriptionText}>For • {item.description}</Text>
                        <View style={styles.creditStatus}>
                            <Icon name="check-circle" size={14} color="green" />
                            <Text style={styles.creditText}>In Credit</Text>
                            <Text style={styles.timeText}> | {item.time}</Text>
                        </View>
                        {item.image && (
                            <Image source={{ uri: item.image }} style={styles.invoiceImage} />
                        )}
                    </View>
                )}
            />

            {/* Today's Chat */}
            <Text style={styles.dateText}>Today</Text>
            <View style={styles.chatBubble}>
                <Text style={styles.chatText}>Hey</Text>
                <Text style={styles.chatTime}>08:30 ✓✓</Text>
            </View>

            {/* Total Outstanding Balance */}
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceText}>Total Outstanding Balance</Text>
                <Text style={styles.balanceAmount}>₹520</Text>
            </View>

            {/* Message Input & Pay Button */}
            <View style={styles.messageContainer}>
                <TouchableOpacity style={styles.payButton}>
                    <Text style={styles.payText}>Pay</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message"
                />
                <TouchableOpacity>
                    <Icon name="paper-plane" size={22} color="green" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00753A',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    dateText: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 14,
        color: 'gray',
    },
    invoiceCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 10,
        elevation: 2,
    },
    invoiceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amountText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    descriptionText: {
        fontSize: 14,
        color: 'gray',
        marginVertical: 5,
    },
    creditStatus: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    creditText: {
        color: 'green',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    timeText: {
        color: 'gray',
        fontSize: 12,
        marginLeft: 5,
    },
    invoiceImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginTop: 10,
    },
    chatBubble: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    chatText: {
        fontSize: 16,
    },
    chatTime: {
        fontSize: 12,
        color: 'gray',
        alignSelf: 'flex-end',
    },
    balanceContainer: {
        backgroundColor: '#00753A',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    balanceText: {
        fontSize: 16,
        color: 'white',
    },
    balanceAmount: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    payButton: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginRight: 10,
    },
    payText: {
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 8,
    },
});

export default Receivablechatscreen;
