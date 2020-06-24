import {Pet} from "./pet.model";

export const save = async (id: number, pet: Pet) => {
  if (id < 1 || id > 13) {
    throw new Error('id doesn\'t exists');
  } else {
    await setTimeout(() => {}, 1000);
    return;
  }
}
