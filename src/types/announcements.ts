export interface Announcements {
	announcementId: number;
	title: string;
	description: string;
	date: Date;
	activation: boolean;
	image?: string;
	bannerImage?: string;
}
