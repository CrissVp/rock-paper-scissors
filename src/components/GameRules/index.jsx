import useGameMode from '../../hooks/useGameMode';
import { useState } from 'react';

import Button from '../Button';
import styles from './styles.module.css';

const GameRules = () => {
	const { hardMode } = useGameMode();
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<Button handleClick={() => setModalVisible(true)}>RULES</Button>
			{modalVisible && (
				<div className={styles.modal_container}>
					<section className={styles.rules_modal}>
						<h4 className='barlow-semibold'>RULES</h4>
						<button onClick={() => setModalVisible(false)}>
							<img src='icon-close.svg' alt='Icon Close' />
						</button>
						<div className={styles.modal_content}>
							{hardMode ? (
								<img src='image-rules-bonus.svg' alt='Rules Image' />
							) : (
								<img src='image-rules.svg' alt='Rules Image' />
							)}
						</div>
					</section>
				</div>
			)}
		</>
	);
};

export default GameRules;
