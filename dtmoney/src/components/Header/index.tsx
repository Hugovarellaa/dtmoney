import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


interface HeaderProps {
    onClickOpenNewTransacionModal : ()=> void;
}


export function Header({onClickOpenNewTransacionModal}: HeaderProps) {
  

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onClickOpenNewTransacionModal} >
                    Nova transação
            </button>

            </Content>
        </Container>
    )
}