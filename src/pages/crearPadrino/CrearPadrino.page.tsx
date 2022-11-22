import React, { useEffect, useState } from "react";
import { Card, createStyles, Radio, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { CrearPadrinoForm, FormEnums } from "../../types/types";
import { FormEnumsService } from "../../api";

const useStyles = createStyles({
	card: {
		width: "50%",
	},
});

const CrearPadrino = () => {
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

	const CrearPadrinoForm = useForm<CrearPadrinoForm>({
		initialValues: {
			name: "",
			lastName: "",
			socialAptitudes: 0,
			foodTaste: 0,
			musicTaste: 0,
			hobbies: 0,
			favouriteSport: "",
			emotional: 0,
			rtcInitiationReason: "",
			oddparentType: 0,
		},
	});

	return (
		<Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
			<form>
				<TextInput
					label="Nombre"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("name")}
				/>
				<TextInput
					label="Apellido"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("lastName")}
				/>
				<Radio.Group
					name="socialAptitudes"
					label="Aptitudes Sociales"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("socialAptitudes")}
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
					{...CrearPadrinoForm.getInputProps("foodTaste")}
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
					{...CrearPadrinoForm.getInputProps("musicTaste")}
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
					{...CrearPadrinoForm.getInputProps("hobbies")}
					orientation="vertical"
				>
					{FormEnumsData?.hobbies?.map((h) => {
						return <Radio value={h.value} label={h.label} />;
					})}
				</Radio.Group>
				<TextInput
					label="Deporte Favorito"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("favouriteSport")}
				/>
				<Radio.Group
					name="emotional"
					label="Emocional"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("emotional")}
					orientation="vertical"
				>
					<Radio.Group
						name="hobbies"
						label="Aficiones"
						withAsterisk
						{...CrearPadrinoForm.getInputProps("hobbies")}
						orientation="vertical"
					>
						{FormEnumsData?.emotionals?.map((e) => {
							return <Radio value={e.value} label={e.label} />;
						})}
					</Radio.Group>
				</Radio.Group>
				<TextInput
					label="Razon de ingreso a Rotaract"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("rtcInitiationReason")}
				/>
				<Radio.Group
					name="oddparentType"
					label="Tipo de Padrino/Madrina"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("oddparentType")}
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

export default CrearPadrino;
