import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
	const { toasts, dismissToast, dismissAll } = React.useContext(ToastContext);

	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === "Escape") {
				dismissAll();
			}
		}
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [dismissAll]);

	return (
		<ol className={styles.wrapper}>
			{toasts.map(({ message, variant, id }) => (
				<li className={styles.toastWrapper} key={id}>
					<Toast variant={variant} dismissToast={() => dismissToast(id)}>
						{message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
