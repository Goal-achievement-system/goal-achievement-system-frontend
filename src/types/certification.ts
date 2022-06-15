export type CertCategoryType = 'all' | 'exercice' | 'study' | 'habit' | 'hobby' | 'etc';
export const CertCategories = [
	{ type: 'all' as CertCategoryType, label: '전체' },
	{ type: 'exercice' as CertCategoryType, label: '운동' },
	{ type: 'study' as CertCategoryType, label: '공부' },
	{ type: 'habit' as CertCategoryType, label: '습관' },
	{ type: 'hobby' as CertCategoryType, label: '취미' },
	{ type: 'etc' as CertCategoryType, label: '기타' },
];
export interface Cert {
	certId: number;
	goalId: number;
	content: string;
	image: string;
	requireSuccessCount: number;
	successCount: number;
	failCount: number;
}
