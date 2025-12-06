"use client";
import Button from "@/components/Button";
import DesignExample1Image from "@/assets/images/design-example-1.png";
import DesginExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorUImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
	const [leftDesignScope, leftDesignAnimate] = useAnimate();
	const [leftPointerScope, leftPointerAnimate] = useAnimate();
	const [rightDesignScope, rigthDesignAnimate] = useAnimate();
	const [rightPointerScope, rightPointerAnimate] = useAnimate();

	useEffect(() => {
		leftDesignAnimate([
			[leftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
			[leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
		]);
		leftPointerAnimate([
			[leftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
			[leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
			[leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5 }],
		]);
		rigthDesignAnimate([
			[
				rightDesignScope.current,
				{ opacity: [1] },
				{ duration: 0.5, delay: 1.5 },
			],
			[rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
		]);
		rightPointerAnimate([
			[
				rightPointerScope.current,
				{ opacity: [1] },
				{ duration: 0.5, delay: 1.5 },
			],
			[rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
			[rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
		]);
	}, []);

	return (
		<section
			className="py-24 overflow-x-clip"
			style={{ cursor: `url(${cursorUImage.src}), auto` }}
		>
			<div className="container relative">
				<motion.div
					ref={leftDesignScope}
					initial={{ opacity: 0, y: 100, x: -100 }}
					drag
					className="absolute -left-32 top-16 hidden lg:block"
				>
					<Image src={DesignExample1Image} alt="Design 1" draggable="false" />
				</motion.div>
				<motion.div
					ref={leftPointerScope}
					initial={{ opacity: 0, y: 100, x: -200 }}
					className="absolute left-56 top-96 hidden lg:block"
				>
					<Pointer name="Andrea" />
				</motion.div>
				<motion.div
					ref={rightDesignScope}
					initial={{ opacity: 0, y: 100, x: 100 }}
					drag
					className="absolute -right-64 -top-16 hidden lg:block"
				>
					<Image src={DesginExample2Image} alt="Design 2" draggable="false" />
				</motion.div>
				<motion.div
					ref={rightPointerScope}
					initial={{ opacity: 0, x: 275, y: 100 }}
					className="absolute right-80 -top-4 hidden lg:block"
				>
					<Pointer name="Brian" color="red" />
				</motion.div>
				<div className="flex justify-center">
					<div className="inline-flex py-1 px-3 bg-gradient-to-r rounded-full text-neutral-950 font-semibold from-purple-400 to-pink-400">
						✨ $7.5 seed round raised
					</div>
				</div>
				<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
					Impactful design, created effortlessly
				</h1>
				<p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
					Design tools shouldn't show you down. Layers combined powerful
					features with an intuitive interface that keeps you in your creative
					flow.
				</p>
				<form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
					<input
						className="bg-transparent px-4 md:flex-1 outline-none w-full"
						type="email"
						placeholder="Enter your email"
					/>
					<Button
						size="sm"
						variant="primary"
						type="submit"
						className="whitespace-nowrap"
					>
						Sign Up
					</Button>
				</form>
			</div>
		</section>
	);
}
