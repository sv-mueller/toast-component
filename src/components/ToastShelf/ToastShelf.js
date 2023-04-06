import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import useEscapeKey from "../../hooks/useEscapeKey";

function ToastShelf() {
	const { toasts, dismissToast, dismissAll } = React.useContext(ToastContext);
	useEscapeKey(dismissAll);

	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification"
		>
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
