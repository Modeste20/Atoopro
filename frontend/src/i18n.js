import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import { Contact_EN } from './translations/en/contact';
import { Footer_EN } from './translations/en/footer';
import { Header_EN } from './translations/en/header';
import { Menu_EN } from './translations/en/menu';
import { Contact_FR } from './translations/fr/contact';
import { Footer_FR } from './translations/fr/footer';
import { Header_FR } from './translations/fr/header';
import { Menu_FR } from './translations/fr/menu';

i18n
.use(initReactI18next)
.init({
    resources:{
        'en':{
            contact:Contact_EN,
            header:Header_EN,
            footer:Footer_EN,
            menu:Menu_EN
        },
        'fr':{
            contact:Contact_FR,
            header:Header_FR,
            footer:Footer_FR,
            menu:Menu_FR
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