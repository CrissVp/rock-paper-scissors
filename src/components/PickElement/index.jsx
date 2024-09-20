import useGameMode from '../../hooks/useGameMode';
import styles from './styles.module.css';

const PickElement = ({ pick, handleClick }) => {
	const { hardMode } = useGameMode();

	if (!pick) return null;

	return (
		<button
			onClick={handleClick}
			className={`${styles.element_container} ${styles[`${pick}_element`]} ${
				hardMode ? styles[`hard_mode_${pick}_element`] : ''
			}`}
		>
			<div className={styles.pick_element}>
				<img src={`icon-${pick}.svg`} alt='' />
			</div>
		</button>
	);
};

export default PickElement;
