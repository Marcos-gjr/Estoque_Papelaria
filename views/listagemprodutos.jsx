import React from 'react'
import Layout from './layout.jsx'
import { Flex, Heading, Table, Th, Td, Tr, Thead, Tbody, Link } from '@chakra-ui/react'

export default function ListagemProdutos(props) {
  return (
    <Layout>
      <Flex align='center' justify='center' direction='column'>
        <Flex w={'80%'} justify='space-between' my={10}>
          <Link href='/'>Principal</Link>
          <Heading>Listagem de Produtos</Heading>
          <Link href='/logout'>Logout</Link>
        </Flex>
        <Table w={'80%'} variant='simple'>
          <Thead w={'100%'}>
            <Tr>
              <Th w={'5%'} isNumeric>
                Codigo
              </Th>
              <Th w={'20%'}>Nome</Th>
              <Th w={'10%'} isNumeric>
                Quantidade
              </Th>
              <Th w={'45%'}>Descrição</Th>
              <Th w={'10%'}>Alterar</Th>
              <Th w={'10%'}>Excluir</Th>
            </Tr>
          </Thead>
          <Tbody w={'100%'}>
            {props.produtos.map((produto, index) => (
              <Tr key={index}>
                <Td w={'5%'} isNumeric>
                  {produto['codigo']}
                </Td>
                <Td w={'20%'}>{produto['nome']}</Td>
                <Td w={'10%'} isNumeric>
                  {produto['quantidade']}
                </Td>
                <Td w={'45%'}>{produto['descricao']}</Td>
                <Td w={'10%'}>
                  <Link color='red' href={`/alterar/${produto['codigo']}`}>
                    Alterar
                  </Link>
                </Td>
                <Td w={'10%'}>
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
