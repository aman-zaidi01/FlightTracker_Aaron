import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';

const main = async () => {
        const app = express();
        app.use(cors());

}

main().catch((err) => {
        console.error(err);
})