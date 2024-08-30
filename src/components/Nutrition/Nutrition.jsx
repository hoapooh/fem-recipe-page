import styles from "./Nutrition.module.css";

function Nutrition() {
	return (
		<div className={styles.nutrition}>
			<h2 className={styles["nutrition__title"]}>Nutrition</h2>
			<p>
				The table below shows nutritional values per serving without the additional
				fillings.
			</p>
			<table className={styles.table}>
				<tbody className={styles.tbody}>
					<tr className={styles["nutrition__table__item"]}>
						<td></td>
						<td>Calories</td>
						<td>
							<span>277kcal</span>
						</td>
					</tr>
					<tr className={styles["nutrition__table__item"]}>
						<td></td>
						<td>Carbs</td>
						<td>
							<span>0g</span>
						</td>
					</tr>
					<tr className={styles["nutrition__table__item"]}>
						<td></td>
						<td>Protein</td>
						<td>
							<span>20g</span>
						</td>
					</tr>
					<tr className={styles["nutrition__table__item"]}>
						<td></td>
						<td>Fat</td>
						<td>
							<span>22g</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Nutrition;
