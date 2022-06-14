import axios from 'axios'
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:3000/';
const config ={
  proxy: {
    protocol: 'http',
    host: 'localhost',
    port: 3001,   
  }
}
@Injectable ({
  providedIn: 'root'
}
)
export class ArtifactService {  
 baseUrl = 'http://localhost:3000/';
  constructor() { }

  getBaseUrl = (type:string):string =>{
    if(type==="topic"|| type==="topics") return baseUrl+"topics"
    else if(type==="users" || type==='user') return baseUrl+"users"
    else return baseUrl+type;
  }

getAll = async (type:string) => { 
  console.log("making axios call with config :",type,config,this.getBaseUrl(type))
  var result = await axios.get(this.getBaseUrl(type));
  console.log("done axios call with config",type,config,this.getBaseUrl(type))
  return result;
}

getAllWithParent = (type:string,parentId:string) => {
  console.log("making axios call getAllWithParent config :",type,this.getBaseUrl(type))
  var url = this.getBaseUrl(type)+'?parent'+`=${parentId}`;
  console.log("URL to get for parent:",url)
  var result =  axios.get(url);
  console.log("done axios call result:",result)
  return result;
}

addObj = async (type:string,payload:any,dispatch:any)=>{  
  console.log("     -->Finding object sync call:",type)
var obj = await this.findObject(type,"title",payload.title);
    console.log("       <--server Response for find object:",obj.data);
if( obj.data.length > 0 ){      
    alert("Add/Save Failed - Duplicate found.")
    let newObj = {...obj,isDuplicateFound:true}
    console.log("     <--found the duplicate object....NOT ADDING OBJECT.")
    return newObj;
}
else{
    console.log("        --> Not found object - ADDING NOW")
    console.log("           -->making axios call with Type:",type,"Payload:",payload,config)
    const resultPromise =  axios.post(this.getBaseUrl(type),payload,config)  
    console.log("           <--Returning promise")
    return resultPromise;
}
}


findObject = (type:string,fieldName:string,value:string) =>{
  console.log("         -->Finding object URL :",this.getBaseUrl(type)+`?${fieldName}`+`=${value}`)
return axios.get(this.getBaseUrl(type)+`?${fieldName}`+`=${value}`)
}

freeTextSearch = (type:string,value:string) =>{
console.log("Finding free text search",this.getBaseUrl(type)+'?q='+`${value}`)
return axios.get(this.getBaseUrl(type)+'?q='+`${value}`)

}

getObj = (type:string,id:string) => {
return axios.get(this.getBaseUrl(type)+`/${id}`);
}

create = (type:string,newObject:string) => {
return axios.post(this.getBaseUrl(type), newObject)
}

update = (type:string,id:string, newObject:string) => {
return axios.put(this.getBaseUrl(type)+`/${id}`, newObject)
}

}
