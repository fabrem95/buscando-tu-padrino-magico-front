import React from "react";
import { Button, Card, Group, Text, Image } from "@mantine/core";
import { CrearPadrinoForm } from "../../types/types";
import { Link } from "react-router-dom";
import RoutesApp from "../../routes/routes";

type AssignedPadrinoProps = {
	padrino: CrearPadrinoForm;
};

function AssignedPadrino({ padrino }: AssignedPadrinoProps) {
	return (
		<Card withBorder>
			<Card.Section>
				<Image
					src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
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
