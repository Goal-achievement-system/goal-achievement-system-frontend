export interface IPushNotice {
	notificationId: number;
	content: string;
	memberEmail: string;
	date: Date;
	url: string;
	read: boolean;
}

export interface IPushNoticeView extends IPushNotice {
	category: string;
}
