import { FormEvent,  useState } from 'react'
import Modal from 'react-modal'
import {Container, TransactionTypeContainer, RadioBox} from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import {api }from '../../services/api'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewTransactionModal ({isOpen, onRequestClose} : NewTransactionModalProps) {
  // Criando um valor no estado para cada input que temos no formulário
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction (ev: FormEvent) {
    ev.preventDefault()

    const data = {
      title,
      value,
      category,
      type,
    }

    api.post('/transactions', data)

    console.log('dados', data)
  }

  return (  
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
          <button type="button" className="react-modal-close"
                  onClick={onRequestClose}>
            <img src={closeImg} alt="Fechar Janela da Nova Transação" />
          </button>
          
          <Container
            onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input type="text" 
              placeholder="Título da Transação"
              value={title}
              onChange={event => setTitle(event.target.value)} />

            <input type="number" placeholder="Valor" 
              value={value}
              onChange={event => setValue(Number(event.target.value))} />

            <TransactionTypeContainer >
               <RadioBox
                 type="button"
                 onClick={() => { setType('deposit') }}
                 isActive={type === 'deposit'} 
                 activeColor="green"
                 >
                 <img src={incomeImg} alt="Entrada" />
                 <span>Entrada</span>
               </RadioBox>

               <RadioBox 
                 type="button"
                 onClick={() => { setType('withdraw') }} 
                 isActive={type !== 'deposit'}   
                 activeColor="red">
                 <img src={outcomeImg} alt="Saída" />
                 <span>Saída</span>
               </RadioBox>

            </TransactionTypeContainer>

            <input placeholder="Categoria" 
                   value={category} 
                   onChange={event => setCategory(event.target.value) } />

            <button type="submit">
              Cadastrar
            </button>
          </Container>
      </Modal>
  )
}