import {save} from "./pet.service";
import {APIGatewayPetPutHandler, Pet} from "./pet.model";

export const put: APIGatewayPetPutHandler = (event, context, callback) => {
  save(event.id, event.body)
    .then(() => {
      callback(undefined, {
        statusCode: 200,
        body: ""
      });
    })
    .catch(() => {
      callback('ID_NOT_FOUND');
    })
}
