import React, { useState } from 'react';
import { Appbar, Menu, Divider, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AppBarStyles as styles } from '../style/components';

interface AppBarProps {
    title: string;
    subtitle: string;
}

const AppBar: React.FC<AppBarProps> = ({ title, subtitle }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const navigation = useNavigation();

    return (
        <Appbar.Header style={styles.header}>
            <Avatar.Image size={50} source={require('../assets/images/F.png')} style={styles.avatar} />

            <Appbar.Content
                title={title}
                subtitle={subtitle}
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
            />



            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchor={<Appbar.Action icon="menu" color="white" onPress={openMenu} />}
            >

                <Menu.Item onPress={() => navigation.navigate('MeusAtendimentos')} title="Atendimentos" />
                <Divider />
                <Menu.Item onPress={() => console.log('Perfil')} title="perfil" />
                <Menu.Item onPress={() => console.log('Configurações')} title="Configurações" />
                <Menu.Item onPress={() => console.log('Logout')} title="Logout" />
            </Menu>
        </Appbar.Header>
    );
};



export default AppBar;
