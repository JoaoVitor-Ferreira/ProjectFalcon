const imgCosmicAzul = {
    Cosmic_Azul_1: require('../Img/COSMIC/COSMIC-AZUL-1.png'),
    Cosmic_Azul_2: require('../Img/COSMIC/COSMIC-AZUL-2.png'),
    Cosmic_Azul_3: require('../Img/COSMIC/COSMIC-AZUL-3.png'),
    Cosmic_Azul_4: require('../Img/COSMIC/COSMIC-AZUL-4.png'),
    Cosmic_Azul_5: require('../Img/COSMIC/COSMIC-AZUL-5.png'),
    Cosmic_Azul_6: require('../Img/COSMIC/COSMIC-AZUL-6.png'),
    Cosmic_Azul_7: require('../Img/COSMIC/COSMIC-AZUL-7.png'),
    Cosmic_Azul_8: require('../Img/COSMIC/COSMIC-AZUL-8.png'),
    Cosmic_Azul_9: require('../Img/COSMIC/COSMIC-AZUL-9.png'),
    Cosmic_Azul_10: require('../Img/COSMIC/COSMIC-AZUL-10.png'),
    Cosmic_Azul_11: require('../Img/COSMIC/COSMIC-AZUL-11.png'),
    Cosmic_Azul_12: require('../Img/COSMIC/COSMIC-AZUL-12.png'),
    Cosmic_Azul_13: require('../Img/COSMIC/COSMIC-AZUL-13.png'),
    Cosmic_Azul_14: require('../Img/COSMIC/COSMIC-AZUL-14.png'),
    Cosmic_Azul_15: require('../Img/COSMIC/COSMIC-AZUL-15.png'),
    Cosmic_Azul_16: require('../Img/COSMIC/COSMIC-AZUL-16.png'),
    Cosmic_Azul_17: require('../Img/COSMIC/COSMIC-AZUL-17.png'),
    Cosmic_Azul_18: require('../Img/COSMIC/COSMIC-AZUL-18.png'),
    Cosmic_Azul_19: require('../Img/COSMIC/COSMIC-AZUL-19.png'),
    Cosmic_Azul_20: require('../Img/COSMIC/COSMIC-AZUL-20.png'),
}
const imgCosmicPreta = {
    Cosmic_PRETA_1: require('../Img/COSMIC/COSMIC-PRETA-1.png'),
    Cosmic_PRETA_2: require('../Img/COSMIC/COSMIC-PRETA-2.png'),
    Cosmic_PRETA_3: require('../Img/COSMIC/COSMIC-PRETA-3.png'),
    Cosmic_PRETA_4: require('../Img/COSMIC/COSMIC-PRETA-4.png'),
    Cosmic_PRETA_5: require('../Img/COSMIC/COSMIC-PRETA-5.png'),
    Cosmic_PRETA_6: require('../Img/COSMIC/COSMIC-PRETA-6.png'),
    Cosmic_PRETA_7: require('../Img/COSMIC/COSMIC-PRETA-7.png'),
    Cosmic_PRETA_8: require('../Img/COSMIC/COSMIC-PRETA-8.png'),
    Cosmic_PRETA_9: require('../Img/COSMIC/COSMIC-PRETA-9.png'),
    Cosmic_PRETA_10: require('../Img/COSMIC/COSMIC-PRETA-10.png'),
    Cosmic_PRETA_11: require('../Img/COSMIC/COSMIC-PRETA-11.png'),
    Cosmic_PRETA_12: require('../Img/COSMIC/COSMIC-PRETA-12.png'),
    Cosmic_PRETA_13: require('../Img/COSMIC/COSMIC-PRETA-13.png'),
    Cosmic_PRETA_14: require('../Img/COSMIC/COSMIC-PRETA-14.png'),
    Cosmic_PRETA_15: require('../Img/COSMIC/COSMIC-PRETA-15.png'),
    Cosmic_PRETA_16: require('../Img/COSMIC/COSMIC-PRETA-16.png'),
    Cosmic_PRETA_17: require('../Img/COSMIC/COSMIC-PRETA-17.png'),
    Cosmic_PRETA_18: require('../Img/COSMIC/COSMIC-PRETA-18.png'),
    Cosmic_PRETA_19: require('../Img/COSMIC/COSMIC-PRETA-19.png'),
}
const imgCosmicVermelha = {
    Cosmic_VERMELHA_1: require('../Img/COSMIC/COSMIC-VERMELHA-1.png'),
    Cosmic_VERMELHA_2: require('../Img/COSMIC/COSMIC-VERMELHA-2.png'),
    Cosmic_VERMELHA_3: require('../Img/COSMIC/COSMIC-VERMELHA-3.png'),
    Cosmic_VERMELHA_4: require('../Img/COSMIC/COSMIC-VERMELHA-4.png'),
    Cosmic_VERMELHA_5: require('../Img/COSMIC/COSMIC-VERMELHA-5.png'),
    Cosmic_VERMELHA_6: require('../Img/COSMIC/COSMIC-VERMELHA-6.png'),
    Cosmic_VERMELHA_7: require('../Img/COSMIC/COSMIC-VERMELHA-7.png'),
    Cosmic_VERMELHA_8: require('../Img/COSMIC/COSMIC-VERMELHA-8.png'),
    Cosmic_VERMELHA_9: require('../Img/COSMIC/COSMIC-VERMELHA-9.png'),
    Cosmic_VERMELHA_10: require('../Img/COSMIC/COSMIC-VERMELHA-10.png'),
    Cosmic_VERMELHA_11: require('../Img/COSMIC/COSMIC-VERMELHA-11.png'),
    Cosmic_VERMELHA_12: require('../Img/COSMIC/COSMIC-VERMELHA-12.png'),
    Cosmic_VERMELHA_13: require('../Img/COSMIC/COSMIC-VERMELHA-13.png'),
    Cosmic_VERMELHA_14: require('../Img/COSMIC/COSMIC-VERMELHA-14.png'),
    Cosmic_VERMELHA_15: require('../Img/COSMIC/COSMIC-VERMELHA-15.png'),
    Cosmic_VERMELHA_16: require('../Img/COSMIC/COSMIC-VERMELHA-16.png'),
    Cosmic_VERMELHA_17: require('../Img/COSMIC/COSMIC-VERMELHA-17.png'),
    Cosmic_VERMELHA_18: require('../Img/COSMIC/COSMIC-VERMELHA-18.png'),
    Cosmic_VERMELHA_19: require('../Img/COSMIC/COSMIC-VERMELHA-19.png')
}

const Cosmic_Preta = [];
const Cosmic_Azul = [];
const Cosmic_Vermelha = [];

for(const chave in imgCosmicPreta){
    Cosmic_Preta.push(imgCosmicPreta[chave]);
}
for(const chave in imgCosmicAzul){
Cosmic_Azul.push(imgCosmicAzul[chave]);
}
for(const chave in imgCosmicVermelha){
    Cosmic_Vermelha.push(imgCosmicVermelha[chave]);
}

export {Cosmic_Preta, Cosmic_Azul, Cosmic_Vermelha};