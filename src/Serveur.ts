 // mettre sur pieds le serveur
 import {Request,Response} from 'express';
 const monModuleHttp = require('http'); // importation du module http natif de node 
 const monServeur = monModuleHttp.createServer((req:Request, res:Response) =>{
        //console.info(typeof(req));
       // console.info(typeof(res));
      //  const ip = res.socket?.remoteAddress;
      // const port = res.socket?.remotePort;
      //  res.end("Voilà la repose du serveur ");
           res.end("voila le serveur"); // send n'est pas du module http mais de express end(data, type enodage, callback methode)
        /*  res.end(`Your IP address is ${ip} and your source port is ${port}.`,()=>{
        console.table(ip+"  "+port);
      });*/
          
    });

 monServeur.listen(process.env.PORT || 3000,()=>{
    console.info("j'écoute le serveur au port 3000");
 });



