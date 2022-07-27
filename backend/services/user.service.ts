import { app } from '../main';
import { User } from '../models/user';

app.get('/user/:userId', (req, res) => {
    console.log(req.params);
    User.findOne({
        where: {
            id: req.params.userId
        }
    }).then(user => user ?? res.json(user))
})