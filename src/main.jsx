import { ScoreContextProvider } from './contexts/scoreContext.jsx';
import { ModeContextProvider } from './contexts/modeContext.jsx';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<ScoreContextProvider>
		<ModeContextProvider>
			<App />
		</ModeContextProvider>
	</ScoreContextProvider>
);

