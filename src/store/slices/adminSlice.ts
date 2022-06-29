import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	InspectCertificationBody,
	LoadAnnouncementsListBody,
	LoadAnnouncementsListResponse,
	LoadInspectionBody,
	LoadInspectionResponse,
} from 'api/adminAPI';
import { LogInBody } from 'api/authAPI';

export interface InitialState {
	inspectionList: LoadInspectionResponse;
	announcementsList: LoadAnnouncementsListResponse | null;
	isAdmin: string | null;
}

const initialState: InitialState = {
	isAdmin: null,
	inspectionList: [],
	announcementsList: null,
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
		inspectCertification: (state, action: PayloadAction<InspectCertificationBody>) => {},
	},
});

export default adminSlice;
