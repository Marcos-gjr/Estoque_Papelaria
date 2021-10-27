import React from 'react'
import Layout from './layout.jsx'
import { Flex, Heading, Text } from '@chakra-ui/react'

export default function HelloMessage() {
  return (
    <Layout>
      <Flex>
        <Heading>404</Heading>
        <Text>Página não encontrada ou sem permissão para visualizar</Text>
        <Text>
          Clique <a href='http://localhost:3000'>aqui</a> para entrar no sistema.
        </Text>
      </Flex>
    </Layout>
  )
}
