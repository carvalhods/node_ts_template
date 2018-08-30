import * as mongoose from 'mongoose';
import { SIGINT } from 'constants';

export function database(uri: string) {
    mongoose.connect(uri, {useNewUrlParser:true}).catch((err) => console.log(err));
    mongoose.connection.on('connected', () => console.log('Conexão ao BD realizada'));
    mongoose.connection.on('disconnected', () => console.log('BD desconectado'));
    mongoose.connection.on('error', () => console.error('Falha na conexão com o BD'));
    process.on('SIGINT', () => {
        mongoose.connection.close();
        console.log('Conexão com o BD encerrada');
        process.exit(0);
    });
}