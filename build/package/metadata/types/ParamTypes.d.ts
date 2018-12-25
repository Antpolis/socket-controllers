/**
 * Controller action's parameter type.
 */
export declare type ParamType = "custom" | "connected_socket" | "socket_body" | "socket_query_param" | "socket_io" | "socket_id" | "socket_request" | "socket_rooms";
/**
 * Controller action's parameter type.
 */
export declare class ParamTypes {
    static CUSTOM: ParamType;
    static CONNECTED_SOCKET: ParamType;
    static SOCKET_BODY: ParamType;
    static SOCKET_QUERY_PARAM: ParamType;
    static SOCKET_IO: string;
    static SOCKET_ID: string;
    static SOCKET_REQUEST: string;
    static SOCKET_ROOMS: string;
}
