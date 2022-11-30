import { RequestPadrinoForm } from "../types/types";
import { get, post, put, destroy } from "./base";

export const FormEnumsService = {
	all: async () => await get("/getFormEnums"),
	// single: async (id) => await get(`/user/${id}`),
	// create: async (params) => await post("/user", params),
};

export const RequestPadrinoService = {
	single: async (answer: RequestPadrinoForm) =>
		await post("/requestPadrino", answer),
	// single: async (id) => await get(`/user/${id}`),
	// create: async (params) => await post("/user", params),
};
