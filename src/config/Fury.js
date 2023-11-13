const imgFuryAzul = {
    img_Fury_1: require('../Img/FURY/FURY-Azul-1.png'),
    img_Fury_2:  require('../Img/FURY/FURY-Azul-2.png'),
    img_Fury_3: require('../Img/FURY/FURY-Azul-3.png'),
    img_Fury_4:  require('../Img/FURY/FURY-Azul-4.png'),
    img_Fury_5: require('../Img/FURY/FURY-Azul-5.png'),
    img_Fury_6:  require('../Img/FURY/FURY-Azul-6.png'),
    img_Fury_7: require('../Img/FURY/FURY-Azul-7.png'),
    img_Fury_8:  require('../Img/FURY/FURY-Azul-8.png'),
    img_Fury_9: require('../Img/FURY/FURY-Azul-9.png'),
    img_Fury_10:  require('../Img/FURY/FURY-Azul-10.png'),
    img_Fury_11: require('../Img/FURY/FURY-Azul-11.png'),
    img_Fury_12:  require('../Img/FURY/FURY-Azul-12.png'),
    img_Fury_13: require('../Img/FURY/FURY-Azul-13.png'),
    img_Fury_14:  require('../Img/FURY/FURY-Azul-14.png'),
    img_Fury_15: require('../Img/FURY/FURY-Azul-15.png'),
    img_Fury_16:  require('../Img/FURY/FURY-Azul-16.png')

}
const imgFuryPreta = {

   img_Fury_Preta_1: require('../Img/FURY/FURY-Preta-1.png'),
   img_Fury_Preta_2:  require('../Img/FURY/FURY-Preta-2.png'),
   img_Fury_Preta_3: require('../Img/FURY/FURY-Preta-3.png'),
   img_Fury_Preta_4:  require('../Img/FURY/FURY-Preta-4.png'),
   img_Fury_Preta_5: require('../Img/FURY/FURY-Preta-5.png'),
   img_Fury_Preta_6:  require('../Img/FURY/FURY-Preta-6.png'),
   img_Fury_Preta_7: require('../Img/FURY/FURY-Preta-7.png'),
   img_Fury_Preta_8:  require('../Img/FURY/FURY-Preta-8.png'),
   img_Fury_Preta_9: require('../Img/FURY/FURY-Preta-9.png'),
   img_Fury_Preta_10:  require('../Img/FURY/FURY-Preta-10.png'),
   img_Fury_Preta_11: require('../Img/FURY/FURY-Preta-11.png'),
   img_Fury_Preta_12:  require('../Img/FURY/FURY-Preta-12.png'),
   img_Fury_Preta_13: require('../Img/FURY/FURY-Preta-13.png'),
   img_Fury_Preta_14:  require('../Img/FURY/FURY-Preta-14.png'),
   img_Fury_Preta_15: require('../Img/FURY/FURY-Preta-15.png'),
   img_Fury_Preta_16:  require('../Img/FURY/FURY-Preta-16.png'),
   img_Fury_Preta_17:  require('../Img/FURY/FURY-Preta-17.png')
}

const imgFuryVermelha = {

    img_Fury_Vermelha_1: require('../Img/FURY/FURY-Vermelha-1.png'),
    img_Fury_Vermelha_2:  require('../Img/FURY/FURY-Vermelha-2.png'),
    img_Fury_Vermelha_3: require('../Img/FURY/FURY-Vermelha-3.png'),
    img_Fury_Vermelha_4:  require('../Img/FURY/FURY-Vermelha-4.png'),
    img_Fury_Vermelha_5: require('../Img/FURY/FURY-Vermelha-5.png'),
    img_Fury_Vermelha_6:  require('../Img/FURY/FURY-Vermelha-6.png'),
    img_Fury_Vermelha_7: require('../Img/FURY/FURY-Vermelha-7.png'),
    img_Fury_Vermelha_8:  require('../Img/FURY/FURY-Vermelha-8.png'),
    img_Fury_Vermelha_9: require('../Img/FURY/FURY-Vermelha-9.png'),
    img_Fury_Vermelha_10:  require('../Img/FURY/FURY-Vermelha-10.png'),
    img_Fury_Vermelha_11: require('../Img/FURY/FURY-Vermelha-11.png'),
    img_Fury_Vermelha_12:  require('../Img/FURY/FURY-Vermelha-12.png'),
    img_Fury_Vermelha_13: require('../Img/FURY/FURY-Vermelha-13.png'),
    img_Fury_Vermelha_14:  require('../Img/FURY/FURY-Vermelha-14.png'),
    img_Fury_Vermelha_15: require('../Img/FURY/FURY-Vermelha-15.png'),
}
const FuryAzul = [];
const FuryPreta = [];
const FuryVermelha = [];

for (const chave in imgFuryAzul) {
    FuryAzul.push(imgFuryAzul[chave]);
}
for(const chave in imgFuryPreta ){
    FuryPreta.push(imgFuryPreta[chave]);
}
for(const chave in imgFuryVermelha){
FuryVermelha.push(imgFuryVermelha[chave]);
}
export {FuryAzul,FuryPreta,FuryVermelha};