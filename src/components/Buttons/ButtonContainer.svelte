<script lang="ts">
	export let onClick: ((e: MouseEvent) => void) | undefined = undefined;
	export let href: string | undefined = undefined;

	const classes = `btn btn-filled ${$$props.class}`;
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
