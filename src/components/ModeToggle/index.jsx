import useGameMode from '../../hooks/useGameMode';
import Button from '../Button';

const ModeToggle = () => {
	const { hardMode, toggleMode } = useGameMode();

	return <Button handleClick={toggleMode}>{hardMode ? 'ORIGINAL MODE' : 'HARD MODE'}</Button>;
};

export default ModeToggle;
