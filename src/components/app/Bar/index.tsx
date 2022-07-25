import {
  Heading,
  HStack,
  useColorModeValue,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import StakeAXO from "./StakeAXO";
import UnstakeAXO from "./UnstakeAXO";
import useUnstakedAXOBalance from "../../../hooks/useUnstakedAXOBalance";
import useXltBalance from "../../../hooks/useXltBalance";
import { AXOToken, XolotlToken } from "../../../icons";
import { parseBalance } from "../../../utils";

const Bar = () => {
  const { data: xltBalance } = useXltBalance();
  const { data: unstakedAXOBalance } = useUnstakedAXOBalance();

  return (
    <VStack
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="lg"
      borderRadius="lg"
      p={2}
      gap={14}
      w="full"
    >
      <Heading size="xl" fontWeight="light" letterSpacing="wider">
        Stake AXO for XLT
      </Heading>

      <Stack
        gap={2}
        direction={{ base: "column", md: "row" }}
        w="full"
        justify="space-between"
      >
        <HStack flex={1}>
          <XolotlToken fontSize="4rem" />
          <Stat>
            <StatLabel>Balance</StatLabel>
            <StatNumber>{xltBalance && parseBalance(xltBalance)}</StatNumber>
            <StatHelpText>XLT</StatHelpText>
          </Stat>
        </HStack>

        <HStack flex={1}>
          <AXOToken fontSize="4rem" />
          <Stat>
            <StatLabel>Unstaked</StatLabel>
            <StatNumber>
              {unstakedAXOBalance && parseBalance(unstakedAXOBalance)}
            </StatNumber>
            <StatHelpText>AXO</StatHelpText>
          </Stat>
        </HStack>
      </Stack>

      <Tabs variant="enclosed" w="full" isFitted>
        <TabList>
          <Tab>Stake AXO</Tab>
          <Tab>Unstake</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <StakeAXO />
          </TabPanel>
          <TabPanel>
            <UnstakeAXO />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Bar;
