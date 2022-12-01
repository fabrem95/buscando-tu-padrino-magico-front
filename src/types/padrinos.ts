export type Padrino = {
	id: number;
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
    img: string;
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
