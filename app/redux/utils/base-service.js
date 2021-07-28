const defaultHeaders = {
    "Accept": "application/json",
    "Content-type": "application/json",
}

export const get = (apiUrl, headers) => {
   return fetch(apiUrl,{
        method : 'GET',
        headers: headers || defaultHeaders,
    })
}