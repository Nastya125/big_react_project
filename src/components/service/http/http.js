export async function request (url, requestOptions){

    const result = await fetch(`http://localhost:3000/${url}`, requestOptions)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    })
    return result.json();
}