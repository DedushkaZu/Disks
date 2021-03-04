const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../Db/Models');

router.post('/registration', async (req, res) => {
  const { username, email, password } = req.body;
  const userEmail = User.findOne({ email });
  if (userEmail) {
    return res.sendStatus(202);
  }

  const userLogin = User.findOne({ username });
  if (userLogin) {
    return res.sendStatus(202);
  }

  try {
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    req.session.userID = newUser.id;
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, await bcrypt.genSalt(10)))) {
      req.session.userID = user.id;
      res.sendStatus(200);
    } else {
      res.sendStatus(202);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get('/check', (req, res) => {
  if (req.session.userID) {
    res.json({ cheker: 'ok' });
  } else {
    res.json({ cheker: 'neok' });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie();
  return res.sendStatus(200);
});

module.exports = router;
