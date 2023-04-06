import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	function addToast(message, variant) {
		setToasts([...toasts, { message, variant, id: crypto.randomUUID() }]);
	}

	function dismissToast(id) {
		setToasts(toasts.filter((toast) => toast.id !== id));
	}

	function dismissAll() {
		setToasts([]);
	}

	return (
		<ToastContext.Provider
			value={{ addToast, dismissToast, dismissAll, toasts }}
		>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
