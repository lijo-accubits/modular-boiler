const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

exports.checkPassword = async (password, hashedPassword) => {
    return 1;
}