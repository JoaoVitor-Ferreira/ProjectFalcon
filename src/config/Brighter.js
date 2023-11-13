const BrighterImg = {
    BrighterImg_11 : require('../Img/BRIGHTER/Bright_11.png'), //A primeira foto é a que aparece na página de produtos
    BrighterImg_1 : require('../Img/BRIGHTER/Bright_1.png'),
    BrighterImg_2 : require('../Img/BRIGHTER/Bright_2.png'),
    BrighterImg_3 : require('../Img/BRIGHTER/Bright_3.png'),
    BrighterImg_4 : require('../Img/BRIGHTER/Bright_4.png'),
    BrighterImg_5 : require('../Img/BRIGHTER/Bright_5.png'),
    BrighterImg_6 : require('../Img/BRIGHTER/Bright_6.png'),
    BrighterImg_7 : require('../Img/BRIGHTER/Bright_7.png'),
    BrighterImg_8 : require('../Img/BRIGHTER/Bright_8.png'),
    BrighterImg_9 : require('../Img/BRIGHTER/Bright_9.png'),
    BrighterImg_10 : require('../Img/BRIGHTER/Bright_10.png'),
    BrighterImg_12 : require('../Img/BRIGHTER/Bright_12.png'),
    BrighterImg_13 : require('../Img/BRIGHTER/Bright_13.png'),
    BrighterImg_14 : require('../Img/BRIGHTER/Bright_14.png'),
    BrighterImg_15 : require('../Img/BRIGHTER/Bright_15.png'),
    BrighterImg_16 : require('../Img/BRIGHTER/Bright_16.png'),
    BrighterImg_17 : require('../Img/BRIGHTER/Bright_17.png'),
}
const BrighterImagens = [];

for(const chave in BrighterImg){
    BrighterImagens.push(BrighterImg[chave]);
};

export {BrighterImagens};