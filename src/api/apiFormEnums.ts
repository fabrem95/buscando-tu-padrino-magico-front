import { FormEnums } from "../types/types";
import { FormEnumsService } from "./index";
import { AxiosResponse } from "axios";

export const FetchFormEnums = async (): Promise<FormEnums> => {
	try {
		const FormEnumsResp = await FormEnumsService.all();

		return FormEnumsResp.data;
	} catch (error: any) {
		return error;
	}
};
