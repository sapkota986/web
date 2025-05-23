const count=document.querySelector('.count')
const dec=document.querySelector('.minus-btn')
const inc=document.querySelector('.plus-btn')
const reset=document.querySelector('.reset-btn');
const changeBy=document.querySelector('.changeby');


inc.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText);
    const changeByvalue=parseInt(changeBy.value);
    console.log(countValue);
    count.innerText=countValue+changeByvalue;
});
dec.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText)
    console.log(countValue)
    const changeByvalue=parseInt(changeBy.value)
    count.innerText=countValue-changeByvalue;
});
reset.addEventListener('click',()=>{
    count.innerText=0;
});


