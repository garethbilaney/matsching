import { Flex, Text, Button, ArrowRightIcon } from '@radix-ui/themes';


function App() {


  return (
    <>
      <Flex gap="3" align="center">
  <Button variant="classic">
    Get started <ArrowRightIcon />
  </Button>
  <Button variant="solid">
    Get started <ArrowRightIcon />
  </Button>
  <Button variant="soft">
    Get started <ArrowRightIcon />
  </Button>
</Flex>

    </>
  )
}

export default App
