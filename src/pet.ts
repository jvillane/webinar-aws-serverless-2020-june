import {APIGatewayProxyHandler} from "aws-lambda";
import {save} from "./pet.service";
import {Pet} from "./pet.model";

export const put: APIGatewayProxyHandler = (event, context, callback) => {
  //validar que el id del path exista y sea numérico
  if (event.pathParameters === null || event.pathParameters.id === undefined || isNaN(+event.pathParameters.id)) {
    callback(undefined, {
      statusCode: 400,
      body: "Path parameter 'id' not defined nor number"
    });
  } else {
    //validar que exista el body
    const id: number = +event.pathParameters.id;
    if (event.body) {
      const body: Pet = JSON.parse(event.body);
      //validar que tenga los atributos obligatorios 'name' y 'species'
      if (body.name && body.species) {
        save(id, body)
          .then(() => {
            callback(undefined, {
              statusCode: 200,
              body: ""
            });
          })
          .catch(() => {
            callback(undefined, {
              statusCode: 404,
              body: "Pet id not found"
            });
          })
      } else {
        callback(undefined, {
          statusCode: 400,
          body: "Bad request body"
        });
      }
    } else {
      callback(undefined, {
        statusCode: 400,
        body: "Request body required"
      });
    }
  }
}
