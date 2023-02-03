<script lang="ts">
	import Card from '../components/Card.svelte';
	import ServiceContainer from '../components/ServiceContainer.svelte';
	import { SERVICES, type Category } from '../util/constants';
	import { handleScroll } from '../util/util';

	let selectedCategory: Category = 'Social Media';
	let servicesContainer: HTMLDivElement;

	const onContainerScroll = () => {
		// Find the closest heading to the top of the container
		const headings = Array.from(servicesContainer.querySelectorAll('h2')) as HTMLHeadingElement[];

		const closestHeading = headings.reduce((prev, curr) => {
			const prevDistance = Math.abs(prev.getBoundingClientRect().top);
			const currDistance = Math.abs(curr.getBoundingClientRect().top);

			return prevDistance < currDistance ? prev : curr;
		});

		// Update the selected option
		selectedCategory = closestHeading.innerText as Category;
	};
</script>

<div
	class="relative flex flex-col items-stretch p-4 md:my-0 md:h-[calc(100vh-90px)] md:items-center md:px-5"
>
	<h2 class="my-2 text-center text-light-body">What's Possible?</h2>
	<Card theme="light" class="my-auto h-[calc(100vh-200px)] items-stretch md:w-3/4">
		<div class="flex h-full flex-1 flex-col gap-10 md:flex-row">
			<div
				class="flex flex-none flex-row flex-wrap gap-2 rounded-md text-center md:w-[20%] md:flex-col md:border-r md:border-dashed md:border-r-black md:pr-6"
			>
				{#each SERVICES as service}
					<a
						href="#{service.category.replace(' ', '_')}"
						on:click={(e) => {
							handleScroll(e);
							selectedCategory = service.category;
						}}
						class={`${
							selectedCategory === service.category ? 'font-bold' : ''
						} flex-1 basis-1/3 text-xl transition-all hover:font-bold md:flex-initial md:basis-auto md:text-2xl`}
						>{service.category}</a
					>
				{/each}
			</div>

			<div
				class="h-full w-full overflow-y-auto"
				bind:this={servicesContainer}
				on:scroll={onContainerScroll}
			>
				{#each SERVICES as service}
					<div class="min-h-full">
						<h2
							id={service.category.replace(' ', '_')}
							class="mt-4 text-center text-2xl md:mt-0 md:text-4xl"
						>
							{service.category}
						</h2>
						<div class="flex flex-col flex-wrap items-center gap-4 p-2 md:flex-row md:items-start">
							{#each SERVICES.filter((s) => s.category === service.category) as s}
								<ServiceContainer name={s.name} description={s.description} image="/ai_man.png" />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Card>
</div>
