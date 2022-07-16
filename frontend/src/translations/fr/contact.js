export const Contact_FR = {
    title:'Contactez-nous !',

    //form

    //placeholder

    //error from validation front-end



    // Erreur back-end 


    error:{
        form :'Veuillez bien remplir le formulaire de contact',
        numero:'Numero de téléphone invalide',
        pdf:'Veuillez télécharger un fichier pdf',
        'size-file':'La taille maximale de votre document pdf doit être inférieure 10Mo',
        error:" Une erreur s'est produite , veuillez réessayer ultérieurement "
    },
    success:{
        message:"Votre message a été envoyé avec succès"
    },
    status:{
        required:"Veuillez choisir l'un des statuts proposés",
    },

    //Contenu du formulaire

    form:{
        status:{
            entreprise:'Avez-vous une entreprise ?',
            emploi:'Recherchez-vous un emploi ?'
        },
        name:{
            placeholder:"Votre nom"
        },
        societe:{
            placeholder:"Votre societe"
        },
        email:{
            placeholder:'Votre email'
        },
        tel:{
            placeholder:'Tel (+xxxx xxxxxxx)'
        },
        message:{
            placeholder:'Entrez votre message'
        },
        button:{
            loadingText:'Patientez...',
            text:'envoyez'
        }
    },

    //erreur possible pour les champs de formulaire

    
    name:{
        required:"Veuillez entrer votre nom",
        beginLetter:"Votre nom doit commencer par une lettre"
    },
    societe:{
        required:'Veuillez entrer votre nom de société !'
    },
    email:{
        required:'Veuillez entrer votre email',
        email:'Veuillez entrer un email correct'
    },
    tel:{
        required:"Veuillez entrer votre numero de téléphone",
        invalid:"Numero de téléphone invalide"
    },
    file:{
        required:"Veuillez télécharger un document pdf"
    },
    message:{
        required:"Veuillez entrer votre message" 
    },
    checked:{
        required:'Veuillez accepter notre politique'
    },
    recpatcha:{
        required:'Recpatcha error'
    }

};