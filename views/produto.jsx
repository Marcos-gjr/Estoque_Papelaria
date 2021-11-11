import React from 'react'
import Layout from './layout.jsx'
import { Input, Heading, Table, Td, Tr, Text, Tbody, Link } from '@chakra-ui/react'

export default function ListagemProdutos(props) {
  return (
    <Layout>
      <Heading> {props.titulo} </Heading>
      <Text>Preencha os dados do produto e clique no botão Salvar</Text>

      <form action={`${props.action}`} method='POST'>
        <Table>
          <Tbody>
            <Tr>
              <Td>Título</Td>
              <Td>
                <Input type='text' name='nome' defaultValue={props.produto.nome} />
              </Td>
            </Tr>
            <Tr>
              <Td>Autor</Td>
              <Td>
                <Input type='text' name='quantidade' defaultValue={props.produto.quantidade} />
              </Td>
            </Tr>
            <Tr>
              <Td>Ano</Td>
              <Td>
                <Input type='text' name='descricao' defaultValue={props.produto.descricao} />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Link color='red' href={'/'}>
                  Cancelar
                </Link>
              </Td>
              <Td>
                <Input type='submit' value='Salvar' />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </form>
    </Layout>
  )
}
