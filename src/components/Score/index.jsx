import useGameMode from '../../hooks/useGameMode';
import useScore from '../../hooks/useScore';
import styles from './styles.module.css';

const Score = () => {
	const { score } = useScore();
	const { hardMode } = useGameMode();

	return (
		<div className={styles.score_container}>
			{hardMode ? (
				<img src='logo-bonus.svg' alt='Logo Img' />
			) : (
				<img src='logo.svg' alt='Logo Img' />
			)}
			<div className={styles.score_count}>
				<h4 className='barlow-semibold'>SCORE</h4>
				<p className='barlow-bold'>{score}</p>
			</div>
		</div>
	);
};

export default Score;
