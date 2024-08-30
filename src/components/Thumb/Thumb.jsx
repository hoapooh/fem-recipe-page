import styles from "./Thumb.module.css";
import thumbImage from "../../assets/images/image-omelette.jpeg";

function Thumb() {
	return (
		<figure className={styles.figure}>
			<img src={thumbImage} alt="Omelette delicious" className={styles.thumb} />
		</figure>
	);
}

export default Thumb;
