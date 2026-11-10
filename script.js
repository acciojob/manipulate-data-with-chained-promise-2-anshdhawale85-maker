
let output = document.getElementById("output")


    let initpromise =  new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4])
        }, 3000);
    })

initpromise

.then((arr) => {
     let evennum = arr.filter(num => num % 2 === 0);

     return new Promise((resolve) => {
          setTimeout(() => {
              output.innerText = evennum.join(",");
             resolve(evennum)
        }, 1000); 
     })
})

.then((arr) => {
    let multnum = arr.map(num => num * 2);

    return new Promise((resolve) => {
        setTimeout(() => {
            output.innerHTML = multnum.join(",");
            resolve(multnum)
        }, 2000);
    })
})