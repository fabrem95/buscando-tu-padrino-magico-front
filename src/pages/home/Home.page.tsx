import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Center, Group, SimpleGrid, Title } from "@mantine/core";
import RoutesApp from "../../routes/routes";

const Home = () => {
	return (
		<Center>
			<Card
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
				shadow="sm"
				p="lg"
				radius="md"
				withBorder
			>
				<Title order={4}>Academia de Padrinos</Title>
				<SimpleGrid>
					<Button component={Link} to={RoutesApp.CrearPerfilPadrino}>
						Solicitar alitas y corona
					</Button>
					<Button component={Link} to={RoutesApp.SolicitarPadrino}>
						Solicitar Padrino/Madrina
					</Button>
				</SimpleGrid>
			</Card>
		</Center>
	);
};

export default Home;
