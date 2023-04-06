import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf/ToastShelf";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const { addToast } = React.useContext(ToastContext);
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
	const messageRef = React.useRef();

	function handleSubmit(event) {
		event.preventDefault();
		addToast(message, variant);
		setMessage("");
		setVariant(VARIANT_OPTIONS[0]);
		messageRef.current.focus();
	}

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf />

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: "baseline" }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							ref={messageRef}
							className={styles.messageInput}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					{VARIANT_OPTIONS.map((variantOption) => (
						<div
							className={`${styles.inputWrapper} ${styles.radioWrapper}`}
							key={variantOption}
						>
							<label htmlFor={`variant-${variantOption}`}>
								<input
									id={`variant-${variantOption}`}
									type="radio"
									name="variant"
									value={variantOption}
									checked={variantOption === variant}
									onChange={(e) => setVariant(e.target.value)}
								/>
								{variantOption}
							</label>
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default ToastPlayground;
