const names = document.querySelector('.name-col');
const list = names.querySelectorAll('div');
const headStyle = document.querySelector('style');


list.forEach(element => {
    element.onclick = function(){
        ttt = element.innerText;
        headStyle.innerHTML = ` .visual-col div {transform:scale(0,0);}
                                .visual-col div${ttt} {transform:scale(1,1);color: #C2FFC7;
                                background-color: #62825D;
                               }
                                sub{color:white;}`
    }

});

document.addEventListener('click',function(e){
    if(!names.contains(e.target)) {
        headStyle.innerHTML = ' .visual-col div {transform:scale(1,1);}';
    }
})
