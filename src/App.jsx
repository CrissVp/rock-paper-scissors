import GameContent from './components/GameContent';
import ModeToggle from './components/ModeToggle';
import GameRules from './components/GameRules';
import Score from './components/Score';
import './App.css';

function App() {
	return (
		<main className='app_container'>
			<Score />
			<GameContent />
			<ModeToggle />
			<GameRules />
		</main>
	);
}

export default App;

