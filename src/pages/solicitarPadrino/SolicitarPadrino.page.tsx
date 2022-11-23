import { Card, TextInput, Radio, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import { FormEnumsService } from "../../api";
import { FormEnums, RequestPadrinoForm } from "../../types/types";

const useStyles = createStyles({
	card: {
		width: "70%",
	},
});

const SolicitarPadrino = () => {
	const { classes } = useStyles();

	//Estados locales
	const [FormEnumsData, setFormEnumsData] = useState<FormEnums>();

	useEffect(() => {
		const FetchFormEnums = async () => {
			try {
				const FormEnumsResp = await FormEnumsService.all();

				if (FormEnumsResp) {
					setFormEnumsData(FormEnumsResp.data);
				}
			} catch (error) {}
		};

		FetchFormEnums();
	}, []);

	const RequestPadrinoForm = useForm<RequestPadrinoForm>({
		initialValues: {
			name: "",
			lastName: "",
			socialAptitudes: 0,
			foodTaste: 0,
			musicTaste: 0,
			hobbies: 0,
			favouriteSport: 0,
			emotional: 0,
			rtcInitiationReason: 0,
			oddparentType: 0,
		},
	});

	return (
		<Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
			<form>
				<TextInput
					label="Nombre"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("name")}
				/>
				<TextInput
					label="Apellido"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("lastName")}
				/>
				<Radio.Group
					name="socialAptitudes"
					label="Aptitudes Sociales"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("socialAptitudes")}
					orientation="vertical"
				>
					{FormEnumsData?.socialAptitudes?.map((sa) => {
						return <Radio value={sa.value} label={sa.label} />;
					})}
				</Radio.Group>
				<Radio.Group
					name="foodTaste"
					label="Gustos en Comida"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("foodTaste")}
					orientation="vertical"
				>
					{FormEnumsData?.foodTaste?.map((ft) => {
						return <Radio value={ft.value} label={ft.label} />;
					})}
				</Radio.Group>
				<Radio.Group
					name="musicTaste"
					label="Dime que escuchas y te dire como eres"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("musicTaste")}
					orientation="vertical"
				>
					{FormEnumsData?.musicTaste?.map((mt) => {
						return <Radio value={mt.value} label={mt.label} />;
					})}
				</Radio.Group>
				<Radio.Group
					name="hobbies"
					label="Aficiones"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("hobbies")}
					orientation="vertical"
				>
					{FormEnumsData?.hobbies?.map((h) => {
						return <Radio value={h.value} label={h.label} />;
					})}
				</Radio.Group>
				<Radio.Group
					name="favouriteSport"
					label="Deporte Favorito"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("favouriteSport")}
					orientation="vertical"
				>
					{FormEnumsData?.favouriteSports?.map((fs) => {
						return <Radio value={fs.value} label={fs.label} />;
					})}
				</Radio.Group>
				<Radio.Group
					name="emotional"
					label="Emocional"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("emotional")}
					orientation="vertical"
				>
					{FormEnumsData?.emotionals?.map((e) => {
						return <Radio value={e.value} label={e.label} />;
					})}
				</Radio.Group>
				<Radio.Group
					name="rtcInitiationReason"
					label="Razon de ingreso a Rotaract"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("rtcInitiationReason")}
					orientation="vertical"
				>
					{FormEnumsData?.rtcInitiationReasons?.map((rir) => {
						return <Radio value={rir.value} label={rir.label} />;
					})}
				</Radio.Group>
				<Radio.Group
					name="oddparentType"
					label="Tipo de Padrino/Madrina"
					withAsterisk
					{...RequestPadrinoForm.getInputProps("oddparentType")}
					orientation="vertical"
				>
					{FormEnumsData?.oddparentTypes?.map((opt) => {
						return <Radio value={opt.value} label={opt.label} />;
					})}
				</Radio.Group>
			</form>
		</Card>
	);
};

export default SolicitarPadrino;
