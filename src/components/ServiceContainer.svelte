<script lang="ts">
	import Button from './Buttons/Button.svelte';
	import Card from './Card.svelte';

	export let name: string;
	export let description: string;
	export let image: string;
</script>

<Card theme="light" class="w-[100%] p-0 md:h-[400px] md:max-w-[350px]">
	<div class="h-1/2 w-full bg-neutral-200 text-center">
		<img src={image} alt="AI Man" class="h-full w-full object-cover" />
	</div>
	<div class="flex h-1/2 flex-col items-center justify-between gap-2 p-4">
		<div>
			<h3 class="text-2xl">{name}</h3>
			<p>{description}</p>
		</div>
		<Button text="Show Me" href="#" />
	</div>
</Card>
