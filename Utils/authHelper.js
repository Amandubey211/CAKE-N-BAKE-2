import bcrypt from "bcrypt"


export const hashPassword = async (password) => {
  try {

    let saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    console.log(err.message)
  }
}

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword)
}