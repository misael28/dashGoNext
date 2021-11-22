import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom:{
      enabled: false,
    },
    forecolor: theme.colors.gray[500],
  },
  grid:{
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip:{
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-01-01T00:00:00.000Z',
      '2021-01-02T01:00:00.000Z',
      '2021-01-03T02:00:00.000Z',
      '2021-01-04T03:00:00.000Z',
      '2021-01-05T04:00:00.000Z',
      '2021-01-06T05:00:00.000Z',
      '2021-01-07T06:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.2,
    type:"gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

const series = [
  { name: "series1", data: [31, 40, 28, 51, 42, 109, 100] },
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart type="area" options={options} series={series} height={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart type="area" options={options} series={series} height={160} />
          </Box>
          
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
