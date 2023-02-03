<script>
	import '../app.css';
	import Header from '../components/Header.svelte';

	let scrollY = 0;

	$: isScrolled = scrollY > 0;
</script>

<svelte:window bind:scrollY />
<Header />
<div class="bg-slate-100 pt-[90px]">
	<div
		class="pointer-events-none fixed
	top-0 right-0 bottom-0 left-0 flex select-none items-center justify-center opacity-10"
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
