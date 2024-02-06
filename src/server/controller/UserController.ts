import { ObjectId } from "mongodb";
import { client ,secret} from "../ConfigServer";
const jwt = require("jsonwebtoken");

export const findAll = async () => {
  await client.connect();
  const users = await client.db("TU").collection("users").find({}).toArray();
  await client.close();
  return users;
};

export const findOne = async (id: string) => {
  const objectId = new ObjectId(id);
  await client.connect();
  const users = await client
    .db("TU")
    .collection("users")
    .findOne({ _id: objectId });
  await client.close();
  return users;
};

// export const register = async (
//   parentname:string,
//   relation: string,
//   phone: string,
//   password: string,
//   babyname: string,
//   babyage: string,
//   babysex: string,
//   babybirthday: string
// ) => {
//   await client.connect();
//   await client
//     .db("nurse")
//     .collection("users")
//     .insertMany([
//       {
//         parentname,
//         relation,
//         phone,
//         password,
//         babyname,
//         babyage,
//         babybirthday,
//         babysex,
//         height: [],
//         weight: [],
//         datetocheck: [],
//         registerdate: new Date(),
//       },
//     ]);
//   await client.close();
//   return { status: "resgister success" };
// };

export const login = async (usernameOrEmail: string, password: string) => {
  try {
    await client.connect();
    const user = await client
      .db("TU")
      .collection("users")
      .findOne({
        $and: [
          { $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] },
          { password: password },
        ],
      });
    await client.close();
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
      },
      secret
    )
    console.log('loginok');
    
    return { status: "login success", token };
  } catch (error) {
    return { status: "login faild" };
  }
};

export const auth = async (token: any) => {
  try {
    const decoded = jwt.verify(token.split(" ")[1], secret);
    return { status: "success", decoded };
  } catch (error) {
    return { status: "error" };
  }
};
