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
	id: number;
	name: string | number;
	lastName: string | number;
	socialAptitudes: number | string;
	foodTaste: number | string;
	musicTaste: number | string;
	hobbies: number | string;
	favouriteSport: number | string;
	emotional: number | string;
	rtcInitiationReason: number | string;
	oddparentType: number | string;
};

export type RequestPadrinoForm = {
	name: string | number;
	lastName: string | number;
	socialAptitudes: number | number;
	foodTaste: number | number;
	musicTaste: number | number;
	hobbies: number | number;
	favouriteSport: number | number;
	emotional: number | number;
	rtcInitiationReason: number | number;
	oddparentType: number | number;
};
