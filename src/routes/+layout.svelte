<script>
	import '../theme.postcss';

	import '@skeletonlabs/skeleton/styles/all.css';

	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import Header from '../components/Header.svelte';

	let scrollY = 0;

	$: isScrolled = scrollY > 0;
</script>

<svelte:window bind:scrollY />
<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<div class="pt-[90px]">
		<div
			class="pointer-events-none fixed
	bottom-0 left-0 right-0 top-0 flex select-none items-center justify-center opacity-10"
		>
			<img
				src="/ai_man.png"
				alt="ai man"
				class={`absolute w-full transition-opacity duration-500 md:h-full md:w-auto ${
					isScrolled ? '' : 'md:opacity-0'
				}`}
			/>
		</div>
		<slot />
	</div>
</AppShell>
