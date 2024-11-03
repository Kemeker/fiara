import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface DropDownProps {
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
    uniqueCategories: string[];
    selectedService: string;
    setSelectedService: (value: string) => void;
    uniqueServices: string[];
}

const DropDown: React.FC<DropDownProps> = ({
    selectedCategory,
    setSelectedCategory,
    uniqueCategories,
    selectedService,
    setSelectedService,
    uniqueServices,
}) => {
    const [isCategoryPickerVisible, setCategoryPickerVisible] = useState(false);
    const [isServicePickerVisible, setServicePickerVisible] = useState(false);

    return (
        <View>
            {/* Seleção de categoria */}
            <TouchableOpacity style={styles.selectBox} onPress={() => setCategoryPickerVisible(true)}>
                <Text style={styles.selectText}>
                    {selectedCategory || 'Selecione uma categoria'}
                </Text>
            </TouchableOpacity>
            <Modal
                visible={isCategoryPickerVisible}
                transparent={false}
                animationType="slide">
                <View style={styles.pickerModal}>
                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue) => {
                            setSelectedCategory(itemValue);
                            setCategoryPickerVisible(false);
                        }}
                    >
                        <Picker.Item label="Selecione uma categoria" value="" />
                        {uniqueCategories.map((category, index) => (
                            <Picker.Item key={index} label={category} value={category} />
                        ))}
                    </Picker>
                    <TouchableOpacity onPress={() => setCategoryPickerVisible(false)}>
                        <Text style={styles.closeButton}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* Seleção de serviço */}
            <TouchableOpacity style={styles.selectBox} onPress={() => setServicePickerVisible(true)}>
                <Text style={styles.selectText}>
                    {selectedService || 'Selecione um serviço'}
                </Text>
            </TouchableOpacity>
            <Modal
                visible={isServicePickerVisible}
                transparent={false}
                animationType="slide">
                <View style={styles.pickerModal}>
                    <Picker
                        selectedValue={selectedService}
                        onValueChange={(itemValue) => {
                            setSelectedService(itemValue);
                            setServicePickerVisible(false);
                        }}
                    >
                        <Picker.Item label="Selecione um serviço" value="" />
                        {uniqueServices.map((service, index) => (
                            <Picker.Item key={index} label={service} value={service} />
                        ))}
                    </Picker>
                    <TouchableOpacity onPress={() => setServicePickerVisible(false)}>
                        <Text style={styles.closeButton}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    selectBox: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 14,
        marginBottom: 16,
        backgroundColor: 'white',
    },
    selectText: {
        fontSize: 16,
        color: '#333',
    },
    pickerModal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    closeButton: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: '#6C63FF',
        padding: 10,
        borderRadius: 8,
    },
});

export default DropDown;
