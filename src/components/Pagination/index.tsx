import { Stack, Button, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationButton";

export default function Pagination(){
  return (
  <Stack
   direction={["column","row"]}
   mt="8"
   justify="space-between"
   align="center"
   spacing="6"
   >

    <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
    </Box>
    <Stack direction="row" spacing="2">
    <PaginationItem number={1} isCurrent={true} />
    <PaginationItem number={2} isCurrent={false} />
    <PaginationItem number={3} isCurrent={false} />
    <PaginationItem number={4} isCurrent={false} />
    <PaginationItem number={5} isCurrent={false} />
    <PaginationItem number={6} isCurrent={false} />
    </Stack>
  </Stack>
  );
}