import { createContext, useReducer } from 'react';

const ScoreContext = createContext();

const scoreReducer = (state, action) => {
	switch (action.type) {
		case 'SCORE_UP':
			return state + 1;
		case 'SCORE_DOWN': {
			if (state > 0) return state - 1;
			return state;
		}
		default:
			return state;
	}
};

export const ScoreContextProvider = ({ children }) => {
	const savedScore = localStorage.getItem('gameScore');
	const [score, dispatch] = useReducer(scoreReducer, +savedScore || 0);

	return <ScoreContext.Provider value={{ score, dispatch }}>{children}</ScoreContext.Provider>;
};

export default ScoreContext;
