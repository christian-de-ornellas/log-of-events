import express from 'express';

const app = express();

app.get("/", (request: Request, response: Response): Promise<Response> => response.send({status: true}));

app.listen(401, () => console.log('Running server node'))