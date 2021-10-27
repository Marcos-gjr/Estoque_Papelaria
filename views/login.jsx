import React from 'react'
import Layout from './layout.jsx'
import { Flex, Heading, Table, Tr, Td, Input } from '@chakra-ui/react'

export default function HelloMessage() {
  return (
    <Layout>
      <Flex justify='center' align='center' direction='column'>
        <Heading my={6}>Identifique-se</Heading>
        <form name='frmLogin' method='POST'>
          <Table>
            <Tr>
              <Td>Usuário</Td>
              <Td>
                <Input type='text' name='txtUsuario' />
              </Td>
            </Tr>
            <Tr>
              <Td>Senha</Td>
              <Td>
                <Input type='password' name='pswSenha' />
              </Td>
            </Tr>
            <Tr>
              <Td colSpan='2'>
                <Input type='submit' value='Entrar' />
              </Td>
            </Tr>
          </Table>
        </form>
      </Flex>
    </Layout>
  )
}
