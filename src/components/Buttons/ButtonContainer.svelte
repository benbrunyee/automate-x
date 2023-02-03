<script lang="ts">
	export let onClick: ((e: MouseEvent) => void) | undefined = undefined;
	export let href: string | undefined = undefined;

	const classes = `z-40 flex h-min w-fit items-center justify-center rounded-md bg-white shadow-md shadow-dark-body/25 ${$$props.class} transition-all hover:translate-y-[5px] hover:scale-95 hover:shadow-none border-2 border-transparent hover:border-dark-body`;
</script>

{#if onClick}
	<button on:click={onClick} class={classes}>
		<slot />
	</button>
{:else if href}
	<a {href} class={classes}>
		<slot />
	</a>
{/if}
