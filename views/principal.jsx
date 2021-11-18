import React from 'react'
import Layout from './layout.jsx'
import { Flex, Link, Heading, Table, Thead, Tr, Th, Tbody, Td, Text } from '@chakra-ui/react'

export default function HelloMessage(props) {
  let produtosAcabando = []
  if (props.produtos) {
    produtosAcabando = props.produtos.filter(produto => produto['quantidade'] <= 5)
  }

  return (
    <Layout>
      <Flex justify='center' align='center' direction='column'>
        <Flex w={'80%'} justify='space-between' my={10}>
          <Link href='/'>Principal</Link>
          <Link href='/logout'>Logout</Link>
        </Flex>
        <Flex w={'80%'} justify='space-around' my={10}>
          <Link>Clientes</Link>
          <Link href='/listagemprodutos'>Produtos</Link>
          <Link href='/produtosrecebidos'>Recebidos</Link>
          <Link href='/produtosvendidos'>Vendidos</Link>
          <Link href='/fornecedores'>Fornecedores</Link>
          <Link>Chegada</Link>
          <Link>Saída</Link>
        </Flex>
        <Flex w={'80%'} direction='column' justify='center' align='center'>
          <Heading>{'Produtos quase em falta ( <6 )'}</Heading>
          {produtosAcabando.length >= 1 ? (
            <Table w={'80%'} variant='simple' my={10}>
              <Thead w={'100%'}>
                <Tr>
                  <Th w={'25%'}>Codigo</Th>
                  <Th w={'25%'}>Nome</Th>
                  <Th w={'25%'}>Quantidade</Th>
                  <Th w={'25%'}>Descrição</Th>
                </Tr>
              </Thead>
              <Tbody w={'100%'}>
                {produtosAcabando.map((produto, index) => (
                  <Tr key={index}>
                    <Td w={'25%'}>{produto['codigo']}</Td>
                    <Td w={'25%'}>{produto['nome']}</Td>
                    <Td w={'25%'}>{produto['quantidade']}</Td>
                    <Td w={'25%'}>{produto['descricao']}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <Text my={6}>Não há produtos quase acabando</Text>
          )}
        </Flex>
      </Flex>
    </Layout>
  )
}
