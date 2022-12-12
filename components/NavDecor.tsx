import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavProps {
	scrollToContact: () => void;
}

export const NavDecor = (props: NavProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<div className="w-full bg-gradient-to-r from-brand-bred100 via-brand-bblue100 to-brand-byellow100">
				<div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
					<div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
						<ul className="flex items-center hidden space-x-8 lg:flex">
							<li>
								<Link
									href="/aboutMe"
									aria-label="About Me"
									title="About Me"
									className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
								>
									About Me
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									aria-label="projects"
									title="projects"
									className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/resume.pdf"
									aria-label="Resumé"
									title="Resumé"
									className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
								>
									Resumé
								</Link>
							</li>
						</ul>
						<Link href="/home" aria-label="Home" title="Home">
							<Image
								src="/ByronLewisDotDevLogo.png"
								alt="Logo"
								width={50}
								height={50}
								className="rounded"
							/>
						</Link>
						<ul className="flex items-center hidden space-x-8 lg:flex">
							<li>
								<Link
									href="https://github.com/BLewisDesDev"
									aria-label="Github"
									title="Github"
									className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
								>
									Github
								</Link>
							</li>
							<li>
								<Link
									href="https://www.linkedin.com/in/byron-lewis-979474158/"
									aria-label="LinkedIn"
									title="LinkedIn"
									className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
								>
									LinkedIn
								</Link>
							</li>
							<li>
								<p
									aria-label="Contact"
									title="Contact"
									className="font-medium tracking-wide text-gray-700 transition-colors duration-200 cursor-pointer hover:text-brand-bred"
									onClick={() => props.scrollToContact()}
								>
									Contact
								</p>
							</li>
						</ul>
						<div className="lg:hidden">
							<button
								aria-label="Open Menu"
								title="Open Menu"
								className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
								onClick={() => setIsMenuOpen(true)}
							>
								<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
									/>
									<path
										fill="currentColor"
										d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
									/>
									<path
										fill="currentColor"
										d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
									/>
								</svg>
							</button>
							{isMenuOpen && (
								<div className="absolute top-0 left-0 z-50 w-full">
									<div className="p-5 bg-white border rounded shadow-sm">
										<div className="flex items-center justify-between mb-4">
											<div>
												{/* <Link
											href="/"
											aria-label="ByronLewisDotDev"
											title="ByronLewisDotDev"
											className="inline-flex items-center"
										></Link> */}
											</div>
											<div>
												<button
													aria-label="Close Menu"
													title="Close Menu"
													className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
													onClick={() => setIsMenuOpen(false)}
												>
													<svg
														className="w-5 text-gray-600"
														viewBox="0 0 24 24"
													>
														<path
															fill="currentColor"
															d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
														/>
													</svg>
												</button>
											</div>
										</div>
										<nav>
											<ul className="space-y-4">
												<li>
													<Link
														href="/aboutMe"
														aria-label="About Me"
														title="About Me"
														className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
													>
														About Me
													</Link>
												</li>
												<li>
													<Link
														href="/projects"
														aria-label="Projects"
														title="Projects"
														className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
													>
														Projects
													</Link>
												</li>
												<li>
													<Link
														href="/resume.pdf"
														aria-label="Resumé"
														title="Resumé"
														className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
													>
														Resumé
													</Link>
												</li>
												<li>
													<Link
														href="https://github.com/BLewisDesDev"
														aria-label="Github"
														title="Github"
														className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
													>
														Github
													</Link>
												</li>
												<li>
													<Link
														href="https://www.linkedin.com/in/byron-lewis-979474158/"
														aria-label="LinkedIn"
														title="LinkedIn"
														className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-bred"
													>
														LinkedIn
													</Link>
												</li>
												<li>
													<Link
														href="/contact"
														className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brand-bred hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
														aria-label="Contact"
														title="Contact"
													>
														Contact
													</Link>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
