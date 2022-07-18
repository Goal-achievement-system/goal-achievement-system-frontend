import React from 'react';
import Main from 'components/Main';
import PushNoticeBox from 'components/Box/PushNoticeBox';
import PushNoticeCountBox from 'components/Box/PushNoticeCountBox';
import { IPushNoticeView } from 'types/notification';

interface Props {
	pushNoticeList: IPushNoticeView[];
}

export default function PushNoticeView({ pushNoticeList }: Props) {
	return (
		<Main title="알림" hasGoBack>
			<div className="relative divide-y-[1px]">
				<div className="flex flex-col pc:space-y-[16px]">
					<PushNoticeCountBox />
					<PushNoticeBox pushNoticeList={pushNoticeList} />
				</div>
			</div>
		</Main>
	);
}
