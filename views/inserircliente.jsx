import React from 'react'
import Layout from './layout.jsx'
import { Input, Heading, Link, FormControl, FormLabel, Flex, Textarea } from '@chakra-ui/react'

export default function ListagemProdutos(props) {
  return (
    <Layout>
      <Flex align='center' justify='center' direction='column' h={700}>
        <Heading mb={6}> {props.title} </Heading>

        <form action={`${props.action}`} method='POST'>
          <FormControl isRequired mb={6} w={'18rem'}>
            <FormLabel>Nome</FormLabel>
            <Input name='nome' defaultValue={props.produto.nome} />
          </FormControl>
          <FormControl mb={6} w={'18rem'} isReadOnly>
            <FormLabel>Telefone</FormLabel>
            <Input /* name='quantidade' */ defaultValue={props.produto.quantidade} border={0} />
          </FormControl>
          <FormControl isRequired mb={6} w={'18rem'}>
            <FormLabel>CEP</FormLabel>
            <Textarea name='descricao' defaultValue={props.produto.cep} />
          </FormControl>
          <FormControl isRequired mb={6} w={'18rem'}>
            <FormLabel>Numero</FormLabel>
            <Textarea name='descricao' defaultValue={props.produto.numero} />
          </FormControl>
          <Input mb={6} type='submit' value='Salvar' w={'14rem'} />
          <Flex>
            <Link color='red' href={'/listagemprodutos'} textAlign='center' w={'18rem'}>
              Cancelar
            </Link>
          </Flex>
        </form>
      </Flex>
    </Layout>
  )
}
