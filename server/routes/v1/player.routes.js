const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

/**
 * Response
 * @typedef {object} Response
 * @property {string} result - The title
 * @property {array<Player>} data - The content
 */

/**
 * ResponseSingle
 * @typedef {object} ResponseSingle
 * @property {string} result - The title
 * @property {player} data - The content
 */

/**
 * ResponseWriteMessage
 * @typedef {object} ResponseWriteMessage
 * @property {string} result - The title
 * @property {string} data - The response message
 */

/**
 * GET /players
 * @summary List all players
 * @description Listing all players from the database
 * @tags Player
 * @operationId listPlayers
 * @return {Response} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "data": [
 *     {
 *       "id": 1,
 *       "username": "iqbal",
 *       "email": "iqbal@maulana.com",
 *       "password": "$$2a$12$N33mrKCeodLXw..8H2r5w.7oLY8th.6Pzj4Vq7kivKvZweI2QEcmm",
 *       "experience": 0,
 *       "lvl": 1,
 *       "createdAt": "2023-06-30T17:00:00.000Z",
 *       "updatedAt": "2023-06-30T17:00:00.000Z"
 *     }
 *   ]
 * }
 */
playerRouter.get("/", PlayerController.getPlayers);

/**
 * POST /players
 * @summary Create new player
 * @description Create a new player and insert it into the database
 * @tags Player
 * @operationId createPlayer
 * @param {CreateOrUpdatePlayer} request.body.required - new player data
 * @return {ResponseSingle} 201 - success response
 * @return {object} 400 - failed response
 * @example response - 201 - example success response
 * {
 *  "result": "Success",
 *  "data": {
 *    "id": 1,
 *    "username": "iqbal",
 *    "email": "iqbal@maulana.com",
 *    "password": "$$2a$12$N33mrKCeodLXw..8H2r5w.7oLY8th.6Pzj4Vq7kivKvZweI2QEcmm",
 *    "experience": 0,
 *    "lvl": 1,
 *    "createdAt": "2023-06-30T17:00:00.000Z",
 *    "updatedAt": "2023-06-30T17:00:00.000Z"
 *  }
 * }
 */
playerRouter.post("/", PlayerController.createPlayer);

/**
 * GET /players/{id}
 * @summary Get player by id
 * @description To get player detail by it's id
 * @tags Player
 * @operationId getPlayerById
 * @param {number} id.path - player id
 * @return {ResponseSingle} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *  "result": "Success",
 *  "data": {
 *    "id": 1,
 *    "username": "iqbal",
 *    "email": "iqbal@maulana.com",
 *    "password": "$$2a$12$N33mrKCeodLXw..8H2r5w.7oLY8th.6Pzj4Vq7kivKvZweI2QEcmm",
 *    "experience": 0,
 *    "lvl": 1,
 *    "createdAt": "2023-06-30T17:00:00.000Z",
 *    "updatedAt": "2023-06-30T17:00:00.000Z"
 *  }
 * }
 */
playerRouter.get("/:id", PlayerController.getPlayerById);

/**
 * PUT /players/{id}
 * @summary Update player by id
 * @description To update player data by it's id
 * @tags Player
 * @operationId putPlayerById
 * @param {number} id.path - Player id
 * @param {CreateOrUpdatePlayer} request.body.required - update player data
 * @return {ResponseWithMessage} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "message" : "Player data updated"
 *   }
 */
playerRouter.put("/:id", PlayerController.updatePlayer);

/**
 * DELETE /players{id}
 * @summary Delete player by id
 * @description To delete player data by it's id
 * @tags Player
 * @operationId deletePlayerById
 * @param {number} id.path - player id
 * @return {ResponseWithMessage} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "message" : "Player data deleted "
 *   }
 */
playerRouter.delete("/:id", PlayerController.deletePlayer);

/**
 * POST /players/exp/{id}
 * @summary Update player experience by id
 * @description To update player experience by it's id
 * @tags Player
 * @operationId postPlayerById
 * @param {number} id.path - player id
 * @param {UpdatePlayerExperience} request.body.required - update player experience  data
 * @return {ResponseWithMessage} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "message" : "Player data updated"
 *   }
 */
playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
