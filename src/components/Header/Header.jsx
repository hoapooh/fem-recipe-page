import styles from "./Header.module.css";

function Header() {
	return (
		<header>
			<h1 className={styles.title}>Simple Omelette Recipe</h1>
			<p className={styles.description}>
				An easy and quick dish, perfect for any meal. This classic omelette combines beaten
				eggs cooked to perfection, optionally filled with your choice of cheese, vegetables,
				or meats.
			</p>
			<div className={styles.prepare}>
				<p className={styles["prepare-title"]}>Preparation time</p>
				<ul className={styles["prepare-list"]}>
					<li>
						<span>
							<b>Total:</b> Approximately 10 minutes
						</span>
					</li>
					<li>
						<span>
							<b>Preparation:</b> 5 minutes
						</span>
					</li>
					<li>
						<span>
							<b>Cooking:</b> 5 minutes
						</span>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
