import { client } from "./client";

const getSafes = async () => {
  return await client.from("safe").select("*");
};

export const createSafe = async (safe) => {
  return await client.from("safe").insert([safe]).select();
};

export const editSafe = async (safe) => {
  return await client.from("safe").update(safe).eq("id", safe.id).select();
};

export const deleteSafe = async (id) => {
  return await client.from("safe").delete().eq("id", id);
};

export default getSafes;
