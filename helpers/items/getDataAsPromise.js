import https from 'https';

const getDataAsPromise = (url) =>{

    let promise = new Promise((resolve, reject)=>{
        
        https.get(url, (resp) => {
            let data = '';
        
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });
        
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });
        
            }).on("error", (err) => {
                // TODO: se podria usar http codes
                reject({
                    error: 'error',
                    message: err.message
                });
                
            });
        });

    return promise;
};

export default getDataAsPromise;