import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { store } from './app/store';
import { client } from './shared/api/graphql';
import App from './app/App';

import './app/styles/global.css';
import ErrorBoundary from "./shared/lib/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
        </ErrorBoundary>
    </React.StrictMode>
);
