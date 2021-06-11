import { useEffect, useRef, useState } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import styles from "../../styles/Hero.module.css";
import Slider from "../Slider";

export default function Hero() {
	const section = useRef();
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		function getProjects() {
			fetch("/api/getProjects")
				.then(res => res.json())
				.then(data => setProjects(data))
				.catch(err => console.error(err));
		}
		getProjects();

		addScrollEvent(section.current, 500);
	}, []);

	return (
		<section className={`${styles.hero} section`}>
			<div className={styles.content} ref={section}>
				<div className={styles.title}>
					<h1>
						<span className={styles.title_project}>project</span>
						<br />
						<span className={styles.title_nurtown}>nurtown</span>
					</h1>
				</div>
				{/* <div className={styles.slider_controls}>
          <div className={styles.arrows} />
          <div className={styles.number} />
        </div> */}
			</div>
			{/* <Slider data={data}/> */}
		</section>
	);
}
