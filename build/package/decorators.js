"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var ActionTypes_1 = require("./metadata/types/ActionTypes");
var ParamTypes_1 = require("./metadata/types/ParamTypes");
var ResultTypes_1 = require("./metadata/types/ResultTypes");
/**
 * Registers a class to be a socket controller that can listen to websocket events and respond to them.
 *
 * @param namespace Namespace in which this controller's events will be registered.
 */
function SocketController(namespace) {
    return function (object) {
        var metadata = {
            namespace: namespace,
            target: object
        };
        index_1.defaultMetadataArgsStorage().controllers.push(metadata);
    };
}
exports.SocketController = SocketController;
/**
 * Registers controller's action to be executed when socket receives message with given name.
 */
function OnMessage(name) {
    return function (object, methodName) {
        var metadata = {
            name: name,
            target: object.constructor,
            method: methodName,
            type: ActionTypes_1.ActionTypes.MESSAGE
        };
        index_1.defaultMetadataArgsStorage().actions.push(metadata);
    };
}
exports.OnMessage = OnMessage;
/**
 * Registers controller's action to be executed when client connects to the socket.
 */
function OnConnect() {
    return function (object, methodName) {
        var metadata = {
            target: object.constructor,
            method: methodName,
            type: ActionTypes_1.ActionTypes.CONNECT
        };
        index_1.defaultMetadataArgsStorage().actions.push(metadata);
    };
}
exports.OnConnect = OnConnect;
/**
 * Registers controller's action to be executed when client disconnects from the socket.
 */
function OnDisconnect() {
    return function (object, methodName) {
        var metadata = {
            target: object.constructor,
            method: methodName,
            type: ActionTypes_1.ActionTypes.DISCONNECT
        };
        index_1.defaultMetadataArgsStorage().actions.push(metadata);
    };
}
exports.OnDisconnect = OnDisconnect;
/**
 * Injects connected client's socket object to the controller action.
 */
function ConnectedSocket() {
    return function (object, methodName, index) {
        var format = Reflect.getMetadata("design:paramtypes", object, methodName)[index];
        var metadata = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes_1.ParamTypes.CONNECTED_SOCKET,
            reflectedType: format
        };
        index_1.defaultMetadataArgsStorage().params.push(metadata);
    };
}
exports.ConnectedSocket = ConnectedSocket;
/**
 * Injects socket.io object that initialized a connection.
 */
function SocketIO() {
    return function (object, methodName, index) {
        var format = Reflect.getMetadata("design:paramtypes", object, methodName)[index];
        var metadata = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes_1.ParamTypes.SOCKET_IO,
            reflectedType: format
        };
        index_1.defaultMetadataArgsStorage().params.push(metadata);
    };
}
exports.SocketIO = SocketIO;
/**
 * Injects received message body.
 */
function MessageBody(options) {
    return function (object, methodName, index) {
        var format = Reflect.getMetadata("design:paramtypes", object, methodName)[index];
        var metadata = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes_1.ParamTypes.SOCKET_BODY,
            reflectedType: format,
            classTransformOptions: options && options.classTransformOptions ? options.classTransformOptions : undefined
        };
        index_1.defaultMetadataArgsStorage().params.push(metadata);
    };
}
exports.MessageBody = MessageBody;
/**
 * Injects query parameter from the received socket request.
 */
function SocketQueryParam(name) {
    return function (object, methodName, index) {
        var format = Reflect.getMetadata("design:paramtypes", object, methodName)[index];
        var metadata = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes_1.ParamTypes.SOCKET_QUERY_PARAM,
            reflectedType: format,
            value: name
        };
        index_1.defaultMetadataArgsStorage().params.push(metadata);
    };
}
exports.SocketQueryParam = SocketQueryParam;
/**
 * Injects socket id from the received request.
 */
function SocketId() {
    return function (object, methodName, index) {
        var format = Reflect.getMetadata("design:paramtypes", object, methodName)[index];
        var metadata = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes_1.ParamTypes.SOCKET_ID,
            reflectedType: format
        };
        index_1.defaultMetadataArgsStorage().params.push(metadata);
    };
}
exports.SocketId = SocketId;
/**
 * Injects request object received by socket.
 */
function SocketRequest() {
    return function (object, methodName, index) {
        var format = Reflect.getMetadata("design:paramtypes", object, methodName)[index];
        var metadata = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes_1.ParamTypes.SOCKET_REQUEST,
            reflectedType: format
        };
        index_1.defaultMetadataArgsStorage().params.push(metadata);
    };
}
exports.SocketRequest = SocketRequest;
/**
 * Injects rooms of the connected socket client.
 */
function SocketRooms() {
    return function (object, methodName, index) {
        var format = Reflect.getMetadata("design:paramtypes", object, methodName)[index];
        var metadata = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes_1.ParamTypes.SOCKET_ROOMS,
            reflectedType: format
        };
        index_1.defaultMetadataArgsStorage().params.push(metadata);
    };
}
exports.SocketRooms = SocketRooms;
/**
 * Registers a new middleware to be registered in the socket.io.
 */
function Middleware(options) {
    return function (object) {
        var metadata = {
            target: object,
            priority: options && options.priority ? options.priority : undefined
        };
        index_1.defaultMetadataArgsStorage().middlewares.push(metadata);
    };
}
exports.Middleware = Middleware;
/**
 * If this decorator is set then after controller action will emit message with the given name after action execution.
 * It will emit message only if controller succeed without errors.
 * If result is a Promise then it will wait until promise is resolved and emit a message.
 */
function EmitOnSuccess(messageName, options) {
    return function (object, methodName) {
        var metadata = {
            target: object.constructor,
            method: methodName,
            type: ResultTypes_1.ResultTypes.EMIT_ON_SUCCESS,
            value: messageName,
            classTransformOptions: options && options.classTransformOptions ? options.classTransformOptions : undefined
        };
        index_1.defaultMetadataArgsStorage().results.push(metadata);
    };
}
exports.EmitOnSuccess = EmitOnSuccess;
/**
 * If this decorator is set then after controller action will emit message with the given name after action execution.
 * It will emit message only if controller throw an exception.
 * If result is a Promise then it will wait until promise throw an error and emit a message.
 */
function EmitOnFail(messageName, options) {
    return function (object, methodName) {
        var metadata = {
            target: object.constructor,
            method: methodName,
            type: ResultTypes_1.ResultTypes.EMIT_ON_FAIL,
            value: messageName,
            classTransformOptions: options && options.classTransformOptions ? options.classTransformOptions : undefined
        };
        index_1.defaultMetadataArgsStorage().results.push(metadata);
    };
}
exports.EmitOnFail = EmitOnFail;
/**
 * Used in conjunction with @EmitOnSuccess and @EmitOnFail decorators.
 * If result returned by controller action is null or undefined then messages will not be emitted by @EmitOnSuccess
 * or @EmitOnFail decorators.
 */
function SkipEmitOnEmptyResult() {
    return function (object, methodName) {
        var metadata = {
            target: object.constructor,
            method: methodName,
            type: ResultTypes_1.ResultTypes.SKIP_EMIT_ON_EMPTY_RESULT
        };
        index_1.defaultMetadataArgsStorage().results.push(metadata);
    };
}
exports.SkipEmitOnEmptyResult = SkipEmitOnEmptyResult;

//# sourceMappingURL=decorators.js.map