import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Typewriter = () => {
	const [text, counter] = useTypewriter({
		words: ["Hi, I'm Byron", "i-develop-web-apps.tsx", "<iLoveToCode />"],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<>
			<div className="flex items-center justify-center py-28">
				<h1 className="text-6xl">
					<strong>
						{text}
						<Cursor cursorColor="#C72C3D" />
					</strong>
				</h1>
			</div>
		</>
	);
};

export default Typewriter;
