export const OriginalPicks = {
	SCISSORS: {
		key: 'scissors',
		beats: ['paper', 'lizard']
	},
	PAPER: {
		key: 'paper',
		beats: ['rock', 'spock']
	},
	ROCK: {
		key: 'rock',
		beats: ['scissors', 'lizard']
	}
};

export const HarderPicks = {
	...OriginalPicks,
	LIZARD: {
		key: 'lizard',
		beats: ['paper', 'spock']
	},
	SPOCK: {
		key: 'spock',
		beats: ['scissors', 'rock']
	}
};
