import { HarderPicks, OriginalPicks } from '../../lib/constants';
import useGameMode from '../../hooks/useGameMode';
import { useState } from 'react';

import PickElement from '../PickElement';
import GameResult from '../GameResult';
import styles from './styles.module.css';

const GameContent = () => {
	const { hardMode } = useGameMode();
	const [userPick, setUserPick] = useState({});
	const picks = hardMode ? Object.values(HarderPicks) : Object.values(OriginalPicks);

	if (userPick.key)
		return <GameResult userPick={userPick} picks={picks} resetGame={() => setUserPick({})} />;

	return (
		<section className={styles.game_container}>
			<div
				className={`${styles.original_mode_container} ${
					hardMode ? styles.hard_mode_container : ''
				}`}
			>
				{picks.map((pick) => (
					<PickElement handleClick={() => setUserPick(pick)} pick={pick.key} key={pick.key} />
				))}
			</div>
		</section>
	);
};

export default GameContent;
