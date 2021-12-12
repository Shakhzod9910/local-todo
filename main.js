let sDom = (element) =>document.querySelector(element)
let cDom = (element) =>document.createElement(element)

let Elform = sDom('.form');
let Elinput = sDom('.input');
let Ellist = sDom('.class-list');
let List = sDom('.list')
let count = sDom('.count')

let NewArr = JSON.parse(window.localStorage.getItem('todo')) || [];

function Render(Arrayb , element){
    count.textContent = NewArr.length
        Arrayb.forEach((Arrelement) => {
            const newLi = cDom('li')
            const newinput = cDom('input')
            const newSpan = cDom('span')
            const newbutton = cDom('button')
            const newDiv = cDom('div')
            
            newLi.setAttribute('class', 'class-list');
            newinput.setAttribute('type', 'checkbox');
            newSpan.setAttribute('class', 'list-items');
            newbutton.setAttribute('class', 'btn-delete');
            newDiv.setAttribute('class', 'left')
            let btnd =sDom('.btn-delete')
            let btndele = btnd.textContent
            newSpan.textContent = Arrelement.title
            newbutton.textContent = btndele
    
            newLi.appendChild(newDiv);
            newLi.appendChild(newbutton)
            newDiv.appendChild(newinput)
            newDiv.appendChild(newSpan)
            element.appendChild(newLi)
    
            
            newbutton.addEventListener('click', (evt)=>{
                for(let i=0; i<NewArr.length; i++){
                    if(NewArr[i].id == Arrelement.id){
                        NewArr.splice(i,1)
    
                    }
                    window.localStorage.setItem('todo', JSON.stringify(NewArr))
                }
                List.innerHTML = null
                Render(NewArr,List)
            })
            

            Elinput.value = null
        });
    }
    


Elform.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    let elInputvelue = Elinput.value.trim();
    window.localStorage.setItem('todo', JSON.stringify(NewArr))
    
    NewArr.unshift({
        title: elInputvelue,
        id: NewArr.length+1,
        iscomplated: false
    })
    List.innerHTML = null
    console.log(NewArr)
    Render(NewArr,List)
    // count.textContent = NewArr.length
})

Render(NewArr,List)








