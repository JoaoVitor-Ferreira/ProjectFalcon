import {BlasterVermelha,BlasterAzul} from '../config/Blaster.js';
import {WakeAzul} from '../config/Wake.js';
import {FuryAzul, FuryPreta, FuryVermelha} from '../config/Fury.js'
import {Cosmic_Preta, Cosmic_Azul, Cosmic_Vermelha} from '../config/Cosmic';
import { BrighterImagens } from '../config/Brighter';
import { MeteoraImg } from '../config/Meteora';

const CosmicImg = [];
const CosmicBlack = [];
const CosmicBlue = [];
const CosmicRed = [];

const ImgWake = [];
const BrighterImg = [];
const ImgMeteora = [];

const FuryImg = [];
const FuryBlue = [];
const FuryRed =[];
const FuryBlack = [];

const BlasterImg = [];
const BlasterBlue = [];
const BlasterRed =[];

//Cores: Vermelho - Azul - Preta

BlasterVermelha.forEach(item => {BlasterImg.push(item);BlasterRed.push(item);});
BlasterAzul.forEach(item =>{BlasterImg.push(item);BlasterBlue.push(item);});

FuryAzul.forEach(item => {FuryImg.push(item); FuryBlue.push(item);});
FuryPreta.forEach(item => {FuryImg.push(item); FuryBlack.push(item);});
FuryVermelha.forEach(item => {FuryImg.push(item); FuryRed.push(item);});


MeteoraImg.forEach(item => {ImgMeteora.push(item);});
BrighterImagens.forEach(item => {BrighterImg.push(item);});
WakeAzul.forEach(item =>{ImgWake.push(item);});

Cosmic_Preta.forEach(item => {CosmicImg.push(item); CosmicBlack.push(item);});
Cosmic_Azul.forEach(item => {CosmicImg.push(item);CosmicBlue.push(item);});
Cosmic_Vermelha.forEach(item => {CosmicImg.push(item);CosmicRed.push(item);});


