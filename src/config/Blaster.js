const ImagensVermelho = {
    img_vermelho_1: require('../Img/BLASTER/Blaster_Vermelho_1.png'),
    img_vermelho_2:  require('../Img/BLASTER/Blaster_Vermelho_2.png'),
    img_vermelho_3: require('../Img/BLASTER/Blaster_Vermelho_3.png'),
    img_vermelho_4:  require('../Img/BLASTER/Blaster_Vermelho_4.png'),
    img_vermelho_5: require('../Img/BLASTER/Blaster_Vermelho_5.png'),
    img_vermelho_6:  require('../Img/BLASTER/Blaster_Vermelho_6.png'),
    img_vermelho_7: require('../Img/BLASTER/Blaster_Vermelho_7.png'),
    img_vermelho_8:  require('../Img/BLASTER/Blaster_Vermelho_8.png'),
    img_vermelho_9: require('../Img/BLASTER/Blaster_Vermelho_9.png'),
    img_vermelho_10:  require('../Img/BLASTER/Blaster_Vermelho_10.png'),
    img_vermelho_11: require('../Img/BLASTER/Blaster_Vermelho_11.png'),
    img_vermelho_12:  require('../Img/BLASTER/Blaster_Vermelho_12.png'),
    img_vermelho_13: require('../Img/BLASTER/Blaster_Vermelho_13.png'),
    img_vermelho_14:  require('../Img/BLASTER/Blaster_Vermelho_14.png'),
    img_vermelho_15: require('../Img/BLASTER/Blaster_Vermelho_15.png'),
    img_vermelho_16:  require('../Img/BLASTER/Blaster_Vermelho_16.png'),
    img_vermelho_17: require('../Img/BLASTER/Blaster_Vermelho_17.png'),
    img_vermelho_18:  require('../Img/BLASTER/Blaster_Vermelho_18.png'),
    img_vermelho_19: require('../Img/BLASTER/Blaster_Vermelho_19.png'),
    img_vermelho_20:  require('../Img/BLASTER/Blaster_Vermelho_20.png'),
    img_vermelho_21: require('../Img/BLASTER/Blaster_Vermelho_21.png'),
}

const ImagensAzul = {
    img_azul_1: require('../Img/BLASTER/Blaster_AZUL-1.png'),
    img_azul_2:  require('../Img/BLASTER/Blaster_AZUL-2.png'),
    img_azul_3: require('../Img/BLASTER/Blaster_AZUL-3.png'),
    img_azul_4:  require('../Img/BLASTER/Blaster_AZUL-4.png'),
    img_azul_5: require('../Img/BLASTER/Blaster_AZUL-5.png'),
    img_azul_6:  require('../Img/BLASTER/Blaster_AZUL-6.png'),
    img_azul_9: require('../Img/BLASTER/Blaster_AZUL-9.png'),
    img_azul_10:  require('../Img/BLASTER/Blaster_AZUL-10.png'),
    img_azul_11: require('../Img/BLASTER/Blaster_AZUL-11.png'),
    img_azul_12:  require('../Img/BLASTER/Blaster_AZUL-12.png'),
    img_azul_13: require('../Img/BLASTER/Blaster_AZUL-13.png'),
    img_azul_14:  require('../Img/BLASTER/Blaster_AZUL-14.png'),
    img_azul_15: require('../Img/BLASTER/Blaster_AZUL-15.png'),
    img_azul_16:  require('../Img/BLASTER/Blaster_AZUL-16.png'),
    img_azul_17: require('../Img/BLASTER/Blaster_AZUL-17.png'),
    img_azul_18:  require('../Img/BLASTER/Blaster_AZUL-18.png'),
    img_azul_19: require('../Img/BLASTER/Blaster_AZUL-19.png'),
    img_azul_20:  require('../Img/BLASTER/Blaster_AZUL-20.png'),
    img_azul_21: require('../Img/BLASTER/Blaster_AZUL-21.png'),
    img_azul_22:  require('../Img/BLASTER/Blaster_AZUL-22.png')
}
const BlasterVermelha = [];
const BlasterAzul = [];

for (const chave in ImagensVermelho) {
  BlasterVermelha.push(ImagensVermelho[chave]);
}
for (const chave in ImagensAzul) {
    BlasterAzul.push(ImagensAzul[chave]);
}

export {BlasterVermelha,BlasterAzul};