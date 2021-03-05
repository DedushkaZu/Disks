const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../Db/Models');

const saltRounds = 10;

router.post('/registration', async (req, res) => {
  const { username, email, password } = req.body;
  const userEmail = await User.findOne({ email });
  if (userEmail) {
    return res.sendStatus(202);
  }
  const userLogin = await User.findOne({ username });
  if (userLogin) {
    return res.sendStatus(203);
  }
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    req.session.userID = newUser.id;
    return res.status(200).json(newUser.id);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userID = user.id;
    return res.status(200).json(user.id);
  }
  return res.sendStatus(202);
});

router.get('/check', (req, res) => {
  if (req.session.userID) {
    try {
      const user = await User.findById(req.session.userID);
      if (user) {
        res.json({ cheker: 'ok' });
      } else {
        res.json({ cheker: 'neok' });
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    res.json({ cheker: 'neok' });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid');
  return res.sendStatus(200);
});

module.exports = router;
