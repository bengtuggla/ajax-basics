const output = document.querySelector('.output');
const btn = document.querySelector('.btn');
let pageNr = 1;



btn.addEventListener('click', ()=>{

   let myRequest = new XMLHttpRequest();
   myRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageNr}.json`);
   myRequest.onload = ()=>{
    if(myRequest.status >=200 && ourData.status < 400){
      let ourData = JSON.parse(myRequest.responseText);
       printData(ourData);
    } else{
     console.log('Tyvärr, kontakt till servern resulterade i ett error');
    }
  
  }
  myRequest.onerror = ()=>{

  }

  myRequest.send()
  pageNr ++
  if(pageNr > 3){
   btn.classList.add('hide')
  }
})

function printData(data) {
let htmlString = ''

for(i=0; i<data.length; i++){
 htmlString += `Djuret heter ${data[i].name} och är en ${data[i].species} och gillar `
 for(ii=0; ii<data[i].foods.likes.length; ii++){
  if(ii==0){
     htmlString += `${data[i].foods.likes[ii]} <br></p>`
    }else{
    htmlString += `och ${data[i].foods.likes[ii]} <br></p>`}
  }


  
}
output.insertAdjacentHTML('beforeend', htmlString)

}

