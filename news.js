
var url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=dcd8f6cdbfa344d7baa998e7ad19d61c'

''
// wrap in function 
fetch(url).then((response)=> {
    console.log('resolved', response);
    return response.json();
} ).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
})

// export into