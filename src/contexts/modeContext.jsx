import { createContext, useEffect, useState } from 'react';

const ModeContext = createContext();

const GAME_MODES = { HARD: 'hard', ORIGINAL: 'original' };

export const ModeContextProvider = ({ children }) => {
	const gameMode = localStorage.getItem('gameMode') || GAME_MODES.ORIGINAL;
	const [hardMode, setHardMode] = useState(gameMode === GAME_MODES.HARD);

	useEffect(() => {
		localStorage.setItem('gameMode', hardMode ? GAME_MODES.HARD : GAME_MODES.ORIGINAL);
	}, [hardMode]);

	const toggleMode = () => setHardMode(!hardMode);

	return <ModeContext.Provider value={{ hardMode, toggleMode }}>{children}</ModeContext.Provider>;
};

export default ModeContext;
