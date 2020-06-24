# webinar-aws-serverless-2020-june

Proyecto de apoyo a la realización del **Serverless Webinar** realizado el día miércoles 24 de junio 2020 con el código fuente de las demostraciones prácticas.

Cada una de las demostraciones se separó en distintas ramas de git según la siguiente definición:

- demo1_complete: resultado final de la 1era demostración del webinar
- demo2_initial: 
- demo2_complete: resultado final de la 2da demostración del webinar

## Requisitos

Los requisitos son los siguientes:

- Node + NPM
- aws-cli (instalado y configurado)
- aws-sam-cli

## Tecnologías

Alguna de las tecnologías base involucradas en las demostraciones son:

- Node.js (Javascript)
- TypeScript
- Git
- Yaml

## Demos

### Demo 2

Para transcompilar el código TypeScript a Javascript usar el comando `tsc`, lo cual generará los archivos json en la carpeta `dist`. Podría ser necesaio vaciar la carpeta `dist` previamente para limpiar procesos anteriores. 

Antes de hacer el deploy del nuevo stack es necesario subir a un bucket de S3 la configuración de OpenAPI, lo cual se puede realizar a través de la consola de la siguiente manera:

`aws s3 cp openapi.yaml ${S3_OPENAPI_LOCATION} --sse`

Para luego proceder a realizar el `package` y el `deploy` usando los siguientes comandos:

```
sam package --output-template-file packaged.yaml \
    --template-file cloudformation.yaml \
    --s3-bucket ${S3_BUCKET}

sam deploy --template-file packaged.yaml \
    --capabilities CAPABILITY_NAMED_IAM \
    --region us-east-1 \
    --stack-name ${STACK_NAME} \
    --parameter-overrides OpenAPIFile=${S3_OPENAPI_LOCATION}
```
