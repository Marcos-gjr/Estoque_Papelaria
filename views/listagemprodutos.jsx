import React from 'react'
import Layout from './layout.jsx'
import { Flex, Heading, Table, Th, Td, Tr, Thead, Tbody, Link } from '@chakra-ui/react'

export default function ListagemProdutos(props) {
  return (
    <Layout>
      <Flex align='center' justify='center' direction='column'>
        <Heading my={6}>Listagem de Produtos</Heading>
        <Table w={'80%'} variant='simple'>
          <Thead w={'100%'}>
            <Tr>
              <Th w={'16.67%'}>Codigo</Th>
              <Th w={'16.67%'}>Nome</Th>
              <Th w={'16.67%'}>Quantidade</Th>
              <Th w={'16.67%'}>Descrição</Th>
              <Th w={'16.67%'}>Alterar</Th>
              <Th w={'16.67%'}>Excluir</Th>
            </Tr>
          </Thead>
          <Tbody w={'100%'}>
            {props.produtos.map((produto, index) => (
              <Tr key={index}>
                <Td w={'16.67%'}>{produto['codigo']}</Td>
                <Td w={'16.67%'}>{produto['nome']}</Td>
                <Td w={'16.67%'}>{produto['quantidade']}</Td>
                <Td w={'16.67%'}>{produto['descricao']}</Td>
                <Td w={'16.67%'}>
                  <Link color='red' href={`/alterar/${produto['codigo']}`}>
                    Alterar
                  </Link>
                </Td>
                <Td w={'16.67%'}>
                  <Link color='red' href={`/excluir/${produto['codigo']}`}>
                    Excluir
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
