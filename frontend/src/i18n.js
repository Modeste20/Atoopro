import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import { Contact_EN } from './translations/en/contact';
import { Home_EN } from './translations/en/home';
import { Contact_FR } from './translations/fr/contact';
import { Home_FR } from './translations/fr/home';

i18n
.use(initReactI18next)
.init({
    resources:{
        'en':{
            home:Home_EN,
            contact:Contact_EN
        },
        'fr':{
            home:Home_FR,
            contact:Contact_FR
        },
    },
    lng:'fr',
    fallbackLng:['fr','en'],
    debug:true,
    interpolation:{
        escapeValue:false
    }
})


export default i18n;