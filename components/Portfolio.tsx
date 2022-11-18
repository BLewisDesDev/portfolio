import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Portfolio = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
	});
	return (
		<>
			<div ref={ref}>
				<h2>{`Header inside viewport ${inView}.`}</h2>
			</div>
		</>
	);
};
