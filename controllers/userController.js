const fs = require('fs');

const filePath = './data/data.json';

// for read
const readJSONFile = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

// for write 
const writeJSONFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Get all users
exports.getAllUsers = (req, res) => {
  const users = readJSONFile();
  res.json(users);
};

// for Add  new user
exports.addUser = (req, res) => {
  const users = readJSONFile();
  const newUser = req.body;
  users.push(newUser);
  writeJSONFile(users);
  res.status(201).json(newUser);
};

// for update  user
exports.updateUser = (req, res) => {
  const { userID } = req.params;
  const users = readJSONFile();
  const updatedUser = req.body;
  const userIndex = users.findIndex((user) => user.userID === userID);
  
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    writeJSONFile(users);
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// for Delete  user
exports.deleteUser = (req, res) => {
  const { userID } = req.params;
  const users = readJSONFile();
  const newUsersList = users.filter((user) => user.userID !== userID);
  
  if (newUsersList.length !== users.length) {
    writeJSONFile(newUsersList);
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

