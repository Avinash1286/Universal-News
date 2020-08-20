
let newsContainer=document.getElementById('newsContainer');
let xhr=new XMLHttpRequest();
xhr.open('GET','http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=9dad1a9fed5a4cfd9b4a2882196a501b',true);

xhr.onload=function(){
    if(this.status==200){
        let json=JSON.parse(this.responseText);
         let articless=json.articles;
         console.log(articless ,typeof articless);
        let html="";
        articless.forEach(function(element,index) {
            let news=`<div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  Braking News: ${index+1}. ${element.title}
                </button>
              </h2>
            </div>
            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsContainer">
              <div class="card-body">
               ${element.content} <a href="${element.url}" target="_blank">Read More</a>
              </div>
            </div>
            </div>`
            html +=news
            
        });
        newsContainer.innerHTML=html;
    }
}
xhr.send();




