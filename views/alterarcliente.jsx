import React from 'react'
import Layout from './layout.jsx'
import { Input, Heading, Link, FormControl, FormLabel, Flex, Textarea } from '@chakra-ui/react'

export default function AlterarCliente(props) {
  return (
    <Layout>
      <Flex align='center' justify='center' direction='column' h={700}>
        <Heading mb={6}> {props.title} </Heading>

        <form action={`${props.action}`} method='POST'>
          <FormControl isRequired mb={6} w={'18rem'}>
            <FormLabel>Nome</FormLabel>
            <Input name='cli_nome' defaultValue={props.cliente ? props.cliente.cli_nome : null} />
          </FormControl>
          <FormControl isRequired mb={6} w={'18rem'}>
            <FormLabel>Telefone</FormLabel>
            <Input name='cli_tel' defaultValue={props.cliente ? props.cliente.cli_tel : null} />
          </FormControl>
          <FormControl isRequired mb={6} w={'18rem'}>
            <FormLabel>CEP</FormLabel>
            <Textarea name='cli_cep' defaultValue={props.cliente ? props.cliente.cli_cep : null} />
          </FormControl>
          <FormControl isRequired mb={6} w={'18rem'}>
            <FormLabel>Numero</FormLabel>
            <Textarea name='cli_num' defaultValue={props.cliente ? props.cliente.cli_num : null} />
          </FormControl>
          <Flex justify='center' align='center' direction='column'>
            <Input mb={6} type='submit' value='Salvar' w={'14rem'} />
            <Link color='red' href={props.cancelar} textAlign='center' w={'4rem'}>
              Cancelar
            </Link>
          </Flex>
        </form>
      </Flex>
    </Layout>
  )
}
