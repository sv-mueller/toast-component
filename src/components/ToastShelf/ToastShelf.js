import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
	const { toasts, dismissToast } = React.useContext(ToastContext);

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
