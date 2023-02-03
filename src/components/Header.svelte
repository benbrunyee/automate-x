<script lang="ts">
	let scrollY = 0;
	let outerWidth = 0;

	$: isScrolled = scrollY > 0;
</script>

<svelte:window bind:scrollY bind:outerWidth />

<div
	class={`fixed top-0 z-50 flex h-[90px] w-full items-center overflow-hidden bg-transparent px-6 transition-all ${
		isScrolled ? 'bg-light-body shadow-md' : ''
	}`}
>
	<div class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2">
		{#each Array(Math.ceil(outerWidth / 120)) as _, i}
			<span
				style={`animation-delay: ${i % 2 === 0 ? 0.2 : 0}s`}
				class={`mx-2 animate-bounce whitespace-nowrap text-xl font-bold ${
					i % 2 === 0 ? 'outline-text text-light-body' : ''
				}`}>Automate X</span
			>
		{/each}
	</div>
</div>

<style>
	.outline-text {
		-webkit-text-stroke: 1px #000;
	}
</style>
