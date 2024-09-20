export const checkWinner = (userPick, housePick) => {
	if (userPick.key === housePick.key) return null; // If there is a draw
	return userPick.beats.includes(housePick.key);
};
