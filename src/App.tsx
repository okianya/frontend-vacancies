import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './global.css';
import { AppRoutes } from './routes/routes';

function App() {
	return (
		<Provider store={store}>
			<MantineProvider withCssVariables>
				<AppRoutes />
			</MantineProvider>
		</Provider>
	);
}

export default App;
