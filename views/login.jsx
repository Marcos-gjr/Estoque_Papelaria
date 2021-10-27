import React from 'react'

export default function HelloMessage() {
  return (
    <div>
      <h2>Identifique-se</h2>
      <form name="frmLogin" method="POST">
        <table>
          <tr>
            <td>Usuário</td>
            <td>
              <input type="text" name="txtUsuario" />
            </td>
          </tr>
          <tr>
            <td>Senha</td>
            <td>
              <input type="password" name="pswSenha" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input type="submit" value="Entrar" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}
