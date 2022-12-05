import { FormEnumsService } from "./index";

export const FetchFormEnums = async () => {
	try {
		const FormEnumsResp = await FormEnumsService.all();

		if (FormEnumsResp) {
			return FormEnumsResp.data;
		}
	} catch (error) {
		return error;
	}
};
