export type FormEnums = {
	emotionals: { value: number; label: string }[];
	favouriteSports: { value: number; label: string }[];
	foodTaste: { value: number; label: string }[];
	hobbies: { value: number; label: string }[];
	musicTaste: { value: number; label: string }[];
	oddparentTypes: { value: number; label: string }[];
	rtcInitiationReasons: { value: number; label: string }[];
	socialAptitudes: { value: number; label: string }[];
};

export type CrearPadrinoForm = {
	name: string;
	lastName: string;
	socialAptitudes: number;
	foodTaste: number;
	musicTaste: number;
	hobbies: number;
	favouriteSport: string;
	emotional: number;
	rtcInitiationReason: string;
	oddparentType: number;
};

export type RequestPadrinoForm = {
	name: string;
	lastName: string;
	socialAptitudes: number;
	foodTaste: number;
	musicTaste: number;
	hobbies: number;
	favouriteSport: number;
	emotional: number;
	rtcInitiationReason: number;
	oddparentType: number;
};
