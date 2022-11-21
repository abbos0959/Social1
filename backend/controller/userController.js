const UserModel = require("../model/UserModel");
const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");
const bcrypt = require("bcrypt");
const { use } = require("../router/userRouter");
const register = catchErrorAsync(async (req, res, next) => {
   const { username, email, password } = req.body;

   const checkuser = await UserModel.findOne({ email });
   if (checkuser) {
      return next(new AppError("bunday user avvaldan mavjud", 404));
   }

   const hashPassword = await bcrypt.hash(password, 12);
   const user = await UserModel.create({
      username,
      email,
      password: hashPassword,
   });

   res.status(200).json({
      success: true,
      user,
   });
});

const login = catchErrorAsync(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await UserModel.findOne({ email });

   if (!user) {
      return next(new AppError("bunday user mavjud emas", 404));
   }

   const checkPassword = await bcrypt.compare(password, user.password);

   if (!checkPassword) {
      return next(new AppError("Iltimos Parolni to'g'riliga e'tibor bering", 404));
   }

   res.status(200).json({
      success: true,
      user,
   });
});

module.exports = { register, login };
