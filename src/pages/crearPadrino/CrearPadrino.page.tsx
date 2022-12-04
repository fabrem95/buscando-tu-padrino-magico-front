import React, { useEffect, useState } from "react";
import {
	Button,
	Card,
	createStyles,
	Group,
	Radio,
	ScrollArea,
	SimpleGrid,
	Text,
	TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { CrearPadrinoForm } from "../../types/padrinos";
import { CreatePadrinoService, FormEnumsService } from "../../api";
import { FormEnums } from "../../types/types";

const useStyles = createStyles({
	card: {
		width: "70%",
		height: "90%",
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

	const AuxForm = useForm({
		initialValues: {
			txtFavouriteSport: "",
			txtRtcInitiationReason: "",
		},
	});

	const CrearPadrinoForm = useForm<CrearPadrinoForm>({
		initialValues: {
			id: 0,
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

	const handleSubmit = async (values: typeof CrearPadrinoForm.values) => {
		for (const key in values) {
			if (!isNaN(Number(values[key as keyof typeof values]))) {
				values[key as keyof typeof values] = Number(
					values[key as keyof typeof values]
				);
			}
		}

		console.log(values);
		const CreatePadrino = await CreatePadrinoService.single(values);

		if (CreatePadrino) console.log(CreatePadrino);
	};

	return (
		<Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
			<ScrollArea style={{ height: "100%" }}>
				<form
					onSubmit={CrearPadrinoForm.onSubmit((values) => handleSubmit(values))}
				>
					<SimpleGrid verticalSpacing={30}>
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
							orientation="vertical"
							{...CrearPadrinoForm.getInputProps("socialAptitudes")}
						>
							{FormEnumsData?.socialAptitudes?.map((sa, i) => {
								return (
									<Radio
										key={`sa${i}`}
										value={String(sa.value)}
										label={sa.label}
									/>
								);
							})}
						</Radio.Group>
						<Radio.Group
							name="foodTaste"
							label="Gustos en Comida"
							withAsterisk
							{...CrearPadrinoForm.getInputProps("foodTaste")}
							orientation="vertical"
						>
							{FormEnumsData?.foodTaste?.map((ft, i) => {
								return (
									<Radio
										key={`ft${i}`}
										value={String(ft.value)}
										label={ft.label}
									/>
								);
							})}
						</Radio.Group>
						<Radio.Group
							name="musicTaste"
							label="Dime que escuchas y te dire como eres"
							withAsterisk
							{...CrearPadrinoForm.getInputProps("musicTaste")}
							orientation="vertical"
						>
							{FormEnumsData?.musicTaste?.map((mt, i) => {
								return (
									<Radio
										key={`mt${i}`}
										value={String(mt.value)}
										label={mt.label}
									/>
								);
							})}
						</Radio.Group>
						<Radio.Group
							name="hobbies"
							label="Aficiones"
							withAsterisk
							{...CrearPadrinoForm.getInputProps("hobbies")}
							orientation="vertical"
						>
							{FormEnumsData?.hobbies?.map((h, i) => {
								return (
									<Radio
										key={`h${i}`}
										value={String(h.value)}
										label={h.label}
									/>
								);
							})}
						</Radio.Group>
						<Radio.Group
							name="favouriteSport"
							label="Deporte Favorito"
							withAsterisk
							{...CrearPadrinoForm.getInputProps("favouriteSport")}
							orientation="vertical"
						>
							{FormEnumsData?.favouriteSports?.map((fs, i) => {
								return (
									<Radio
										key={`fs${i}`}
										value={String(fs.value)}
										label={fs.label}
									/>
								);
							})}
							<Radio
								value={AuxForm.values.txtFavouriteSport}
								label={
									<TextInput
										label="Otro"
										// disabled={}
										{...AuxForm.getInputProps("txtFavouriteSport")}
									/>
								}
							/>
						</Radio.Group>
						<Radio.Group
							name="emotional"
							label="Emocional"
							withAsterisk
							{...CrearPadrinoForm.getInputProps("emotional")}
							orientation="vertical"
						>
							{FormEnumsData?.emotionals?.map((e, i) => {
								return (
									<Radio
										key={`e${i}`}
										value={String(e.value)}
										label={e.label}
									/>
								);
							})}
						</Radio.Group>
						<Radio.Group
							name="rtcInitiationReasons"
							label="Razon de ingreso a Rotaract"
							withAsterisk
							{...CrearPadrinoForm.getInputProps("rtcInitiationReasons")}
							orientation="vertical"
						>
							{FormEnumsData?.rtcInitiationReasons?.map((rir, i) => {
								return (
									<Radio
										key={`rir${i}`}
										value={String(rir.value)}
										label={rir.label}
									/>
								);
							})}
							<Radio
								value={AuxForm.values.txtRtcInitiationReason}
								label={
									<Text span>
										Otro
										<TextInput
											{...AuxForm.getInputProps("txtRtcInitiationReason")}
										/>
									</Text>
								}
							/>
						</Radio.Group>
						<Radio.Group
							name="oddparentType"
							label="Tipo de Padrino/Madrina"
							withAsterisk
							{...CrearPadrinoForm.getInputProps("oddparentType")}
							orientation="vertical"
						>
							{FormEnumsData?.oddparentTypes?.map((opt, i) => {
								return (
									<Radio
										key={`opt${i}`}
										value={String(opt.value)}
										label={opt.label}
									/>
								);
							})}
						</Radio.Group>
						<Group>
							<Button type="submit">Guardar</Button>
						</Group>
					</SimpleGrid>
				</form>
			</ScrollArea>
		</Card>
	);
};

export default CrearPadrino;
