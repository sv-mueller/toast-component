import React from "react";

function useEscapeKey(onEscape) {
	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === "Escape") {
				onEscape();
			}
		}
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onEscape]);

	return onEscape;
}

export default useEscapeKey;
