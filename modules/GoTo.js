import { useEffect, useRef } from "react";
import { addScrollEvent } from "../utils/addScrollEvent";

export default function GoTo({
	subclass,
	theme,
	style,
	animate,
	text,
	handleClick,
}) {
	const goTo = useRef();

	useEffect(() => {
		if (animate) {
			addScrollEvent(goTo.current);
		}
	}, [animate]);

	return (
		<div
			ref={goTo}
			className={`${subclass || ""} ${theme || "light"} goto`}
			style={style || {}}
			onClick={handleClick}>
			<span>{text ? text : ""}</span>
			<img
				src={`/icons/arrow-2-right-long${theme === "dark" ? "-white" : ""}.svg`}
				alt="got to arrow"
			/>
		</div>
	);
}
