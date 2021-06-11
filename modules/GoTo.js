import { useEffect, useRef } from "react";
import { addScrollEvent } from "../utils/addScrollEvent";

export default function GoTo({ subclass, theme, style, animate, text }) {
	const gotoEl = useRef();

	useEffect(() => {
		if (animate) {
			addScrollEvent(gotoEl.current);
		}
	}, [animate]);

	return (
		<div
			ref={gotoEl}
			className={`${subclass || ""} ${theme || "light"} goto`}
			style={style || {}}>
			<span>{text ? text : ""}</span>
			<img
				src={`/icons/arrow-2-right-long${theme === "dark" ? "-white" : ""}.svg`}
				alt="got to arrow"
			/>
		</div>
	);
}
