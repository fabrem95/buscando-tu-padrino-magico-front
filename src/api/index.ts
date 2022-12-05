import { AxiosResponse } from "axios";
import {
	CrearPadrinoForm,
	Padrino,
	RequestPadrinoForm,
} from "../types/padrinos";
import { get, post, put, destroy } from "./base";

export const FormEnumsService = {
	all: async () => await get("/getFormEnums"),
	// single: async (id) => await get(`/user/${id}`),
	// create: async (params) => await post("/user", params),
};

export const PadrinosService = {
	create: async (padrino: CrearPadrinoForm): Promise<AxiosResponse> =>
		await post("/createPadrino", padrino),
	request: async (
		answer: RequestPadrinoForm
	): Promise<AxiosResponse<Padrino>> => await post("/requestPadrino", answer),
	// single: async (id) => await get(`/user/${id}`),
	// create: async (params) => await post("/user", params),
};
