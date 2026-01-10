export function Welcome({ message }: { message: string }) {
	return (
		<main className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
			<div className="max-w-4xl mx-auto w-full">
				{/* Content Container - Centered */}
				<div className="flex flex-col items-center text-center space-y-12">

					{/* Hero Text */}
					<div className="space-y-6 max-w-3xl">
						<h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900">
							Want to feel this happy on your way to work?
						</h1>

						<p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
							Talk to the people you miss — during the one time you're both actually free
						</p>
					</div>

					{/* CTA Button */}
					<a
						href="https://docs.google.com/forms/d/16pTe4v2piTHc91C5nJntOw5a7eCNyE_P3TxclLrUrK8/viewform?edit_requested=true"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
						style={{ backgroundColor: '#E8744F' }}
						onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D96642'}
						onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E8744F'}
					>
						Join the waiting list
					</a>

					{/* Hero Image - Centered in the middle */}
					<div className="w-full max-w-2xl pt-8">
						<img
							src="/commute_with_connection.jpg"
							alt="A happy person enjoying their commute"
							className="w-full rounded-3xl shadow-2xl"
						/>
					</div>

					{/* Description Text */}
					<div className="max-w-2xl pt-4">
						<p className="text-base md:text-lg text-gray-600 leading-relaxed">
							You want to call them, but they're at work. They want to catch up, but you're sleeping.
							The timing never feels right — until you're both commuting.
						</p>
						<p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">
							<strong className="text-gray-900">LetsRamble</strong> helps you stay meaningfully connected
							with close friends and family across time zones by turning your commute into the moment
							you finally have together.
						</p>
					</div>

				</div>
			</div>
		</main>
	);
}
