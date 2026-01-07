export function Welcome({ message }: { message: string }) {
	return (
		<main className="flex items-center justify-center pt-16 pb-8">
			<div className="flex-1 flex flex-col items-center gap-10 min-h-0 px-4">
				{/* Hero Image */}
				<img
					src="/commute_with_connection.jpg"
					alt="A happy person enjoying their commute"
					className="w-full max-w-xl rounded-2xl shadow-lg"
				/>

				{/* Caption & Copy */}
				<div className="text-center space-y-4 max-w-2xl">
					<h1 className="text-2xl font-semibold">
						Want to feel this happy on your way to work?
					</h1>

					<p className="text-muted-foreground">
						If so, please subscribe to the waiting list for{" "}
						<strong>LetsRamble</strong>!
					</p>

					<p className="text-sm text-muted-foreground">
						LetsRamble is a work-in-progress app that helps you stay meaningfully
						connected with close friends and family — primarily while commuting.
					</p>
				</div>

				{/* Call to Action */}
				<a
					href="https://docs.google.com/forms/d/16pTe4v2piTHc91C5nJntOw5a7eCNyE_P3TxclLrUrK8/viewform?edit_requested=true"
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm bg-black text-white hover:opacity-90 transition"
				>
					Join the waiting list
				</a>

			</div>
		</main>
	);
}
