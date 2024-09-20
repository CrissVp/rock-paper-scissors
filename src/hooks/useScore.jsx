import ScoreContext from '../contexts/scoreContext';
import { useCallback, useContext, useEffect } from 'react';

const useScore = () => {
	const { score, dispatch } = useContext(ScoreContext);

	useEffect(() => {
		localStorage.setItem('gameScore', score);
	}, [score]);

	const scoreUp = useCallback(() => dispatch({ type: 'SCORE_UP' }), [dispatch]);

	const scoreDown = useCallback(() => dispatch({ type: 'SCORE_DOWN' }), [dispatch]);

	return { score, scoreUp, scoreDown };
};

export default useScore;
