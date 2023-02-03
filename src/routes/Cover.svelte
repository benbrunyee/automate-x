<script lang="ts">
	import Icon from '@iconify/svelte';

	import Button from '../components/Buttons/Button.svelte';
	import { handleScroll } from '../util/util';

	export let isScrolled = false;
</script>

<div
	class="flex flex-col items-center justify-center p-10 px-6 md:flex-row md:p-0 md:px-40 md:pb-20 md:pt-10"
>
	<div
		class={`z-10 flex flex-col items-center justify-center transition-all duration-500 ease-out md:flex-1 md:items-start ${
			isScrolled ? 'invert' : ''
		}`}
	>
		<h1
			class="select-none text-center text-5xl leading-[0.9] tracking-tighter md:text-left md:text-8xl"
		>
			Automate X...<br />With Ease
		</h1>
		<div class="mt-4 flex flex-col items-center md:flex-row">
			<Button
				onClick={(e) => handleScroll(e, '#whats-possible')}
				text="What's Possible?"
				class="mb-2 md:mr-4 md:mb-0"
			/>
			<Button href="/" text="Get Started!" />
			<div class="mt-2 flex md:mt-0">
				<Icon
					icon="ph:arrow-arc-left-light"
					class="ml-4 hidden translate-y-1/2 scale-x-125 -scale-y-100 text-4xl md:block"
				/>
				<span class="md:-translate-x-[20px]">No Card Required!</span>
			</div>
		</div>
	</div>
	<div
		class="absolute top-0 left-0 flex h-full flex-1 items-center justify-center p-10 opacity-25 md:static md:p-0 md:opacity-100"
	>
		<img
			src="/ai_man.png"
			alt="robot waving"
			class="hidden w-full select-none md:block md:h-auto md:w-full"
		/>
	</div>
</div>
