import { Padrino, RequestPadrinoForm } from "../types/padrinos";
import { PadrinosService } from "./index";
import { AxiosResponse } from "axios";

export const requestPadrino = async (
	answers: RequestPadrinoForm
): Promise<Padrino> => {
	try {
		const Answer = await PadrinosService.request(answers);

		return Answer.data;
	} catch (error: any) {
		return error;
	}
};
