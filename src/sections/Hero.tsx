import Button from "@/components/Button";
import DesignExample1Image from "@/assets/images/design-example-1.png";
import DesginExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
	return (
		<section className="py-24 overflow-x-clip">
			<div className="container relative">
				<div className="absolute -left-32 top-16 hidden lg:block">
					<Image src={DesignExample1Image} alt="Design 1" />
				</div>
				<div className="absolute -right-64 -top-16 hidden lg:block">
					<Image src={DesginExample2Image} alt="Design 2" />
				</div>
				<div className="absolute left-56 top-96 hidden lg:block">
					<Pointer name="Andrea" />
				</div>
				<div className="absolute right-80 -top-4 hidden lg:block">
					<Pointer name="Brian" color="red" />
				</div>
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
						className="bg-transparent px-4 md:flex-1 outline-none "
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
