import { useEffect, useRef, useState } from 'react';
import { checkWinner } from '../../lib/utils';
import useScore from '../../hooks/useScore';

import PickElement from '../PickElement';
import styles from './styles.module.css';

const GameResult = ({ userPick, picks, resetGame }) => {
	const { scoreUp, scoreDown } = useScore();

	const [isWin, setIsWin] = useState();
	const [housePickPreview, setHousePickPreview] = useState({});

	const housePick = useRef({});

	useEffect(() => {
		if (isWin === undefined) {
			const interval = setInterval(() => {
				const pickIndex = Math.floor(Math.random() * picks.length);
				setHousePickPreview(picks[pickIndex]);
				housePick.current = picks[pickIndex];
			}, 100);

			setTimeout(() => {
				clearInterval(interval);
				setIsWin(checkWinner(userPick, housePick.current));
			}, 1500);
		}
	}, [isWin, picks, userPick]);

	useEffect(() => {
		if (isWin !== undefined && isWin !== null) {
			isWin ? scoreUp() : scoreDown();
		}
	}, [isWin, scoreUp, scoreDown]);

	return (
		<section className={styles.result_container}>
			<div className={`${styles.selection} ${isWin ? styles.win_border : ''} `}>
				<span className='barlow-semibold'>YOU PICKED</span>
				<PickElement pick={userPick.key} />
			</div>
			{isWin !== undefined && (
				<div className={styles.game_result}>
					<h2 className='barlow-bold'>
						{isWin === null ? 'DRAW' : isWin ? 'YOU WIN' : 'YOU LOSE'}
					</h2>
					<button onClick={resetGame} className='barlow-semibold'>
						Play Again
					</button>
				</div>
			)}
			<div className={`${styles.selection} ${isWin === false ? styles.win_border : ''} `}>
				<span className='barlow-semibold'>THE HOUSE PICKED</span>
				<PickElement pick={housePickPreview.key} />
			</div>
		</section>
	);
};

export default GameResult;
