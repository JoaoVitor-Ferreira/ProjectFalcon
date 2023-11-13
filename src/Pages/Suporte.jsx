import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import '../Pages/Css/Suporte.css';
import Footer from './Footer.jsx';

function Suporte() {
  const [openItems, setOpenItems] = useState({}); // Inicializa como um objeto vazio

const quest = [
    {
        Titulo: 'Qual a diferença entre uma cadeira gamer e uma cadeira comum?',
        text: 'As cadeiras gamer são projetadas especialmente para oferecer conforto e suporte durante longas sessões de jogo. Elas possuem ajustes ergonômicos, apoio para a coluna e encosto reclinável, garantindo uma experiência mais confortável para jogadores.'
    },
    {
        Titulo: 'Quais benefícios as cadeiras gamer oferecem para os jogadores?',
        text: 'As cadeiras gamer proporcionam suporte ergonômico, reduzindo a fadiga e desconforto durante sessões prolongadas de jogo. Elas também ajudam a manter uma postura adequada, evitando problemas de coluna e desconfortos físicos.'
    },
    {
        Titulo: 'Qual o peso máximo suportado pelas cadeiras gamer?',
        text: 'O peso máximo suportado pode variar entre os modelos, mas geralmente é de 100 a 150 kg. Recomendamos verificar as especificações de cada produto para confirmar o limite de peso.'
    },
    {
        Titulo: 'As cadeiras gamer possuem ajustes de altura e inclinação?',
        text: 'Sim, todas as nossas cadeiras gamer possuem ajuste de altura do assento e reclinação do encosto. Além disso, elas podem ter ajustes adicionais, como apoio para os braços e apoio lombar.'
    },
    {
        Titulo: 'As cadeiras gamer vêm montadas ou precisam ser montadas em casa?',
        text: 'Nossas cadeiras gamer são enviadas desmontadas para facilitar o transporte e reduzir os custos de envio. No entanto, elas vêm acompanhadas de um manual de instruções detalhado para facilitar a montagem em casa.'
    },
    {
        Titulo: 'As cadeiras gamer são adequadas para pessoas de diferentes alturas?',
        text: 'Sim, as cadeiras gamer são projetadas para atender a diferentes alturas e tamanhos de corpo. A maioria dos modelos possui ajuste de altura do assento e dos apoios de braço, permitindo que você encontre a posição mais confortável para sua estatura.'
    },
    {
        Titulo:'Quais materiais são utilizados nas cadeiras gamer?',
        text: 'Nossas cadeiras gamer são fabricadas com materiais de alta qualidade, geralmente com revestimento em couro sintético ou tecido respirável. A estrutura interna é feita de metal resistente, proporcionando durabilidade e suporte.'
    },
    {
        Titulo:'Como faço para limpar e manter minha cadeira gamer?' ,
        text:'Recomendamos limpar a cadeira regularmente com um pano úmido e detergente suave. Evite o uso de produtos químicos agressivos que possam danificar o revestimento. Para manter a durabilidade da cadeira, evite expor ao sol direto e realizar ajustes corretos para evitar sobrecargas.'
    },
    {
        Titulo:'As cadeiras gamer possuem garantia?',
        text:'Sim, todas as nossas cadeiras gamer são acompanhadas de garantia. Os termos podem variar de acordo com o modelo, mas geralmente oferecemos garantia contra defeitos de fabricação por um determinado período de tempo. Verifique o manual do produto para obter detalhes específicos.'
    },
    {
        Titulo:'As cadeiras gamer vêm com suporte para apoio de cabeça?',
        text:'Sim, muitos dos nossos modelos de cadeiras gamer são equipados com um apoio de cabeça ajustável para fornecer conforto e suporte adicionais durante longas sessões de jogo.'
    },
    {
        Titulo:'As cadeiras gamer possuem sistema de ajuste de inclinação do encosto?',
        text:'Sim, a maioria das nossas cadeiras gamer permite o ajuste do ângulo do encosto para que você possa encontrar a posição mais confortável para jogar ou relaxar.'
    },
    {
        Titulo:'As cadeiras gamer são adequadas para uso em escritório ou apenas para jogos?' ,
        text:'As cadeiras gamer são projetadas para serem confortáveis durante longas horas de uso, o que as torna adequadas para uso em escritório também. Sua ergonomia e ajustes podem proporcionar um ambiente de trabalho mais confortável.'
    },
    {
        Titulo:'Qual é a vida útil média de uma cadeira gamer?' ,
        text:'A vida útil média de uma cadeira gamer pode variar dependendo do modelo, qualidade de construção e manutenção adequada. Em geral, espera-se que uma cadeira gamer bem cuidada dure vários anos.'
    },
    {
        Titulo:'As cadeiras gamer são compatíveis com quais tipos de piso?' ,
        text:'Nossas cadeiras gamer possuem rodas projetadas para uso em diversos tipos de pisos, incluindo carpete, piso laminado e piso frio. No entanto, recomendamos o uso de um tapete protetor em pisos mais delicados para evitar danos.'
    },
    {
        Titulo:'Vocês oferecem opções de parcelamento ou descontos na compra das cadeiras gamer?' ,
        text:'Sim, oferecemos opções de parcelamento em algumas das nossas cadeiras gamer. Além disso, periodicamente realizamos promoções e descontos especiais em nossos produtos.'
    },
    {
        Titulo:'Como posso escolher a cadeira gamer certa para o meu corpo e necessidades?' ,
        text:'Para escolher a cadeira gamer ideal, é importante considerar sua altura, peso e preferências de conforto. Verifique as especificações técnicas de cada modelo, leia avaliações de outros clientes e, se possível, experimente a cadeira pessoalmente em uma loja física antes de fazer a compra.'
    },
    {
        Titulo:'Vocês oferecem assistência técnica ou suporte pós-venda para as cadeiras gamer?' ,
        text:'Sim, oferecemos suporte pós-venda e assistência técnica para nossas cadeiras gamer. Caso você tenha algum problema ou dúvida, nossa equipe estará pronta para ajudar.'
    },
    {
        Titulo:'As cadeiras gamer vêm com almofadas de apoio lombar e de pescoço?' ,
        text:'Sim, muitos dos nossos modelos de cadeiras gamer são acompanhados por almofadas de apoio lombar e de pescoço ajustáveis, proporcionando maior conforto e suporte para a coluna durante as sessões de jogo.'
    },
    {
        Titulo:'Vocês fazem entregas em todo o país?' ,
        text:'Sim, fazemos entregas em todo o país. Nossas cadeiras gamer podem ser adquiridas através de lojas parceiras autorizadas. Verifique a disponibilidade em sua região.'
    },

  ]

  function toggleOpen(index) {
    setOpenItems((prevOpenItems) => {
      let newOpenItems = {...prevOpenItems};
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  }

  return (
    <div className='MainQuest'>
      <div className='ContainerQuest'>
      {quest.map((quest, index) => (
        <div key={index} className='BoxQuest'>
          <Button
            onClick={() => toggleOpen(index)}
            aria-controls={`example-collapse-text-${index}`}
            aria-expanded={openItems[index] || false}
            className='Bottao'
          >
            {quest.Titulo}
          </Button>
          <Collapse in={openItems[index] || false}>
            <div id={`example-collapse-text-${index}`} className='BoxText'>
              {quest.text}
            </div>
          </Collapse>
        </div>
      ))}
      </div>
        <Footer ></Footer>
    </div>
  );
}

export default Suporte;