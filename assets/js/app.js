 let cl = console.log;
 const selectImg = document.getElementById('selectImg')
 const all = [...document.querySelectorAll('.all')]
const onSelectImg = (eve) =>{
    let val = eve.target.value;
    cl(val)
    all.forEach(i=>i.classList.add('d-none'))
    let imgSelect =[...document.querySelectorAll('.'+val)]
    imgSelect.forEach(e=>e.classList.remove('d-none'))
}

 selectImg.addEventListener('change',onSelectImg)
