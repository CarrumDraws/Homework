const getTodo = (req, res) => {
  // Step 1. get userID from body
  const { userId, username } = req.body;
  console.log(userId, username);

  // Step 2. get the user along with todo data from database using the userID

  // Step 3. return the todos as response
  return res.status(200).json({
    title: 'Protected Todo',
  });
};

export default getTodo;
