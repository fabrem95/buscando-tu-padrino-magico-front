import React from "react";
import { Button, Card, Group, Text, Image } from "@mantine/core";
import { CrearPadrinoForm, Padrino } from "../../types/padrinos";
import { Link } from "react-router-dom";
import RoutesApp from "../../routes/routes";

type AssignedPadrinoProps = {
	padrino: Padrino;
};

function AssignedPadrino({ padrino }: AssignedPadrinoProps) {
	return (
		<Card withBorder>
			<Card.Section>
				<Image
					src={padrino.img}
					height={160}
					alt={`Foto de ${padrino.name}`}
				/>
			</Card.Section>
			<Group position="center" mt="md" mb="xs">
				<Text weight={500}>{`${padrino.name} ${padrino.lastName}`}</Text>
			</Group>
			<Button
				component={Link}
				to={RoutesApp.Home}
				variant="light"
				color="blue"
				fullWidth
				mt="md"
				radius="md"
			>
				Volver al Inicio
			</Button>
		</Card>
	);
}

export default AssignedPadrino;
