import styles from './styles.module.css';

const Button = ({ children, handleClick }) => {
	return (
		<button className={`${styles.button} barlow-semibold`} onClick={handleClick}>
			{children}
		</button>
	);
};

export default Button;
