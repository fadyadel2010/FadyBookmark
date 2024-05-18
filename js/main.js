var WebName = document.getElementById("SiteName");
var WebURL = document.getElementById("SiteURL");
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))


var WebList = [];
if(localStorage.getItem("webs"))
{
  WebList = JSON.parse(localStorage.getItem("webs"))
}
DisplayWeb();



function validateName() {
    var temp = "";
    var x = document.getElementById("SiteName").value;
    if (x == "") {
      return false;
    }

    else{

       temp = `
        <form class="bookmark-form d-flex justify-content-center align-items-center flex-column gap-5 was-validated"> 
        <div class="style-h2">
          <h2>Bookmark your favorite sites</h2>
        </div>
        <div class="d-flex flex-column w-75  gap-3">
          <div>
            <label for="SiteName" class="form-label" ><i class="fa-solid fa-bookmark" style="color:#F80404;"></i><span>   Site Name</span></label>
            <input  type="url"   name="url"   id="SiteName"  placeholder="BookMark Name"   size="50" class="form-control is-valid"  required pattern="[A-Za-z]{3,}"> 
          </div>
          <div>
  
      
        </div>
         
      </form> 
        `

    }

  }

function validateURL(string){

    var temp = "";
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if (res !== null)
  {
    temp = 
    `
    <form class="bookmark-form d-flex justify-content-center align-items-center flex-column gap-5 was-validated"> 
          <div class="style-h2">
            <h2>Bookmark your favorite sites</h2>
          </div>
          <div class="d-flex flex-column w-75  gap-3">
            
              <label for="SiteURL" class="form-label"><i class="fa-solid fa-link" style="color: #F80404"></i><span>   Site URL</span></label>
              <input type="url"   name="url"   id="SiteURL"  placeholder="Website URL"   size="50" class="form-control is-valid"  required> 
            </div>    
       
        
          </div>
           
        </form> 
    `
  }

  else
  {
    temp = 
    `
    <form class="bookmark-form d-flex justify-content-center align-items-center flex-column gap-5 "> 
          <div class="style-h2">
            <h2>Bookmark your favorite sites</h2>
          </div>
          <div class="d-flex flex-column w-75  gap-3">
            
              <label for="SiteURL" class="form-label"><i class="fa-solid fa-link" style="color: #F80404"></i><span>   Site URL</span></label>
              <input type="url"   name="url"   id="SiteURL"  placeholder="Website URL"   size="50" class="form-control is-invalid"  required> 
            </div>    
       
        
          </div>
           
        </form> 
    `
  }
  


  

  }

function addweb(){
    var temp;
  var web ={
        Wname : WebName.value ,
        WUrl : WebURL.value
    };

      if(WebName.value == "" || WebURL.value == "")
      {
        myModal.show();
        
      }

      else{
        WebList.push(web);
        localStorage.setItem("webs" , JSON.stringify(WebList));
        WebName.value = null;
        WebURL.value = null;
      }

    
       

    DisplayWeb();

}

function DisplayWeb(){
    var temp = "";
    for(var i = 0 ; i < WebList.length; i++)
    {
        temp+=  `<tr>
                <td>`+i+`</td>
                <td> `+WebList[i].Wname+`</td>
                <td><a class="btn btn-outline-info text-decoration-none" role="button"  href="${WebList[i].WUrl}" target="_blank" data-link='${WebList[i].WUrl}'>Visit</a></td>
                  <td><button class="btn btn-outline-danger" onclick="DeleteWeb()">Delete</button></td>
            </tr>  `;
    }
   
    document.getElementById("myData").innerHTML = temp;
}
DisplayWeb();

function WebClear(){
    localStorage.clear();
    location.reload();

}

function WebVisit(x){

  const myElement = WebList.find((element) => element === WebURL)
  console.log(myElement)


  
}
   
   

function DeleteWeb(x){
    WebList.splice(x,1);
    localStorage.setItem("webs" , JSON.stringify(WebList));
    DisplayWeb();
}





  