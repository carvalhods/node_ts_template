import app from './config/express';
import { settings } from './config/settings';
import { database } from './config/database';

database(process.env.DBPATH || settings.dbpath);

app.listen(app.get('port'), () => 
    console.log(`Server rodando na porta ${app.get('port')}`)
)
