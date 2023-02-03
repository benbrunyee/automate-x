<script lang="ts">
	export let theme: 'light' | 'dark' = 'dark';
</script>

<div
	class={`flex flex-col items-center justify-center rounded-md p-10 ${
		theme === 'dark'
			? 'bg-dark-body text-light-body shadow-md shadow-slate-100'
			: 'bg-slate-100 shadow-md shadow-dark-body/25'
	} ${$$props.class}`}
>
	<slot />
</div>
