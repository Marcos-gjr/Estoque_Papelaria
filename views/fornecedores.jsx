import React from 'react'
import Layout from './layout.jsx'
import { Flex, Heading, Table, Th, Tr, Thead, Tbody, Link } from '@chakra-ui/react'

export default function ListagemProdutos() {
  return (
    <Layout>
      <Flex align='center' justify='center' direction='column'>
        <Flex w={'80%'} justify='space-between' my={10}>
          <Link href='/'>Principal</Link>
          <Heading>Fornecedores</Heading>
          <Link href='/logout'>Logout</Link>
        </Flex>
        <Table w={'80%'} variant='simple'>
          <Thead w={'100%'}>
            <Tr>
              <Th w={'5%'}>
                Codigo
              </Th>
              <Th w={'20%'}>Nome</Th>
              <Th w={'20%'}>
                Produtos Fornecidos
              </Th>
              <Th w={'30%'}>Endereço</Th>
              <Th w={'10%'}>Alterar</Th>
              { <Th w={'10%'}>Excluir</Th> }
            </Tr>
          </Thead>
          <Tbody w={'100%'}>
        
          </Tbody>
        </Table>
      </Flex>
    </Layout>
  )
}
