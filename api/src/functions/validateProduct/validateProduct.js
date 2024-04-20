import { logger } from 'src/lib/logger'
import { product } from 'src/services/products/products'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event, _context) => {
  logger.info(`${event.httpMethod} ${event.path}: validateProduct function`)

  const { id } = event.queryStringParameters
  const {
    price,
    weightInPounds,
    widthInInches,
    lengthInInches,
    heightInInches,
  } = await product({ id: parseInt(id) })

  return {
    statusCode: 200,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      cors: {
        origin: '*',
      },
    },
    body: JSON.stringify({
      id: id,
      price: price,
      customFields: [],
      url: `${process.env.REDWOOD_ENV_API_URL}/validateProduct?id=${id}`,
      dimensions: {
        weight: weightInPounds,
        width: widthInInches,
        height: heightInInches,
        length: lengthInInches,
      },
    }),
  }
}
