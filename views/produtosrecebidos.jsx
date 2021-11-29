import React from 'react'
import Layout from './layout.jsx'
import { Flex, Heading, Table, Th, Td, Tr, Thead, Tbody, Link } from '@chakra-ui/react'

export default function ProdutosRecebidos(props) {
  return (
    <Layout>
      <Flex align='center' justify='center' direction='column'>
        <Flex w={'80%'} justify='space-between' my={10}>
          <Link href='/'>Principal</Link>
          <Heading>Produtos Recebidos</Heading>
          <Link href='/logout'>Logout</Link>
        </Flex>
        <Table w={'80%'} variant='simple'>
          <Thead w={'100%'}>
            <Tr>
              <Th w={'20%'}>Produto</Th>
              <Th w={'15%'} isNumeric>
                Quantidade
              </Th>
              <Th w={'30%'}>Fornecedor</Th>
              <Th w={'10%'}>Data</Th>
            </Tr>
          </Thead>
          <Tbody w={'100%'}>
            {props.transacoes.map((transacao, index) => (
              <Tr key={index}>
                <Td w={'5%'}>
                  {(() => {
                    for (let i = 0; i < props.produtos.length; i++) {
                      if (props.produtos[i].prod_id == transacao['id_prod']) {
                        return transacao['id_prod'] + ': ' + props.produtos[i].prod_nome
                      }
                    }
                    return transacao['id_prod']
                  })()}
                </Td>
                <Td w={'15%'} isNumeric>
                  {transacao['quant_adic']}
                </Td>
                <Td w={'20%'}>
                  {(() => {
                    for (let i = 0; i < props.fornecedores.length; i++) {
                      if (props.fornecedores[i].for_id == transacao['id_for']) {
                        return transacao['id_for'] + ': ' + props.fornecedores[i].for_nome
                      }
                    }
                    return transacao['id_for']
                  })()}
                </Td>
                <Td w={'15%'}>{transacao['data'].toLocaleDateString('pt-BR')}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Layout>
  )
}
