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
    return res.status(200).json(newUser);
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
    return res.status(200).json(user);
  }
  return res.sendStatus(202);
});

router.get('/check', async (req, res) => {
  if (req.session.userID) {
    try {
      const user = await User.findById(req.session.userID);
      if (user) {
        res.json({ cheker: 'ok' });
      } else {
        res.json({ cheker: 'neok' });
      }
    } catch (error) {
      console.log(error);
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

router.post('/config', async (req, res) => {
  const { config, id } = req.body;
  let user;

  try {
    user = await User.findById(id);
  } catch (error) {
    console.log(error);
    return res.sendStatus(444);
  }

  const item = user.basket.find((el) => el.path === config.path);

  if (!item) {
    user.basket.push(config);
  } else {
    return res.sendStatus(205);
  }

  try {
    await user.save();
  } catch (error) {
    console.log(error);
    return res.sendStatus(445);
  }
  // console.log(user);
  return res.status(200).json(user);
});

router.post('/basket', async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id);
    return res.status(200).json(user.basket);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete('/basket', async (req, res) => {
  const { path, userID } = req.body;

  try {
    const user = await User.findById(userID);
    console.log(user);
    user.basket = user.basket.filter((el) => el.path !== path);
    await user.save();
  } catch (error) {
    console.log(error);
  }
  res.end();
});

module.exports = router;
