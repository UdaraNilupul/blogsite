// const _myfn = (param1,param2)=>
// // regular function

// function myfn() {
//     console.log('====================================');
//     console.log();
//     console.log('====================================');
// }

// //arrow function

// const _myfn =  (param1, param2) => {
//     console.log('====================================');
//     console.log('arrow function');
//     console.log('====================================');
// }

const url = 'http://jsonplaceholder.typicode.com/posts'

//async - without dealy

const get_comment = async()=>{
    const response = await fetch(url)
    const posts = await response.json() //data

    const nodeList = [];

    for(post of posts) {
         const {id,title,body} = post; //destructure

        // const div = document.createElement('div') 
        // //create div element
        // div.id = id; //Add id attr
        // // div.innerHTML = `${title}\n${body}`; // Add innerHtml
        // // document.getElementById('root').appendChild(div) //div#root child
        // // break

        // // create h1 element
        // const h1 = document.createElement('H1')
        // //create p element
        // const p = document.createElement('p')

        // div.id = id;
        // h1.innerHTML = title;
        // p.innerHTML = body;

        // div.appendChild(h1)
        // div.appendChild(p)

        // document.getElementById('root').appendChild(div)
        // break;

        const tr = document.createElement('tr')
        const td_title = document.createElement('td')
        td_title.innerHTML = title;

        const td_body = document.createElement('td')
        td_body.innerHTML = body;

        tr.appendChild(td_title)
        tr.appendChild(td_body)

        document.querySelector('table').appendChild(tr)
    }

}
get_comment();
