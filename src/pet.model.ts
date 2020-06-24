import {Handler} from "aws-lambda/handler";
import {APIGatewayProxyResult} from "aws-lambda/trigger/api-gateway-proxy";

export type Species = 'Dog' | 'Cat' | 'Bird' | 'Ferret';

export interface Pet {
  name: string
  species: Species
  breed?: string
}

export interface PetPut {
  id: number,
  body: Pet
}

export type APIGatewayPetPutHandler = Handler<PetPut, APIGatewayProxyResult>;
