import ModeContext from '../contexts/modeContext';
import { useContext } from 'react';

const useGameMode = () => {
	const { hardMode, toggleMode } = useContext(ModeContext);
  
	return { hardMode, toggleMode };
};

export default useGameMode;
