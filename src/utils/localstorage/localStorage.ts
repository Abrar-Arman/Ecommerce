function setItem(key:string,value:Record<string,unknown>[] | []){
    try{
    localStorage.setItem(key,JSON.stringify(value))
    }catch(err){
     console.log('error happen',err)
    }
}

function getItem(key:string): undefined | Record<string,unknown>[]{
    try{
      const val=localStorage.getItem(key)
      return val? JSON.parse(val):undefined
    }
    catch(err){
     console.log('error happen',err)
    }
}

export {setItem,getItem}