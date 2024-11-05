import { StyleSheet } from 'react-native';

// AppBar
export const AppBarStyles = StyleSheet.create({
    header: {
        backgroundColor: '#3c2d91',
        borderRadius: 8,
    },
    avatar: {
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#FFD700',
    },
});

// DataHora
export const DataHoraStyles = StyleSheet.create({
    timeInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 14,
        marginTop: 12,
        marginBottom: 24,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 16,
        color: '#333',
    },
}); 