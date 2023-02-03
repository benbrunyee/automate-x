<script>
	import Icon from '@iconify/svelte';
	import Button from '../components/Buttons/Button.svelte';

	import Card from '../components/Card.svelte';
</script>

<div
	class="relative flex flex-col items-center justify-center bg-slate-100 px-4 py-4 transition-all duration-500 md:my-0 md:px-5 md:pt-52 md:pb-44"
>
	<div class="flex w-full flex-1 flex-col items-center md:absolute md:-translate-y-[13%]">
		<div class="cards flex w-full flex-1 flex-row gap-4 overflow-x-auto md:gap-10 md:px-10">
			<Card class="w-full md:my-0 md:p-20">
				<Icon
					icon="fluent:lightbulb-16-regular"
					class="flex-1 animate-pulse text-6xl md:text-8xl"
				/>
				<div class="flex-1">
					<h2 class="my-2 text-center">Cost?</h2>
					<p class="text-center">
						There's a free plan for everyone! We also have a paid plan for unrestricted access.
					</p>
				</div>
			</Card>
			<Card class="w-full md:my-0 md:p-20">
				<Icon
					icon="fluent:brain-circuit-20-regular"
					class="animate-wobble flex-1 text-6xl md:text-8xl"
				/>
				<div class="flex-1">
					<h2 class="my-2 text-center">How?</h2>
					<p class="text-center">
						We use web automation technologies to automate frequent tasks that help you save time.
					</p>
				</div>
			</Card>
			<Card class="w-full md:my-0 md:p-20">
				<Icon
					icon="fluent:handshake-16-regular"
					class="animate-small-bounce flex-1 text-6xl md:text-8xl"
				/>
				<div class="flex-1">
					<h2 class="my-2 text-center">Why?</h2>
					<p class="text-center">
						As developers, we know how much time we save by automating tasks. We want to share that
						with you!
					</p>
				</div>
			</Card>
		</div>
		<div class="relative -translate-y-1/4 md:-translate-y-1/2">
			<Button
				href="/"
				text="Get Started!"
				onClick={() => {
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}}
			/>
		</div>
	</div>
</div>

<style>
	.cards :global(.animate-wobble) {
		animation: wobble 2s ease-in-out infinite;
	}

	.cards :global(.animate-small-bounce) {
		animation: small-bounce 1s ease-in-out infinite;
	}

	@keyframes wobble {
		0% {
			transform: translateX(0);
		}
		15% {
			transform: translateX(-5%) rotate(-5deg);
		}
		30% {
			transform: translateX(5%) rotate(3deg);
		}
		45% {
			transform: translateX(-2.5%) rotate(-3deg);
		}
		60% {
			transform: translateX(2.5%) rotate(2deg);
		}
		75% {
			transform: translateX(-1.25%) rotate(-1deg);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes small-bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5%);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
