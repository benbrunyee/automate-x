export type Category = 'Social Media' | 'Marketing' | 'Tools' | 'Other';

export interface Service {
	category: Category;
	name: string;
	url: string;
	description: string;
	icon: string;
	iconColor: string;
}

export const SERVICES: Service[] = [
	/* Social Media */
	{
		category: 'Social Media',
		name: 'Instagram Follow Grower',
		url: '/instagram-follow-grower',
		description: 'Automatically follow and unfollow users on Instagram to grow your following.',
		icon: 'mdi:instagram',
		iconColor: '#E1306C'
	},

	/* Marketing */
	{
		category: 'Marketing',
		name: 'Instagram Follow Grower',
		url: '/instagram-follow-grower',
		description: 'Automatically follow and unfollow users on Instagram to grow your following.',
		icon: 'mdi:instagram',
		iconColor: 'purple'
	}
];
