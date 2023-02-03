<script lang="ts">
	import Icon from '@iconify/svelte';
	import ButtonContainer from './ButtonContainer.svelte';

	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let icon: string;

	export let onClick: ((e: MouseEvent) => void) | undefined = undefined;
	export let href: string | undefined = undefined;
	export let iconClasses = '';
	export let iconColor = '';

	const paddingClasses: { [key in typeof size]: HTMLDivElement['className'] } = {
		sm: 'p-2',
		md: 'p-2',
		lg: 'p-4',
		xl: 'p-6'
	};

	const iconSizes: { [key in typeof size]: HTMLDivElement['className'] } = {
		sm: 'text-xl',
		md: 'text-3xl',
		lg: 'text-4xl',
		xl: 'text-6xl'
	};
</script>

<ButtonContainer {onClick} {href} class={`${paddingClasses[size]} ${$$props.class}`}>
	<Icon {icon} class={`${iconSizes[size]} ${iconClasses}`} color={iconColor} />
</ButtonContainer>
