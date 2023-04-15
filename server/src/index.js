const http = require ("http")
const PORT = 3001
const getCharById = require ("./controllers/getCharById")


http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req
        
        //aqui esta mi RUTA    
       if(url.includes("/rickandmorty/character")){
        
        const characterId = url.split("/").at(-1)
        /* const character = data.filter((e)=>e.id === Number(characterId)); */
        //AQUI ESTA MI CONTROLLER
        getCharById(res,characterId)
   
    
    }else{
        res.writeHead(404,{"Content-Type": "text/plain"})
        res.end("Ocurrio un error");
    }



}).listen(PORT, "localhost");

