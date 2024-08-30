import styles from "./Instructions.module.css";

function Instructions() {
	return (
		<div className={styles.instructions}>
			<h2 className={styles["instructions-title"]}>Instructions</h2>
			<ol className={styles["instructions-list"]}>
				<li>
					<span>
						<b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and
						pepper until they are well mixed. You can add a tablespoon of water or milk
						for a fluffier texture.
					</span>
				</li>
				<li>
					<span>
						<b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add
						butter or oil.
					</span>
				</li>
				<li>
					<span>
						<b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in
						the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
					</span>
				</li>
				<li>
					<span>
						<b>Add fillings (optional):</b> When the eggs begin to set at the edges but
						are still slightly runny in the middle, sprinkle your chosen fillings over
						one half of the omelette.
					</span>
				</li>
				<li>
					<span>
						<b>Fold and serve:</b> As the omelette continues to cook, carefully lift one
						edge and fold it over the fillings. Let it cook for another minute, then
						slide it onto a plate.
					</span>
				</li>
				<li>
					<span>
						<b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.
					</span>
				</li>
			</ol>
		</div>
	);
}

export default Instructions;
