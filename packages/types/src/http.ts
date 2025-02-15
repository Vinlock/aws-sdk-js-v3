import { AbortSignal } from "./abort";
/**
 * @public
 *
 * A collection of key/value pairs with case-insensitive keys.
 */
export interface Headers extends Map<string, string> {
  /**
   * Returns a new instance of Headers with the specified header set to the
   * provided value. Does not modify the original Headers instance.
   *
   * @param headerName - The name of the header to add or overwrite
   * @param headerValue - The value to which the header should be set
   */
  withHeader(headerName: string, headerValue: string): Headers;

  /**
   * Returns a new instance of Headers without the specified header. Does not
   * modify the original Headers instance.
   *
   * @param headerName - The name of the header to remove
   */
  withoutHeader(headerName: string): Headers;
}

/**
 * @public
 *
 * A mapping of header names to string values. Multiple values for the same
 * header should be represented as a single string with values separated by
 * `, `.
 *
 * Keys should be considered case insensitive, even if this is not enforced by a
 * particular implementation. For example, given the following HeaderBag, where
 * keys differ only in case:
 *
 * ```json
 *    {
 *        'x-amz-date': '2000-01-01T00:00:00Z',
 *        'X-Amz-Date': '2001-01-01T00:00:00Z'
 *    }
 * ```
 *
 * The SDK may at any point during processing remove one of the object
 * properties in favor of the other. The headers may or may not be combined, and
 * the SDK will not deterministically select which header candidate to use.
 */
export type HeaderBag = Record<string, string>;

/**
 * @public
 *
 * Represents an HTTP message with headers and an optional static or streaming
 * body. bode: ArrayBuffer | ArrayBufferView | string | Uint8Array | Readable | ReadableStream;
 */
export interface HttpMessage {
  headers: HeaderBag;
  body?: any;
}

/**
 * @public
 *
 * A mapping of query parameter names to strings or arrays of strings, with the
 * second being used when a parameter contains a list of values. Value can be set
 * to null when query is not in key-value pairs shape
 */
export type QueryParameterBag = Record<string, string | Array<string> | null>;

/**
 * @public
 *
 * @deprecated use {@link EndpointV2} from `@aws-sdk/types`.
 */
export interface Endpoint {
  protocol: string;
  hostname: string;
  port?: number;
  path: string;
  query?: QueryParameterBag;
}

/**
 * @public
 *
 * Interface an HTTP request class. Contains
 * addressing information in addition to standard message properties.
 */
export interface HttpRequest extends HttpMessage, Endpoint {
  method: string;
}

/**
 * @public
 *
 * Represents an HTTP message as received in reply to a request. Contains a
 * numeric status code in addition to standard message properties.
 */
export interface HttpResponse extends HttpMessage {
  statusCode: number;
}

/**
 * @public
 *
 * Represents HTTP message whose body has been resolved to a string. This is
 * used in parsing http message.
 */
export interface ResolvedHttpResponse extends HttpResponse {
  body: string;
}

/**
 * @public
 *
 * Represents the options that may be passed to an Http Handler.
 */
export interface HttpHandlerOptions {
  abortSignal?: AbortSignal;

  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}
