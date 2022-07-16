

export const getSrcSet = (url,width,thumbnail) => {
    if(thumbnail.url){
        const srcset =`${process.env.STRAPI_APP_URL}${url} ${width}w , ${process.env.STRAPI_APP_URL}${thumbnail.url} ${thumbnail.width}w` ;
        return srcset;
    } else{
        return null
    }
}