const InfoProdutos = [
  {
    id: 1,
    nome: "Cadeira Blaster",
    src: BlasterImg,
    variante: [{
      cor:'vermelho',
      img: BlasterRed
    },
     {
      cor:'azul',
      img: BlasterBlue
     }
  ],
    descricao: `
    <div class = 'Texto-Descricao'>
    <p class = 'First-Text'>Se você procura uma cadeira que una estilo, conforto e estética para aprimorar sua experiência gamer, a <strong>Cadeira Gamer Falcon - Blaster</strong> é a escolha definitiva. Com dimensões profissionais, características físicas distintas e recursos que elevam sua experiência, esta cadeira é uma obra-prima do design e ergonomia.</p>
    
    <h2 class = 'H2-Descricao'>Público-Alvo Sem Limites</h2>
    
    <p class = 'pSimple'>A <strong>Falcon - Blaster</strong> é projetada para atender tanto os gamers apaixonados quanto os entusiastas de tecnologia. Seja você um gamer dedicado ou alguém que valoriza o conforto e o estilo em suas atividades de escritório, esta cadeira atende a todas as necessidades.</p>
    
    <h2 class = 'H2-Descricao'>Construção Robusta</h2>
    
    <p class = 'pSimple'>Esta cadeira se destaca com suas dimensões profissionais, costura reforçada e estrutura resistente que suporta até 150 kg. A durabilidade e a robustez são elementos-chave que a diferenciam no mercado.</p>
    
    <h2 class = 'H2-Descricao'>Ergonomia Personalizada</h2>
    
    <p class = 'pSimple'>A <strong>Falcon - Blaster</strong> oferece ajustes ergonômicos para se adaptar perfeitamente ao seu corpo, garantindo uma postura ideal durante longas sessões de jogo. As almofadas adicionam suporte para as costas e pescoço, maximizando o conforto.</p>
    
    <h2 class = 'H2-Descricao'>Estilo e Personalização</h2>
    
    <p class = 'pSimple'>Além do conforto, esta cadeira se destaca pelo seu design premium e opções de cores em preto, azul e vermelho. Você pode personalizar a estética do seu espaço de jogo de acordo com seu gosto.</p>
    
    <h2 class = 'H2-Descricao'>Qualidade Premium</h2>
    
    <p class = 'pSimple'>A costura reforçada, a espuma de alta densidade e o pistão premium são características que demonstram o compromisso com a qualidade e durabilidade desta cadeira.</p>
    
    <h2 class = 'H2-Descricao'>Suporte Adicional</h2>
    
    <p class = 'pSimple'>A <strong>Cadeira Gamer Falcon - Blaster</strong> incorpora uma almofada de suporte para costas/pescoço, proporcionando um suporte adicional que faz toda a diferença na sua experiência.</p>
    
    <h2 class = 'H2-Descricao'>Garantia de Qualidade</h2>
    
    <p class = 'pSimple'>Oferecemos uma garantia de 90 dias para defeitos de fabricação, garantindo sua satisfação e tranquilidade.</p>
    
    <h2 class = 'H2-Descricao'>História da Marca</h2>
    
    <p class = 'pSimple'>As cadeiras Falcon fazem parte da evolução contínua do Grupo MVX, dedicado a criar produtos para atender às necessidades de consumidores exigentes que buscam soluções para o home office e maratonas de jogos.</p>
    
    <h2 class = 'H2-Descricao'>Marca de Referência</h2>
    
    <p class = 'pSimple'>A Falcon é uma marca do Grupo MVX comprometida em atender às necessidades do público gamer com produtos de alta qualidade, estabelecendo um novo padrão em relação a outros produtos de entrada no mercado.</p>
    
    <p class = 'pSimple'>Eleve seu conforto, estilo e desempenho com a <strong>Cadeira Gamer Falcon - Blaster</strong>. Sinta a diferença a cada sessão de jogo ou trabalho.</p>   </div> 
    `,
    TituloProduto: `<p class ='TituloProduto'>Cadeira Gamer Falcon Blaster</p>`,
    SubTitulo: `<p class ='SubTitulo'>Estilo, Conforto e Desempenho em Sintonia</p>`,
    link: "//www.maniavirtual.com.br/produtos/cadeira-gamer-prizi-runner-amarela/",
    manual: "https://drive.google.com/file/d/17uy3eJYziMyCeVLnC6nAPRauPd8WTq80/view"
  },
  {
    id: 2,
    nome: "Cadeira Brighter",
    src: BrighterImg,
    variante: [{
      cor:"none",
      }],
    descricao: `
    <div class='Texto-Descricao'>
    <p class='First-Text'>A <strong>Cadeira Gamer Falcon RGB - Brighter</strong> é uma verdadeira obra-prima de design e estética, projetada para elevar sua experiência gamer a novos patamares. Com características físicas distintas e recursos impressionantes, esta cadeira é a escolha ideal para os jogadores que buscam estilo e conforto.</p>
    
    <h2 class='H2-Descricao'>Público-Alvo Sem Limites de Idade</h2>
    
    <p class='pSimple'>Destinada a gamers de todas as idades, a Falcon RGB - Brighter atrai especialmente aqueles com idade entre 15 e 24 anos, independentemente de sua experiência com cadeiras gamer. Esta cadeira oferece muito mais do que um simples assento; ela é uma declaração de estilo e funcionalidade.</p>
    
    <h2 class='H2-Descricao'>Design e Conforto Premium</h2>
    
    <p class='pSimple'>Esta cadeira se destaca por seu material reforçado, pistão premium, costura dupla e, é claro, sua incrível iluminação RGB. Com ajustes ergonômicos de altura e um encosto reclinável, você pode personalizar a cadeira para se adequar à sua postura e preferências. A iluminação RGB, que oferece opções de cores personalizáveis, adiciona um toque de estilo e ambiente ao seu espaço de jogo.</p>
    
    <h2 class='H2-Descricao'>Durabilidade e Qualidade</h2>
    
    <p class='pSimple'>A Falcon RGB - Brighter se diferencia no mercado graças à sua estrutura reforçada e ao pistão premium, garantindo uma vida útil prolongada. Além disso, as costuras reforçadas e o material premium utilizados na fabricação são evidências da qualidade excepcional desta cadeira.</p>
    
    <h2 class='H2-Descricao'>Suporte Ergonômico</h2>
    
    <p class='pSimple'>Para uma experiência de jogo confortável, esta cadeira incorpora almofadas para pescoço e lombar, proporcionando o suporte necessário durante longas sessões de jogo.</p>
    
    <h2 class='H2-Descricao'>Garantia de Qualidade</h2>
    
    <p class='pSimple'>Oferecemos uma garantia de 90 dias para defeitos de fabricação, para que você possa desfrutar de sua cadeira com total tranquilidade.</p>
    
    <h2 class='H2-Descricao'>História da Marca</h2>
    
    <p class='pSimple'>As cadeiras Falcon fazem parte da evolução contínua do Grupo MVX, dedicado a criar produtos que atendam às necessidades de consumidores exigentes em busca de soluções para o home office e maratonas de jogos.</p>
    
    <h2 class='H2-Descricao'>Marca de Referência</h2>
    
    <p class='pSimple'>A Falcon é uma marca do Grupo MVX comprometida em atender às necessidades do público gamer com produtos de alta qualidade, estabelecendo um novo padrão em relação a outros produtos de entrada no mercado.</p>

    <p class='Last-Text'>Eleve seu espaço de jogo a um novo nível de estilo, conforto e funcionalidade com a Cadeira Gamer Falcon RGB - Brighter. Ilumine suas aventuras virtuais e mergulhe em uma experiência gamer única.</p>   
</div>`,
    TituloProduto: `<p class = 'TituloProduto'>Cadeira Gamer Falcon RGB Brighter</p>`,
    SubTitulo: `<p>Ilumine Seu Espaço de Jogo com Estilo e Conforto</p>`,
    link: "//www.maniavirtual.com.br/produtos/cadeira-gamer-prizi-runner-amarela/",
    manual: "https://drive.google.com/file/d/1fji0oxvo0Kzgo9DsfRu7cxOxWHuv74dr/view"
  },
  {
    id: 3,
    nome: "Cadeira Cosmic",
    src: CosmicImg,
    variante:[
      {
        cor:'preta',
        img:CosmicBlack
      },
      {
        cor:'azul',
        img:CosmicBlue
      },
      {
        cor:'vermelho',
        img: CosmicRed
      }
    ],
    descricao: `
    <div class='Texto-Descricao'>
    <p class='First-Text'>A <strong>Cadeira Falcon Cosmic</strong> é a escolha definitiva para gamers experientes que buscam o máximo em conforto, desempenho e estilo. Projetada para atender às demandas dos jogadores mais exigentes, esta cadeira oferece características físicas distintas e recursos que a destacam no mercado.</p>
    
    <h2 class='H2-Descricao'>Conforto e Desempenho de Alto Nível</h2>
    
    <p class='pSimple'>Se você é um gamer experiente em busca de uma cadeira que eleve sua experiência a novos patamares, a Falcon Cosmic é a resposta. Combinando conforto excepcional e desempenho de alto nível, esta cadeira é projetada para longas sessões de jogo e trabalho.</p>
    
    <h2 class='H2-Descricao'>Público-Alvo Experiente</h2>
    
    <p class='pSimple'>A Falcon Cosmic é direcionada para gamers mais experientes que já possuem cadeiras gamer ou de escritório. Se você busca uma cadeira que atenda às suas necessidades específicas e valoriza a qualidade, esta é a escolha certa.</p>

    <h2 class='H2-Descricao'>Características Físicas Distintas</h2>
    
    <p class='pSimple'>Esta cadeira se destaca com braços ajustáveis em diversas posições, espuma premium de alta densidade e uma estrutura reforçada. Além disso, oferece ajuste de altura e almofadas para lombar e pescoço, proporcionando o máximo de conforto.</p>

    <h2 class='H2-Descricao'>Recursos para Melhorar a Experiência</h2>
    
    <p class='pSimple'>A Falcon Cosmic oferece uma gama de recursos para melhorar sua experiência. Com ajustes ergonômicos, encosto reclinável até 180 graus e almofadas de lombar e pescoço, você pode personalizar sua cadeira para atender às suas necessidades específicas.</p>

    <h2 class='H2-Descricao'>Design Premium e Resistência</h2>
    
    <p class='pSimple'>A cadeira se diferencia pela estrutura resistente, pistão reforçado e design agressivo. O excelente acabamento e a costura reforçada com material especial adicionam um toque de elegância.</p>

    <h2 class='H2-Descricao'>Variedade de Cores</h2>
    
    <p class='pSimple'>Disponível nas cores vermelha, preta e azul, a escolha da cor pode refletir seu estilo pessoal e fazer da sua área de jogo um ambiente único.</p>

    <h2 class='H2-Descricao'>Detalhes de Design Exclusivos</h2>
    
    <p class='pSimple'>A Falcon Cosmic apresenta um sistema de fixação de encosto e assento reforçados e de fácil instalação, garantindo durabilidade e estabilidade.</p>

    <h2 class='H2-Descricao'>Suporte Ergonômico</h2>
    
    <p class='pSimple'>Além disso, a cadeira incorpora almofadas na lombar e um design próprio para atender às principais necessidades ergonômicas, mantendo sua postura ideal durante as longas sessões.</p>

    <h2 class='H2-Descricao'>Garantia de Durabilidade</h2>
    
    <p class='pSimple'>Com materiais resistentes em seu processo de fabricação, a Falcon Cosmic é respaldada por uma garantia de 90 dias contra defeitos de fabricação.</p>

    <h2 class='H2-Descricao'>História da Marca</h2>
    
    <p class='pSimple'>As cadeiras Falcon fazem parte da evolução do Grupo MVX, que se dedica a criar produtos para atender às necessidades de consumidores exigentes que buscam soluções para o home office e maratonas de jogos.</p>

    <h2 class='H2-Descricao'>Marca de Confiança</h2>
    
    <p class='Last-Text'>A Falcon é uma marca do Grupo MVX, comprometida em atender às necessidades do público gamer com produtos de alta qualidade, elevando o padrão em relação a outros produtos de entrada no mercado. Descubra o próximo nível de conforto, desempenho e estilo com a Cadeira Falcon Cosmic e eleve sua experiência gamer a patamares inimagináveis.</p>
</div>
`,
    TituloProduto:`<p class = 'TituloProduto'>Cadeira Falcon Cosmic</p>`,
    SubTitulo: `Conforto, Desempenho e Estilo para Gamers Experientes`,
    link: "//www.maniavirtual.com.br/produtos/cadeira-gamer-prizi-runner-amarela/",
    manual: "https://drive.google.com/file/d/1wwNQPqE6kfPcAsW7PeQtpVmJpiMAFSqs/view"
  },
  {
    id: 4,
    nome: "Cadeira Fury",
    src: FuryImg,
    descricao: `
    <div class='Texto-Descricao'>
    <p class='First-Text'>A <strong>Cadeira Gamer Falcon - Fury</strong> é a escolha ideal para quem está ingressando no universo dos jogos e busca a primeira experiência com uma cadeira gamer de qualidade. Com um estilo agressivo e recursos essenciais, esta cadeira é projetada para proporcionar conforto e suporte durante suas jornadas no mundo virtual.</p>
    
    <h2 class='H2-Descricao'>Público-Alvo</h2>
    
    <p class='pSimple'>Esta cadeira foi cuidadosamente projetada para atender aos iniciantes no mundo gamer. Se você está dando seus primeiros passos nessa emocionante jornada, a Falcon - Fury é a parceira perfeita. Para jogadores mais experientes, outras opções da nossa marca podem ser mais adequadas às suas necessidades específicas.</p>

    <h2 class='H2-Descricao'>Características Físicas</h2>
    
    <p class='pSimple'>A Falcon - Fury possui características que a tornam uma cadeira gamer confiável. Com espuma de alta densidade e um pistão reforçado, ela suporta até 150 kg de peso. Suas dimensões são projetadas para acomodar diferentes tipos de corpo, com uma altura máxima de 114 cm e uma largura máxima de 62 cm.</p>

    <h2 class='H2-Descricao'>Recursos para a Melhoria da Experiência</h2>
    
    <p class='pSimple'>Esta cadeira oferece recursos essenciais para melhorar sua experiência de jogo. Com altura ajustável e almofada lombar, você pode personalizar seu conforto durante longas sessões de jogo.</p>

    <h2 class='H2-Descricao'>Diferenciais no Mercado</h2>
    
    <p class='pSimple'>A Falcon - Fury se destaca no mercado de cadeiras gamers de entrada por oferecer uma qualidade de material superior. Com costura reforçada e componentes como pistão e rodinhas mais resistentes, esta cadeira foi projetada para durar.</p>

    <h2 class='H2-Descricao'>Variedade de Cores</h2>
    
    <p class='pSimple'>Escolha a cor que mais combina com seu estilo, pois a Falcon - Fury está disponível nas cores vermelha, azul e preta.</p>

    <h2 class='H2-Descricao'>Durabilidade e Garantia</h2>
    
    <p class='pSimple'>Acreditamos na durabilidade de nossos produtos. Por isso, a Falcon - Fury vem com uma garantia de 90 dias, garantindo sua satisfação e confiança no produto.</p>

    <h2 class='H2-Descricao'>Compromisso de Qualidade</h2>
    
    <p class='pSimple'>Nossa cadeira é fabricada com materiais de alta resistência e durabilidade, garantindo que você tenha uma cadeira confiável por um longo período.</p>

    <h2 class='H2-Descricao'>História da Marca</h2>
    
    <p class='Last-Text'>As cadeiras Falcon fazem parte da evolução do Grupo MVX, que se dedica a criar produtos para atender às necessidades de consumidores exigentes que buscam soluções para o home office e maratonas de jogos. A Falcon é uma marca do Grupo MVX, comprometida em atender às necessidades do público gamer com produtos de alta qualidade, elevando o padrão em relação a outros produtos de entrada no mercado. Descubra o próximo nível de conforto, desempenho e estilo com a Cadeira Falcon Cosmic e eleve sua experiência gamer a patamares inimagináveis.</p></div>`,
    variante:[
      {
        cor:'preta',
        img:FuryBlack
      },
      {
        cor:'azul',
        img:FuryBlue
      },
      {
        cor:'vermelho',
        img: FuryRed
      }
    ],
    TituloProduto:`<p class = 'TituloProduto'>Cadeira Gamer Falcon</p>`,
    SubTitulo: `<p>Fury: Sua Aliada para Começar no Mundo Gamer</p>`,
    link: "//www.maniavirtual.com.br/produtos/cadeira-gamer-prizi-runner-amarela/",
    manual: "https://drive.google.com/file/d/13HlB_nkvq7UoH3NBOQwmvcUhsJjNe53H/view"
    
  },
  {
    id: 5,
    nome: "Cadeira Meteora",
    src: MeteoraImg,
    variante: [{
      cor:'none',
      }],
    descricao: `
    <div class='Texto-Descricao'>
    <p class='First-Text'>Se você é um gamer experiente que busca uma cadeira que una conforto e estilo em uma única peça, a <strong>Cadeira Falcon Meteora</strong> é a escolha ideal. Com características físicas distintas e recursos projetados para melhorar sua experiência, esta cadeira é a próxima etapa na sua jornada gamer.</p>
    
    <h2 class='H2-Descricao'>Para Quem É Essa Cadeira?</h2>
    
    <p class='pSimple'>A Cadeira Falcon Meteora é projetada especificamente para gamers que já possuem cadeiras e estão buscando uma atualização. Se você é um jogador que valoriza o conforto e o estilo em suas longas sessões de jogo, a Meteora é a cadeira que você estava esperando.</p>

    <h2 class='H2-Descricao'>Características Físicas que Impressionam</h2>
    
    <p class='pSimple'>Esta cadeira incorpora uma série de características físicas distintas. Com espuma de alta densidade, pistão reforçado, costura dupla para maior durabilidade e ajuste de altura, ela oferece um suporte excepcional durante horas de uso. Os braços ajustáveis em diferentes direções proporcionam uma personalização ainda maior para a sua experiência.</p>

    <h2 class='H2-Descricao'>Recursos Ergonômicos</h2>
    
    <p class='pSimple'>A Meteora também foi projetada com foco na ergonomia. As almofadas de lombar e pescoço proporcionam apoio adicional, garantindo que você se sinta confortável durante suas longas jornadas de gaming.</p>

    <h2 class='H2-Descricao'>Design Agressivo e Opções de Cores</h2>
    
    <p class='pSimple'>Com um design agressivo, a Meteora se destaca no mercado. Disponível nas cores azul, vermelha e preta, você pode escolher aquela que mais combina com o seu estilo.</p>

    <h2 class='H2-Descricao'>Detalhes de Design Robustos</h2>
    
    <p class='pSimple'>Os detalhes de design da Meteora não param por aí. Os suportes de fixação do assento e dos braços são mais resistentes e fáceis de montar, garantindo a durabilidade do produto.</p>

    <h2 class='H2-Descricao'>Tecnologia para o Conforto</h2>
    
    <p class='pSimple'>Além de sua estrutura sólida, a cadeira incorpora almofadas de lombar e pescoço para apoiar sua postura e proporcionar maior conforto durante horas de jogo.</p>

    <h2 class='H2-Descricao'>Durabilidade e Garantia</h2>
    
    <p class='pSimple'>Nossa cadeira é fabricada com materiais de alta resistência e durabilidade, respaldada por uma garantia de 90 dias contra defeitos de fabricação.</p>

    <h2 class='H2-Descricao'>História da Marca</h2>
    
    <p class='Last-Text'>A Cadeira Falcon Meteora faz parte da evolução contínua do Grupo MVX no desenvolvimento de produtos que atendem às necessidades de consumidores exigentes, seja para o home office ou para maratonas de jogos. A marca Falcon é a nossa resposta à demanda do público gamer por produtos que superem as expectativas. Descubra uma nova dimensão de conforto, estilo e durabilidade com a Cadeira Falcon Meteora. É hora de elevar sua experiência gamer para o próximo nível.</p>
</div>
`,
    TituloProduto:`<p class = 'TituloProduto'>Cadeira Falcon Meteora</p>`,
    SubTitulo: `<p> Conforto, Estilo e Durabilidade para os Gamers Experientes</p>`,
    link: "//www.maniavirtual.com.br/produtos/cadeira-gamer-prizi-runner-amarela/",
    manual: "https://drive.google.com/file/d/1e1sQd7GcXvNM-r3Qlx_z0yCzhN-YxSZA/view"
  },
  {
    id: 6,
    nome: "Cadeira Wake",
    src: ImgWake,
    variante: [{
      cor:'none',
      }],
    descricao: `<div class='Texto-Descricao'>
    <p class='First-Text'>A Cadeira Falcon Wake é a escolha perfeita para quem busca uma cadeira de entrada que una conforto e estilo em uma única peça. Projetada para atender às demandas do público que está entrando no mundo gamer, esta cadeira oferece características físicas distintas que a destacam no mercado.</p>
    
    <h2 class='H2-Descricao'>Conforto e Estilo para Iniciantes no Mundo Gamer</h2>
    
    <p class='pSimple'>A Falcon Wake é ideal para aqueles que estão dando os primeiros passos no mundo gamer. Se você valoriza o conforto e o estilo enquanto desbrava novos universos virtuais, esta cadeira foi feita pensando em você.</p>

    <h2 class='H2-Descricao'>Características Físicas Distintas</h2>
    
    <p class='pSimple'>Esta cadeira é fabricada com materiais de alta qualidade e apresenta costura reforçada para garantir sua durabilidade. Com uma altura máxima de 113 cm e uma largura de 61 cm, a Falcon Wake oferece o espaço necessário para acomodar diferentes tipos de corpo. Além disso, seu ajuste de altura de 8 cm permite uma personalização ainda maior.</p>

    <h2 class='H2-Descricao'>Recursos para Melhorar a Experiência</h2>
    
    <p class='pSimple'>Embora seja uma cadeira de entrada, a Falcon Wake oferece um ajuste de altura para proporcionar o suporte necessário durante suas sessões de jogo. Ela foi projetada para atender às demandas ergonômicas do dia a dia, eliminando a necessidade de almofadas adicionais.</p>

    <h2 class='H2-Descricao'>Design Atrativo e Cores Vibrantes</h2>
    
    <p class='pSimple'>Com um design que chama a atenção, esta cadeira está disponível nas cores preta, vermelha e azul. A escolha da cor pode refletir seu estilo pessoal e tornar sua área de jogo ainda mais atraente.</p>

    <h2 class='H2-Descricao'>Durabilidade Garantida</h2>
    
    <p class='pSimple'>A Falcon Wake é sinônimo de durabilidade. Fabricada com materiais de alta resistência, ela é respaldada por uma garantia de 90 dias para defeitos de fabricação.</p>

    <h2 class='H2-Descricao'>Nossa História</h2>
    
    <p class='Last-Text'>A Cadeira Gamer Falcon é fruto da nossa paixão pelo mundo dos games e do nosso compromisso em proporcionar algo realmente especial aos gamers. Ela é o resultado da evolução do Grupo MVX, que sempre buscou criar produtos que atendessem às demandas do público gamer de forma excepcional.
    
    Aqui, acreditamos que os jogadores merecem mais do que apenas uma cadeira. Eles merecem uma experiência aprimorada que torne cada momento nos mundos virtuais ainda mais incrível. É aí que a Cadeira Gamer Falcon entra em cena, como um exemplo real do que podemos oferecer.
    
    Nossa motivação está enraizada na inovação e na busca pela qualidade. Cada cadeira é cuidadosamente projetada e feita com materiais super resistentes, projetados para resistir a horas de jogo e uso diário. Estamos tão confiantes na qualidade do nosso produto que oferecemos uma garantia de 90 dias.
    
    A Cadeira Gamer Falcon é mais do que uma simples cadeira; ela é um símbolo do nosso compromisso com a comunidade gamer. Convidamos você a fazer parte dessa jornada conosco, onde qualidade, conforto e estilo se combinam para aprimorar sua experiência. Descubra como a Falcon pode transformar suas aventuras virtuais e sua rotina. Afinal, acreditamos que você merece o melhor, e é isso que nos inspira a continuar inovando e surpreendendo a cada dia.</p></div>`,
    TituloProduto:`<p class = 'TituloProduto'>Cadeira Falcon Wake</p>`,
    SubTitulo:` Uma Nova Dimensão de Conforto e Estilo`,
    link: "//www.maniavirtual.com.br/produtos/cadeira-gamer-prizi-runner-amarela/",
    manual: "https://drive.google.com/file/d/1CyNEdMMrGtvp86JZOBKrOlPlKcYF5Rx1/view"
  },

];
export { InfoProdutos };
