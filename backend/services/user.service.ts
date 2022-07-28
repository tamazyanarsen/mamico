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
            if (user) {
                res.json((user as unknown as { dataValues: unknown }).dataValues)
            } else {
                res.json(null)
            }
        })

    })

    app.post('/user', upload.none(), (req, res) => {
        console.log('req.body: ', req.body);
        const { name, city } = req.body;
        console.log('city: ', city);
        console.log('name: ', name);
        res.json(req.body);
        User.create({ name, city })
    })
    console.log('finish!!! init user routes', app.routes);
}