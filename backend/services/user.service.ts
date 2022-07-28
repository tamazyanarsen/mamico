import { app } from '../main';
import { User } from '../models/user';
import { upload } from './../config/config';

export function initUserRoutes() {
    console.log('start init user routes');
    app.get('/user/:userId', (req, res) => {
        console.log(req.params);
        User.findOne({
            where: {
                id: req.params.userId
            }
        }).then(user => {
            console.log('user: ', user);
            user ?? res.json(user)
        })

    })

    app.post('/user', upload.none(), (req, res) => {
        console.log('req.query: ', req.query);
        console.log('req.params: ', req.params);
        console.log('req.body: ', req.body);
        res.json(req.body);
    })
    console.log('finish!!! init user routes', app.routes);
}