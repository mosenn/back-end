const Chat = require("../models/chat");
const User = require("../models/user");

const accessChat = async (req, res) => {
  const { userId } = req.body;
  console.log(req.body);
  if (!userId) {
    console.log("user id param not send with requset");
    return res.sendStatus(400);
  }
  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },

      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");
  isChat = await User.populate(isChat, {
    path: "latesMessage.sender",
    slecet: "name pic email",
  });
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatDAta = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };
  }
  try {
    const createdChat = await Chat.create(chatDAta);
    const fullChat = await Chat.findOne({
      _id: createdChat._id,
    }).populate("users", "-password");
    res.status(200).send(fullChat);
  } catch (err) {
    res.status(400);
    throw new Error(err);
  }
};

const usersChat = async (req, res) => {
  try {
    const chat = await Chat.find({
      users: { $elemMatch: { $eq: req.user._id } },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updateAt: -1 })
      .then(async (result) => {
        result = await User.populate(result, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).send(result);
      });
    // res.status(200).send(chat);
  } catch (err) {}
};

const createGroupChat = async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res
      .status(400)
      .send({ message: "please Fill all the feilds" });
  }
  var users = JSON.parse(req.body.users);
  if (users.length < 2) {
    return res.status(400).send("more than 2 users for group chat");
  }
  users.push(req.user);
  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });
    const fullGropchat = await Chat.findOne({
      _id: groupChat._id,
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    return res.status(200).json(fullGropchat);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const renameGroup = async (req, res) => {
  const { chatId, chatName } = req.body;

  const updateChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      chatName: chatName,
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!updateChat) {
    return res.status(400).send("chat not Found");
  } else {
    return res.json(updateChat);
  }
};
const addToGroup = async (req, res) => {
  const { chatId, userId } = req.body;
  const remove = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password")
    // .populate("users", "-confirmPassword ");
  if (!remove) {
    return res.status(400).send("chat not found");
  } else {
    return res.json(remove);
  }
};

const removeFromGroup = async (req, res) => {
  const { chatId, userId } = req.body;
  const remove = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password")
    // .populate("users", "-confirmPassword ");
  if (!remove) {
    return res.status(400).send("chat not found");
  } else {
    return res.json(remove);
  }
};
module.exports = {
  usersChat,
  accessChat,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
};
