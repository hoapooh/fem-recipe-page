import styles from "./Ingredients.module.css";

function Ingredients() {
	return (
		<div className={styles.ingredients}>
			<h2 className={styles["ingredients-title"]}>Ingredients</h2>
			<ul className={styles["ingredients-list"]}>
				<li>
					<span>2-3 large eggs</span>
				</li>
				<li>
					<span>Salt, to taste</span>
				</li>
				<li>
					<span>Pepper, to taste</span>
				</li>
				<li>
					<span>1 tablespoon of butter or oil</span>
				</li>
				<li>
					<span>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span>
				</li>
			</ul>
		</div>
	);
}

export default Ingredients;
