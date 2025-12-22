import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    `mongodb+srv://Food:VxHvPV8s1vqTUVny@firstdatabase.28ixvbt.mongodb.net/?appName=FirstDataBase`
  );
};
