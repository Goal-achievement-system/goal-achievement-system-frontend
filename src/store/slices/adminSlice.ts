import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	InspectCertificationBody,
	LoadAnnouncementsListBody,
	LoadAnnouncementsListResponse,
	LoadInspectionBody,
	LoadInspectionResponse,
	RegistAnnouncementsBody,
} from 'api/adminAPI';
import { LogInBody } from 'api/authAPI';
import { Announcements } from 'types/announcements';

export interface InitialState {
	inspectionList: LoadInspectionResponse | null;
	announcementsList: LoadAnnouncementsListResponse | null;
	isAdmin: string | null;
	announcementsInfo: Announcements | null;
}

const initialState: InitialState = {
	isAdmin: null,
	inspectionList: null,
	announcementsList: null,
	announcementsInfo: null,
};

export const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<LogInBody>) => {},
		checkLogin: (state) => {
			state.isAdmin = localStorage.getItem('adminToken');
		},
		loadInspection: (state, action: PayloadAction<LoadInspectionBody>) => {},
		loadInspectionSuccess: (state, { payload }: PayloadAction<LoadInspectionResponse>) => {
			state.inspectionList = payload;
		},
		loadAnnouncementsList: (state, action: PayloadAction<LoadAnnouncementsListBody>) => {},
		loadAnnouncementsListSuccess: (state, { payload }: PayloadAction<LoadAnnouncementsListResponse>) => {
			state.announcementsList = payload;
		},
		loadAnnouncementsInfo: (state, action: PayloadAction<Announcements>) => {},
		loadAnnouncementsInfoSuccess: (state, { payload }: PayloadAction<Announcements>) => {
			state.announcementsInfo = payload;
		},
		registAnnouncements: (state, action: PayloadAction<RegistAnnouncementsBody>) => {},
		registAnnouncementsSuccess: (state, { payload }: PayloadAction<Announcements>) => {
			state.announcementsList =
				state.announcementsList && state.announcementsList.announcements?.length < 6
					? { ...state.announcementsList, announcements: state.announcementsList.announcements.concat(payload) }
					: state.announcementsList;
		},
		inspectCertification: (state, action: PayloadAction<InspectCertificationBody>) => {},
	},
});

export default adminSlice;
