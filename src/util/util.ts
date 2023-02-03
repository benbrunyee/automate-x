export const handleScroll = (e: MouseEvent, query?: string) => {
	e.preventDefault();

	const target = document.querySelector(query ?? (e.target as HTMLAnchorElement).hash);

	if (!target) {
		return;
	}

	target.scrollIntoView({ behavior: 'smooth' });
};
