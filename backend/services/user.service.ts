import { app } from '../main';
import { User } from '../models/user';
import { upload } from './../config/config';

export function initUserRoutes() {
    app.get('/user/:userId', (req, res) => {
        console.log(req.params);
        User.findOne({
            where: {
                id: req.params.userId
            }
        }).then(user => {
            if (user) {
                res.json(user);
            } else {
                res.json(null)
            }
        })

    })

    app.get('/users', (_req, res) => {
        User.findAll().then(e => {
            res.json(e);
        });
    });

    app.post('/user', upload.none(), (req, res) => {
        console.log('req.body: ', req.body);
        const { name, city } = req.body;
        console.log('city: ', city);
        console.log('name: ', name);
        res.json(req.body);
        User.create({ name, city })
    })
}