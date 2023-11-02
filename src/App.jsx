import { registerLocale } from 'react-datepicker';
import ru from "date-fns/locale/ru";
import { Container } from '@mui/system';

import ThemeProvider from './theme';
import AppError from './containers/AppError';
import AppLoading from './containers/AppLoading';
import SuccessPage from './containers/SuccessPage';
import FormCandidate from './containers/FormCandidate';

registerLocale("ru", ru);

function App() {
	return (
		<ThemeProvider>
			<Container maxWidth="md">
				<FormCandidate />
				<SuccessPage />
				<AppLoading />
				<AppError />
			</Container>
		</ThemeProvider>
	);
}

export default App;
