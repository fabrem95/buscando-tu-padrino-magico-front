import React from "react";
import { Card, createStyles, Radio, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { CrearPadrinoForm } from "../../types/types";

const useStyles = createStyles({
	card: {
		width: "50%",
	},
});

const CrearPadrino = () => {
	const { classes } = useStyles();

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
					<Radio value="react" label="React" />
					<Radio value="svelte" label="Svelte" />
					<Radio value="ng" label="Angular" />
					<Radio value="vue" label="Vue" />
				</Radio.Group>
				<Radio.Group
					name="foodTaste"
					label="Gustos en Comida"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("foodTaste")}
					orientation="vertical"
				>
					<Radio value="react" label="React" />
					<Radio value="svelte" label="Svelte" />
					<Radio value="ng" label="Angular" />
					<Radio value="vue" label="Vue" />
				</Radio.Group>
				<Radio.Group
					name="musicTaste"
					label="Dime que escuchas y te dire como eres"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("musicTaste")}
					orientation="vertical"
				>
					<Radio value="react" label="React" />
					<Radio value="svelte" label="Svelte" />
					<Radio value="ng" label="Angular" />
					<Radio value="vue" label="Vue" />
				</Radio.Group>
				<Radio.Group
					name="hobbies"
					label="Aficiones"
					withAsterisk
					{...CrearPadrinoForm.getInputProps("hobbies")}
					orientation="vertical"
				>
					<Radio value="react" label="React" />
					<Radio value="svelte" label="Svelte" />
					<Radio value="ng" label="Angular" />
					<Radio value="vue" label="Vue" />
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
					<Radio value="react" label="React" />
					<Radio value="svelte" label="Svelte" />
					<Radio value="ng" label="Angular" />
					<Radio value="vue" label="Vue" />
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
					<Radio value="react" label="React" />
					<Radio value="svelte" label="Svelte" />
					<Radio value="ng" label="Angular" />
					<Radio value="vue" label="Vue" />
				</Radio.Group>
			</form>
		</Card>
	);
};

export default CrearPadrino;
