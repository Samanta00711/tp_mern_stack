import express, { Request,Response,NextFunction } from 'express';
const app = express();

app.use('/', (req: Request, res: Response) => {
    
    const {numberone,numbertwo}=req.query;
    const sum=Number(numberone)+Number(numbertwo);
        

    res.status(200).send(`la somme de ${numberone} + ${numbertwo} egale à: ${sum}`);
});
app.listen(9000,()=>{
    console.log('server listening on 9000');
});

