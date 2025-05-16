import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider, Container, Title } from '@mantine/core';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Dashboard from './pages/Dashboard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Container>
            <Title align="center">Smart Factory Dashboard</Title>
            <Dashboard />
          </Container>
        </MantineProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
