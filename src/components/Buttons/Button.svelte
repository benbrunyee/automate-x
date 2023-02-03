<script lang="ts">
	import ButtonContainer from './ButtonContainer.svelte';

	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let text: string;

	export let onClick: ((e: MouseEvent) => void) | undefined = undefined;
	export let href: string | undefined = undefined;

	const paddingClasses: { [key in typeof size]: HTMLDivElement['className'] } = {
		sm: 'py-2 px-4',
		md: 'py-4 px-6',
		lg: 'py-6 px-8',
		xl: 'py-8 px-10'
	};

	const fontClasses: { [key in typeof size]: HTMLSpanElement['className'] } = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-xl',
		xl: 'text-2xl'
	};
</script>

<ButtonContainer {onClick} {href} class={`${paddingClasses[size]} ${$$props.class}`}
	><span class={`font-semibold ${fontClasses[size]}`}>{text}</span></ButtonContainer
>
