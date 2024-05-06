import { Container, VStack, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontFamily="monospace">
          {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
          {("0" + ((time / 10) % 100)).slice(-2)}
        </Text>
        <Button colorScheme="blue" onClick={handleStartStop}>
          {isActive ? "Stop" : "Start"}
        </Button>
        <Button colorScheme="red" onClick={handleReset}>
          Reset
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;