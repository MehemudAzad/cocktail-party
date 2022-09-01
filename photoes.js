fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => displayPhotoes(data));

const displayPhotoes= photo =>{
    console.log(photoc);
}