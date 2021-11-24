import React from 'react'
import Layout from './layout.jsx'
import { Flex, Heading, Table, Th, Tr, Td, Thead, Button, Tbody, Link } from '@chakra-ui/react'

export default function clientes(props) {
  return (
    <Layout>
      <Flex align='center' justify='center' direction='column'>
        <Flex w={'80%'} justify='space-between' my={10}>
          <Link href='/'>Principal</Link>
          <Heading>Listagem de clientes</Heading>
          <Link href='/logout'>Logout</Link>
        </Flex>
        {/*<Link href='/alterarcliente'>
          <Button>Incerir Cliente</Button>
        </Link>*/}
        <Table w={'80%'} variant='simple'>
          <Thead w={'100%'}>
            <Tr>
              <Th w={'5%'} isNumeric>
                Codigo
              </Th>
              <Th w={'20%'}>Nome</Th>
              <Th w={'30%'} isNumeric>
                Telefone
              </Th>
              <Th w={'5%'}>CEP</Th>
              <Th w={'5%'}>Numero</Th>
              <Th w={'10%'}>Alterar</Th>
              <Th w={'10%'}>Excluir</Th>
            </Tr>
          </Thead>
          <Tbody w={'100%'}>
            <Tbody w={'100%'}>
              {props.clientes.map((clientes, index) => (
                <Tr key={index}>
                  <Td w={'5%'} isNumeric>
                    {clientes['cli_id']}
                  </Td>
                  <Td w={'20%'}>{clientes['cli_nome']}</Td>
                  <Td w={'10%'} isNumeric>
                    {clientes['cli_tel']}
                  </Td>
                  <Td w={'45%'}>{clientes['cli_cep']}</Td>
                  <Td w={'45%'}>{clientes['cli_num']}</Td>
                  <Td w={'10%'}>
                    <Link color='red' href={`/alterarcliente/${clientes['cli_id']}`}>
                      Alterar
                    </Link>
                  </Td>
                  <Td w={'10%'}>
                    <Link color='red' href={`/excluircliente/${clientes['cli_id']}`}>
                      Excluir
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Tbody>
        </Table>
      </Flex>
    </Layout>
  )
}
