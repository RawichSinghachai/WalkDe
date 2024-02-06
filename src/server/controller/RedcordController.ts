import { client } from "../ConfigServer";

export const findRecord = async (id: string) => {
  await client.connect();
  const record = await client
    .db("TU")
    .collection("records")
    .findOne({ userRef: id });
  await client.close();
  return record;
};

export const editWeight = async (id: string, weight: number) => {
  await client.connect();
  const record = await client
    .db("TU")
    .collection("records")
    .updateOne({ userRef: id }, { $set: { weight: weight } });
  await client.close();
  return record;
};

export const editHeight = async (id: string, height: number) => {
    await client.connect();
    const record = await client
      .db("TU")
      .collection("records")
      .updateOne({ userRef: id }, { $set: { height: height } });
    await client.close();
    return record;
};

export const addHeartRate = async (id: string, heartRate: number) => {
    await client.connect();
    const record = await client
      .db("TU")
      .collection("records")
      .updateOne({ userRef: id }, {$push:{heartRate:heartRate,date: new Date().toISOString()}});
    await client.close();
    return record;
};

export const addTimeDuration = async (id: string, time: number) => {
    await client.connect();
    const record = await client
      .db("TU")
      .collection("records")
      .updateOne({ userRef: id }, {$push:{timeDuration:{time:time,date: new Date().toISOString()}}});
    await client.close();
    return record;
};

export const addProgress = async (id: string, progress: number) => {
    await client.connect();
    const record = await client
      .db("TU")
      .collection("records")
      .updateOne({ userRef: id }, {$push:{progress:progress}});
    await client.close();
    return record;
};

export const editFootStep = async (id: string, footStep: number) => {
    await client.connect();
    const record = await client
      .db("TU")
      .collection("records")
      .updateOne({ userRef: id }, { $set: { footStep: footStep } });
    await client.close();
    return record;
};

export const editDetail = async (id: string, footStep: number, progress: number) => {
  console.log("footstep" + footStep + "," + "progress" + progress);

  await client.connect();

  const record = await client
    .db("TU")
    .collection("records")
    .updateOne(
      { userRef: id },
      {
        $push: {
          "detail_progress.date": new Date().toISOString(),
          "detail_progress.footStep": footStep,
          "detail_progress.progress": progress,
        },
      }
    );

  await client.close();
  return record;
};
