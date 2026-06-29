import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { VacancyPage } from './pages/VacancyPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './global.css';

function App() {
	return (
		<Provider store={store}>
			<MantineProvider withCssVariables>{<VacancyPage />}</MantineProvider>
		</Provider>
	);
}

export default App;
