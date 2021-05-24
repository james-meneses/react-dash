import { Container } from './styles'
import { api } from '../../services/api'
import {useEffect} from 'react'

export function TransactionsTable () {
  
  useEffect(() => {
    api.get('/transactions')
      .then(data =>  console.log(data))
    }, [])

  return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Desenvolvimento de Website</td>
              <td className="deposit">R$ 14.000,00</td>
              <td>Entrada</td>
              <td>10/05/2021</td>
            </tr>

            <tr>
              <td>Aluguel</td>
              <td className="withdraw">- R$ 2.500,00</td>
              <td>Saída</td>
              <td>15/05/2021</td>
            </tr>

            <tr>
              <td>Mercado</td>
              <td className="withdraw">- R$ 800,00</td>
              <td>Saída</td>
              <td>10/05/2021</td>
            </tr>
          </tbody>
        </table>
      </Container>
    )
}