//your JS code here. If required.
let output = document.getElementById("output")

function getevenarr() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4])
        }, 3000);
    })
}

getevenarr()

.then((arr) => {
     let evennum = arr.filter(num => num % 2 === 0);

     return new Promise((resolve) => {
          setTimeout(() => {
              output.innerText = evennum
             resolve(evennum)
        }, 1000); 
     })
})

.then((arr) => {
    let multnum = arr.map(num => num * 2);

    return new Promise((resolve) => {
        setTimeout(() => {
            output.innerHTML = multnum;
            resolve(multnum)
        }, 2000);
    })
})