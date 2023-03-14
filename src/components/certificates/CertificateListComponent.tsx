import { CertificateDetailCardComponent } from "./CertificateDetailCardComponent";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const certs: any[] = [
  {
    id: 1,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
    logo:"galicia.png"
  },
  {
    id: 2,
    dealer: "Banco BBVA",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
    logo:"bbva.png"
  },
];

const certsAvaliable: any[] = [
  {
    id: 5,
    dealer: "Banco Galicia",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
    paymentType: "Tarjeta de Credito",
    premium: "550",
    sumaAsegurada: "1500",
    coverageDescription: "Desempleo",
    observation: "Lo debitamos mensualmente de tu tarjeta incluida en 4566************",
    logo:"galicia.png"
  },
  {
    id: 6,
    dealer: "Banco BBVA",
    state: "Activo",
    policyNumber: "190000000012",
    certNumber: "22",
    vigencia: "10/10/2022 - 10/11/2023",
    productName: "Bolso Protegido",
    paymentType: "Tarjeta de Credito",
    premium: "550",
    sumaAsegurada: "1500",
    coverageDescription: "Desempleo",
    observation: "Lo debitamos mensualmente de tu tarjeta incluida en 4566************",
    logo:"bbva.png"
  },
];

export const CertificateListComponent = () => (
  <>
    <SimpleGrid spacing={30}>
      <Box>
        <Heading as="h3" size="lg" m={2}>
        Mis Seguros
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={2}>
          {certs.map((cert) => (
            <CertificateDetailCardComponent
              key={cert.id}
              dealer={cert.dealer}
              state={cert.state}
              policyNumber={cert.policyNumber}
              certNumber={cert.certNumber}
              vigencia={cert.vigencia}
              productName={cert.productName}
              logo={cert.logo}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="lg" m={2}>
          Seguros disponibles de contratar
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={2}>
          {certsAvaliable.map((cert) => (
            <CertificateDetailCardComponent
              key={cert.id}
              dealer={cert.dealer}
              state={cert.state}
              policyNumber={cert.policyNumber}
              certNumber={cert.certNumber}
              vigencia={cert.vigencia}
              productName={cert.productName}
              logo={cert.logo}
            />
          ))}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  </>
);
