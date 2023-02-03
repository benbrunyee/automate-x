<script lang="ts">
	import Cards from './Cards.svelte';
	import Cover from './Cover.svelte';
	import SoftwareOptions from './SoftwareOptions.svelte';

	let scrollY = 0;
	let outerHeight = 0;

	$: isScrolled = scrollY > 0;
</script>

<svelte:window bind:scrollY bind:outerHeight />
<div class={`transition-colors duration-500 ${isScrolled ? 'bg-neutral-900' : ''}`}>
	<Cover {isScrolled} />
	<Cards />
	<SoftwareOptions />
</div>
