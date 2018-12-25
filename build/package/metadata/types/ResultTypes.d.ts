/**
 * Action result handler type.
 */
export declare type ResultType = "emit_on_success" | "emit_on_fail" | "skip_emit_on_empty_result";
/**
 * Static access to result handler types.
 */
export declare class ResultTypes {
    static EMIT_ON_SUCCESS: ResultType;
    static EMIT_ON_FAIL: ResultType;
    static SKIP_EMIT_ON_EMPTY_RESULT: ResultType;
}
