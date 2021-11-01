import React from 'react'
import Layout from './layout.jsx'
import { Flex, Heading, Table, Th, Td, Tr, Thead, Tbody, Link } from '@chakra-ui/react'

export default function ListagemProdutos(props) {
  return (
    <Layout>
      <Flex align='center' justify='center' direction='column'>
        <Heading my={6}>Listagem de Produtos</Heading>
        <Heading mb={6}>Método: {props.method}</Heading>
        <Table w={'80%'} variant='simple'>
          <Thead w={'100%'}>
            <Tr>
              <Th w={'20%'}>Codigo</Th>
              <Th w={'20%'}>Nome</Th>
              <Th w={'20%'}>Quantidade</Th>
              <Th w={'20%'}>Descrição</Th>
              <Th w={'20%'}>Alterar</Th>
            </Tr>
          </Thead>
          <Tbody w={'100%'}>
            {props.produtos.map((produto, index) => (
              <Tr key={index}>
                <Td w={'20%'}>{produto['codigo']}</Td>
                <Td w={'20%'}>{produto['nome']}</Td>
                <Td w={'20%'}>{produto['quantidade']}</Td>
                <Td w={'20%'}>{produto['descricao']}</Td>
                <Td w={'20%'}>
                  <Link color='red' href={`/alterar/${produto['codigo']}`}>
                    Alterar
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Layout>
  )
}
