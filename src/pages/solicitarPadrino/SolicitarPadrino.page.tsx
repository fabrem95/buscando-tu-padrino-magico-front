import {
	Card,
	TextInput,
	Radio,
	createStyles,
	Button,
	Group,
	SimpleGrid,
	ScrollArea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { PadrinosService } from "../../api";
import { FetchFormEnums } from "../../api/apiFormEnums";
import { requestPadrino } from "../../api/apiPadrinos";
import AssignedPadrino from "../../components/solicitarPadrino/AssignedPadrino";
import { Padrino, RequestPadrinoForm } from "../../types/padrinos";
import { FormEnums } from "../../types/types";

const useStyles = createStyles({
	card: {
		width: "70%",
		height: "90%",
	},
});

const SolicitarPadrino = () => {
	const { classes } = useStyles();

	//Estados locales
	const [FormEnumsData, setFormEnumsData] = useState<FormEnums>();
	const [MatchedPadrino, setMatchedPadrino] = useState<Padrino>();

	//Queries
	const FormEnumsResp = useQuery("FormEnums", FetchFormEnums);
	const RequestPadrinoResp = useMutation((values: RequestPadrinoForm) =>
		requestPadrino(values)
	);

	useEffect(() => {
		if (FormEnumsResp.isSuccess) {
			setFormEnumsData(FormEnumsResp.data);
		} else if (FormEnumsResp.isError) {
			console.log(FormEnumsResp.error);
		}
	}, [FormEnumsResp.isLoading]);

	useEffect(() => {
		if (RequestPadrinoResp.isSuccess) {
			setMatchedPadrino(RequestPadrinoResp.data);
		} else if (RequestPadrinoResp.isError) {
			console.log(RequestPadrinoResp.error);
		}
	}, [RequestPadrinoResp.isLoading]);

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

	const handleSubmit = async (values: typeof RequestPadrinoForm.values) => {
		try {
			for (const key in values) {
				if (!isNaN(Number(values[key as keyof typeof values]))) {
					values[key as keyof typeof values] = Number(
						values[key as keyof typeof values]
					);
				}
			}

			RequestPadrinoResp.mutate(values);
		} catch (error) {
			console.log(error);
		}
	};

	return MatchedPadrino ? (
		<AssignedPadrino padrino={MatchedPadrino} />
	) : (
		<Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
			<ScrollArea style={{ height: "100%" }}>
				<form
					onSubmit={RequestPadrinoForm.onSubmit((values) =>
						handleSubmit(values)
					)}
				>
					<SimpleGrid verticalSpacing={30}>
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
							{...RequestPadrinoForm.getInputProps("foodTaste")}
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
							{...RequestPadrinoForm.getInputProps("musicTaste")}
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
							{...RequestPadrinoForm.getInputProps("hobbies")}
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
							{...RequestPadrinoForm.getInputProps("favouriteSport")}
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
						</Radio.Group>
						<Radio.Group
							name="emotional"
							label="Emocional"
							withAsterisk
							{...RequestPadrinoForm.getInputProps("emotional")}
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
							name="rtcInitiationReason"
							label="Razon de ingreso a Rotaract"
							withAsterisk
							{...RequestPadrinoForm.getInputProps("rtcInitiationReason")}
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
						</Radio.Group>
						<Radio.Group
							name="oddparentType"
							label="Tipo de Padrino/Madrina"
							withAsterisk
							{...RequestPadrinoForm.getInputProps("oddparentType")}
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

export default SolicitarPadrino;
