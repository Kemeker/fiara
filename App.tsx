import React from 'react';
import Router from './app/navigation/router';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
    return (
        <PaperProvider>
            <Router />
        </PaperProvider>
    );
}

