import React from 'react';

const getContent = async (url) => {
    
    
    let loading = true;

    try {
        const res = await fetch(url);
        const data = await res.json()
        console.log('content',data)
        loading = false;
        if(data.data && data.data.attributes && data.data.attributes.banner ){
            delete data.data.attributes.createdAt;
            delete data.data.attributes.updatedAt;
            delete data.data.attributes.publishedAt;
            delete data.data.attributes.page

            return {data:data.data.attributes,loading};
        } else{
            return {data:null,loading}
        }
    } catch (err){
        loading = false;
        return {data:null,loading}
    }
}

export default getContent;