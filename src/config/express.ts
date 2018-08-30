import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';

import { settings } from './settings';
import { produtoRoute } from '../routes/produto.route';

class ExpressApp {
    static init() {
        const app = express(); 
        app.set('port', process.env.PORT || settings.port);
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json());
        app.use(methodOverride());

        produtoRoute(app);
        return app;
    }
}

export default ExpressApp.init()
