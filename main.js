// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

let getResBtn = document.querySelector('button');

// console.log(getResBtn.textContent);

let clickBtn = () => {
    console.log('Button Clicked');
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(res => {
        res.data.results[0].residents.forEach(ele => {
            console.log(ele);
            axios.get(ele)
            .then(res => {
                // console.log(res.data.name)
                let newH2 = document.createElement('h2');
                newH2.textContent = res.data.name;
                document.body.appendChild(newH2);
            })
        });
        // console.log(res.data.results[0].residents);
    })
};

getResBtn.addEventListener('click', clickBtn);