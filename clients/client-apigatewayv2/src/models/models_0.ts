// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ApiGatewayV2ServiceException as __BaseException } from "./ApiGatewayV2ServiceException";

/**
 * @public
 * <p>Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.</p>
 */
export interface Cors {
  /**
   * <p>Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.</p>
   */
  AllowCredentials?: boolean;

  /**
   * <p>Represents a collection of allowed headers. Supported only for HTTP APIs.</p>
   */
  AllowHeaders?: string[];

  /**
   * <p>Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.</p>
   */
  AllowMethods?: string[];

  /**
   * <p>Represents a collection of allowed origins. Supported only for HTTP APIs.</p>
   */
  AllowOrigins?: string[];

  /**
   * <p>Represents a collection of exposed headers. Supported only for HTTP APIs.</p>
   */
  ExposeHeaders?: string[];

  /**
   * <p>The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.</p>
   */
  MaxAge?: number;
}

/**
 * @public
 * @enum
 */
export const ProtocolType = {
  HTTP: "HTTP",
  WEBSOCKET: "WEBSOCKET",
} as const;

/**
 * @public
 */
export type ProtocolType = (typeof ProtocolType)[keyof typeof ProtocolType];

/**
 * @public
 * <p>Represents an API.</p>
 */
export interface Api {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name: string | undefined;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType: ProtocolType | string | undefined;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression: string | undefined;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

/**
 * @public
 * <p>Represents an API mapping.</p>
 */
export interface ApiMapping {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthorizerType = {
  JWT: "JWT",
  REQUEST: "REQUEST",
} as const;

/**
 * @public
 */
export type AuthorizerType = (typeof AuthorizerType)[keyof typeof AuthorizerType];

/**
 * @public
 * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
 */
export interface JWTConfiguration {
  /**
   * <p>A list of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list. See <a href="https://tools.ietf.org/html/rfc7519#section-4.1.3">RFC 7519</a>. Supported only for HTTP APIs.</p>
   */
  Audience?: string[];

  /**
   * <p>The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: https://cognito-idp.<replaceable>\{region\}</replaceable>.amazonaws.com/<replaceable>\{userPoolId\}</replaceable>
   *                . Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  Issuer?: string;
}

/**
 * @public
 * <p>Represents an authorizer.</p>
 */
export interface Authorizer {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  DEPLOYED: "DEPLOYED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * <p>An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.</p>
 */
export interface Deployment {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

/**
 * @public
 * @enum
 */
export const DomainNameStatus = {
  AVAILABLE: "AVAILABLE",
  PENDING_CERTIFICATE_REIMPORT: "PENDING_CERTIFICATE_REIMPORT",
  PENDING_OWNERSHIP_VERIFICATION: "PENDING_OWNERSHIP_VERIFICATION",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DomainNameStatus = (typeof DomainNameStatus)[keyof typeof DomainNameStatus];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  EDGE: "EDGE",
  REGIONAL: "REGIONAL",
} as const;

/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const SecurityPolicy = {
  TLS_1_0: "TLS_1_0",
  TLS_1_2: "TLS_1_2",
} as const;

/**
 * @public
 */
export type SecurityPolicy = (typeof SecurityPolicy)[keyof typeof SecurityPolicy];

/**
 * @public
 * <p>The domain name configuration.</p>
 */
export interface DomainNameConfiguration {
  /**
   * <p>A domain name for the API.</p>
   */
  ApiGatewayDomainName?: string;

  /**
   * <p>An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.</p>
   */
  CertificateName?: string;

  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.</p>
   */
  CertificateUploadDate?: Date;

  /**
   * <p>The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.</p>
   */
  DomainNameStatus?: DomainNameStatus | string;

  /**
   * <p>An optional text message containing detailed information about status of the domain name migration.</p>
   */
  DomainNameStatusMessage?: string;

  /**
   * <p>The endpoint type.</p>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>The Amazon Route 53 Hosted Zone ID of the endpoint.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.</p>
   */
  SecurityPolicy?: SecurityPolicy | string;

  /**
   * <p>The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn</p>
   */
  OwnershipVerificationCertificateArn?: string;
}

/**
 * @public
 */
export interface MutualTlsAuthentication {
  /**
   * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.</p>
   */
  TruststoreUri?: string;

  /**
   * <p>The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.</p>
   */
  TruststoreVersion?: string;

  /**
   * <p>A list of warnings that API Gateway returns while processing your truststore. Invalid certificates produce warnings. Mutual TLS is still enabled, but some clients might not be able to access your API. To resolve warnings, upload a new truststore to S3, and then update you domain name to use the new version.</p>
   */
  TruststoreWarnings?: string[];
}

/**
 * @public
 * <p>Represents a domain name.</p>
 */
export interface DomainName {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  INTERNET: "INTERNET",
  VPC_LINK: "VPC_LINK",
} as const;

/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const ContentHandlingStrategy = {
  CONVERT_TO_BINARY: "CONVERT_TO_BINARY",
  CONVERT_TO_TEXT: "CONVERT_TO_TEXT",
} as const;

/**
 * @public
 */
export type ContentHandlingStrategy = (typeof ContentHandlingStrategy)[keyof typeof ContentHandlingStrategy];

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  AWS: "AWS",
  AWS_PROXY: "AWS_PROXY",
  HTTP: "HTTP",
  HTTP_PROXY: "HTTP_PROXY",
  MOCK: "MOCK",
} as const;

/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const PassthroughBehavior = {
  NEVER: "NEVER",
  WHEN_NO_MATCH: "WHEN_NO_MATCH",
  WHEN_NO_TEMPLATES: "WHEN_NO_TEMPLATES",
} as const;

/**
 * @public
 */
export type PassthroughBehavior = (typeof PassthroughBehavior)[keyof typeof PassthroughBehavior];

/**
 * @public
 * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
 */
export interface TlsConfig {
  /**
   * <p>If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.</p>
   */
  ServerNameToVerify?: string;
}

/**
 * @public
 * <p>Represents an integration.</p>
 */
export interface Integration {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: Record<string, string>;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: Record<string, string>;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;
}

/**
 * @public
 * <p>Represents an integration response.</p>
 */
export interface IntegrationResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: Record<string, string>;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: Record<string, string>;

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;
}

/**
 * @public
 * <p>Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.</p>
 */
export interface Model {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

/**
 * @public
 * @enum
 */
export const AuthorizationType = {
  AWS_IAM: "AWS_IAM",
  CUSTOM: "CUSTOM",
  JWT: "JWT",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AuthorizationType = (typeof AuthorizationType)[keyof typeof AuthorizationType];

/**
 * @public
 * <p>Validation constraints imposed on parameters of a request (path, query string, headers).</p>
 */
export interface ParameterConstraints {
  /**
   * <p>Whether or not the parameter is required.</p>
   */
  Required?: boolean;
}

/**
 * @public
 * <p>Represents a route.</p>
 */
export interface Route {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: Record<string, string>;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

/**
 * @public
 * <p>Represents a route response.</p>
 */
export interface RouteResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: Record<string, string>;

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey: string | undefined;
}

/**
 * @public
 * <p>Settings for logging access in a stage.</p>
 */
export interface AccessLogSettings {
  /**
   * <p>The ARN of the CloudWatch Logs log group to receive access logs.</p>
   */
  DestinationArn?: string;

  /**
   * <p>A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.</p>
   */
  Format?: string;
}

/**
 * @public
 * @enum
 */
export const LoggingLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];

/**
 * @public
 * <p>Represents a collection of route settings.</p>
 */
export interface RouteSettings {
  /**
   * <p>Specifies whether (true) or not (false) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
   */
  DataTraceEnabled?: boolean;

  /**
   * <p>Specifies whether detailed metrics are enabled.</p>
   */
  DetailedMetricsEnabled?: boolean;

  /**
   * <p>Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
   */
  LoggingLevel?: LoggingLevel | string;

  /**
   * <p>Specifies the throttling burst limit.</p>
   */
  ThrottlingBurstLimit?: number;

  /**
   * <p>Specifies the throttling rate limit.</p>
   */
  ThrottlingRateLimit?: number;
}

/**
 * @public
 * <p>Represents an API stage.</p>
 */
export interface Stage {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: Record<string, RouteSettings>;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: Record<string, string>;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const VpcLinkStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type VpcLinkStatus = (typeof VpcLinkStatus)[keyof typeof VpcLinkStatus];

/**
 * @public
 * @enum
 */
export const VpcLinkVersion = {
  V2: "V2",
} as const;

/**
 * @public
 */
export type VpcLinkVersion = (typeof VpcLinkVersion)[keyof typeof VpcLinkVersion];

/**
 * @public
 * <p>Represents a VPC link.</p>
 */
export interface VpcLink {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;
}

/**
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Creates a new Api resource to represent an API.</p>
 */
export interface CreateApiRequest {
  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The name of the API.</p>
   */
  Name: string | undefined;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType: ProtocolType | string | undefined;

  /**
   * <p>This property is part of quick create. If you don't specify a routeKey, a default route of $default is created. The $default route acts as a catch-all for any request made to your API, for a particular stage. The $default route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.</p>
   */
  Target?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface CreateApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

/**
 * @public
 * <p>The resource specified in the request was not found. See the message field for more information.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 * <p>A limit has been exceeded. See the accompanying error message for details.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The limit type.</p>
   */
  LimitType?: string;

  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.LimitType = opts.LimitType;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Creates a new ApiMapping resource to represent an API mapping.</p>
 */
export interface CreateApiMappingRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * The API mapping key.
   */
  ApiMappingKey?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

/**
 * @public
 */
export interface CreateApiMappingResponse {
  /**
   * <p>The API identifier.</p>
   */
  ApiId?: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;
}

/**
 * @public
 * <p>Creates a new Authorizer resource to represent an authorizer.</p>
 */
export interface CreateAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType: AuthorizerType | string | undefined;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource: string[] | undefined;

  /**
   * <p>This parameter is not used.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateAuthorizerResponse {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Creates a new Deployment resource to represent a deployment.</p>
 */
export interface CreateDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The description for the deployment resource.</p>
   */
  Description?: string;

  /**
   * <p>The name of the Stage resource for the Deployment resource to create.</p>
   */
  StageName?: string;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface MutualTlsAuthenticationInput {
  /**
   * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.</p>
   */
  TruststoreUri?: string;

  /**
   * <p>The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.</p>
   */
  TruststoreVersion?: string;
}

/**
 * @public
 * <p>Creates a new DomainName resource to represent a domain name.</p>
 */
export interface CreateDomainNameRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthenticationInput;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDomainNameResponse {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
 */
export interface TlsConfigInput {
  /**
   * <p>If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.</p>
   */
  ServerNameToVerify?: string;
}

/**
 * @public
 * <p>Creates a new Integration resource to represent an integration.</p>
 */
export interface CreateIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The description of the integration.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType: IntegrationType | string | undefined;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *                , where
   *                   <replaceable>\{location\}</replaceable>
   *                 is querystring, path, or header; and
   *                   <replaceable>\{name\}</replaceable>
   *                 must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: Record<string, string>;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: Record<string, string>;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The template selection expression for the integration.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfigInput;
}

/**
 * @public
 */
export interface CreateIntegrationResult {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: Record<string, string>;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: Record<string, string>;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;
}

/**
 * @public
 * <p>Creates a new IntegrationResponse resource to represent an integration response.</p>
 */
export interface CreateIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where \{name\} is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where \{name\} is a valid and unique response header name and \{JSON-expression\} is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: Record<string, string>;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: Record<string, string>;

  /**
   * <p>The template selection expression for the integration response. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;
}

/**
 * @public
 */
export interface CreateIntegrationResponseResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: Record<string, string>;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: Record<string, string>;

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;
}

/**
 * @public
 * <p>Creates a new Model.</p>
 */
export interface CreateModelRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name: string | undefined;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema: string | undefined;
}

/**
 * @public
 */
export interface CreateModelResponse {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

/**
 * @public
 * <p>Creates a new Route resource to represent a route.</p>
 */
export interface CreateRouteRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether an API key is required for the route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>The authorization scopes supported by this route.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: Record<string, string>;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey: string | undefined;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

/**
 * @public
 */
export interface CreateRouteResult {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: Record<string, string>;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

/**
 * @public
 * <p>Creates a new RouteResponse resource to represent a route response.</p>
 */
export interface CreateRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model selection expression for the route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The response models for the route response.</p>
   */
  ResponseModels?: Record<string, string>;

  /**
   * <p>The route response parameters.</p>
   */
  ResponseParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route response key.</p>
   */
  RouteResponseKey: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteResponseResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: Record<string, string>;

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;
}

/**
 * @public
 * <p>Creates a new Stage resource to represent a stage.</p>
 */
export interface CreateStageRequest {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The deployment identifier of the API stage.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description for the API stage.</p>
   */
  Description?: string;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: Record<string, RouteSettings>;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: Record<string, string>;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStageResponse {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: Record<string, RouteSettings>;

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: Record<string, string>;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Creates a VPC link</p>
 */
export interface CreateVpcLinkRequest {
  /**
   * <p>The name of the VPC link.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateVpcLinkResponse {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId?: string;

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;
}

/**
 * @public
 */
export interface DeleteAccessLogSettingsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiMappingRequest {
  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string | undefined;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCorsConfigurationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainNameRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteRequestParameterRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route request parameter key.</p>
   */
  RequestParameterKey: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteSettingsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route key.</p>
   */
  RouteKey: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteStageRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcLinkRequest {
  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcLinkResponse {}

/**
 * @public
 */
export interface ExportApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.</p>
   */
  ExportVersion?: string;

  /**
   * <p>Specifies whether to include <a href="https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html">API Gateway extensions</a> in the exported API definition. API Gateway extensions are included by default.</p>
   */
  IncludeExtensions?: boolean;

  /**
   * <p>The output type of the exported definition file. Valid values are JSON and YAML.</p>
   */
  OutputType: string | undefined;

  /**
   * <p>The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.</p>
   */
  Specification: string | undefined;

  /**
   * <p>The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.</p>
   */
  StageName?: string;
}

/**
 * @public
 */
export interface ExportApiResponse {
  /**
   * <p>Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0.</p>
   */
  body?: Uint8Array;
}

/**
 * @public
 */
export interface GetApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;
}

/**
 * @public
 */
export interface GetApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

/**
 * @public
 */
export interface GetApiMappingRequest {
  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string | undefined;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface GetApiMappingResponse {
  /**
   * <p>The API identifier.</p>
   */
  ApiId?: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;
}

/**
 * @public
 */
export interface GetApiMappingsRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetApiMappingsResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: ApiMapping[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetApisRequest {
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetApisResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Api[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizerResponse {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface GetAuthorizersRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAuthorizersResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Authorizer[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentResponse {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface GetDeploymentsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDeploymentsResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Deployment[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDomainNameRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNameResponse {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDomainNamesRequest {
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDomainNamesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: DomainName[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResult {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: Record<string, string>;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: Record<string, string>;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;
}

/**
 * @public
 */
export interface GetIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponseResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: Record<string, string>;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: Record<string, string>;

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;
}

/**
 * @public
 */
export interface GetIntegrationResponsesRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIntegrationResponsesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: IntegrationResponse[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIntegrationsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIntegrationsResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Integration[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetModelRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;
}

/**
 * @public
 */
export interface GetModelResponse {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

/**
 * @public
 */
export interface GetModelsRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetModelsResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Model[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetModelTemplateRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;
}

/**
 * @public
 */
export interface GetModelTemplateResponse {
  /**
   * <p>The template value.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface GetRouteRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResult {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: Record<string, string>;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

/**
 * @public
 */
export interface GetRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponseResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: Record<string, string>;

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;
}

/**
 * @public
 */
export interface GetRouteResponsesRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponsesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: RouteResponse[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetRoutesRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetRoutesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Route[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetStageRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface GetStageResponse {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: Record<string, RouteSettings>;

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: Record<string, string>;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetStagesRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetStagesResponse {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Stage[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * <p>Represents a collection of tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetVpcLinkRequest {
  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;
}

/**
 * @public
 */
export interface GetVpcLinkResponse {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId?: string;

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;
}

/**
 * @public
 */
export interface GetVpcLinksRequest {
  /**
   * <p>The maximum number of elements to be returned for this resource.</p>
   */
  MaxResults?: string;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetVpcLinksResponse {
  /**
   * <p>A collection of VPC links.</p>
   */
  Items?: VpcLink[];

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface ImportApiRequest {
  /**
   * <p>Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.</p>
   */
  Basepath?: string;

  /**
   * <p>The OpenAPI definition. Supported only for HTTP APIs.</p>
   */
  Body: string | undefined;

  /**
   * <p>Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.</p>
   */
  FailOnWarnings?: boolean;
}

/**
 * @public
 */
export interface ImportApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

/**
 * @public
 * <p></p>
 */
export interface ReimportApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.</p>
   */
  Basepath?: string;

  /**
   * <p>The OpenAPI definition. Supported only for HTTP APIs.</p>
   */
  Body: string | undefined;

  /**
   * <p>Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.</p>
   */
  FailOnWarnings?: boolean;
}

/**
 * @public
 */
export interface ReimportApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

/**
 * @public
 */
export interface ResetAuthorizersCacheRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 * <p>Creates a new Tag resource to represent a tag.</p>
 */
export interface TagResourceRequest {
  /**
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource ARN for the tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The Tag keys to delete</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * <p>Updates an Api.</p>
 */
export interface UpdateApiRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, don't specify this parameter. Currently, this property is not used for HTTP integrations. If provided, this value replaces the credentials associated with the quick create integration. Supported only for HTTP APIs.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>This property is part of quick create. If not specified, the route created using quick create is kept. Otherwise, this value replaces the route key of the quick create route. Additional routes may still be added after the API is updated. Supported only for HTTP APIs.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>This property is part of quick create. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. The value provided updates the integration URI and integration type. You can update a quick-created target, but you can't remove it from an API. Supported only for HTTP APIs.</p>
   */
  Target?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdateApiResponse {
  /**
   * <p>The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>A CORS configuration. Supported only for HTTP APIs.</p>
   */
  CorsConfiguration?: Cors;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  DisableExecuteApiEndpoint?: boolean;

  /**
   * <p>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</p>
   */
  ImportInfo?: string[];

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A collection of tags associated with the API.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during API import.</p>
   */
  Warnings?: string[];
}

/**
 * @public
 * <p>Updates an ApiMapping.</p>
 */
export interface UpdateApiMappingRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string | undefined;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;
}

/**
 * @public
 */
export interface UpdateApiMappingResponse {
  /**
   * <p>The API identifier.</p>
   */
  ApiId?: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;
}

/**
 * @public
 * <p>Updates an Authorizer.</p>
 */
export interface UpdateAuthorizerRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId: string | undefined;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>This parameter is not used.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateAuthorizerResponse {
  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerCredentialsArn?: string;

  /**
   * <p>The authorizer identifier.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p>
   */
  AuthorizerPayloadFormatVersion?: string;

  /**
   * <p>The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.</p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).</p>
   */
  AuthorizerType?: AuthorizerType | string;

  /**
   * <p>The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>\{account_id\}</replaceable>:function:<replaceable>\{lambda_function_name\}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>\{region\}</replaceable>:lambda:path/<replaceable>\{service_api\}</replaceable>
   *                , where <replaceable></replaceable>\{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.</p>
   */
  AuthorizerUri?: string;

  /**
   * <p>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a></p>
   */
  EnableSimpleResponses?: boolean;

  /**
   * <p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>
   */
  IdentitySource?: string[];

  /**
   * <p>The validation expression does not apply to the REQUEST authorizer.</p>
   */
  IdentityValidationExpression?: string;

  /**
   * <p>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</p>
   */
  JwtConfiguration?: JWTConfiguration;

  /**
   * <p>The name of the authorizer.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Updates a Deployment.</p>
 */
export interface UpdateDeploymentRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId: string | undefined;

  /**
   * <p>The description for the deployment resource.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateDeploymentResponse {
  /**
   * <p>Specifies whether a deployment was automatically released.</p>
   */
  AutoDeployed?: boolean;

  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
   */
  DeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Updates a DomainName.</p>
 */
export interface UpdateDomainNameRequest {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthenticationInput;
}

/**
 * @public
 */
export interface UpdateDomainNameResponse {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: DomainNameConfiguration[];

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name.</p>
   */
  MutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * <p>The collection of tags associated with a domain name.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Updates an Integration.</p>
 */
export interface UpdateIntegrationRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>The description of the integration</p>
   */
  Description?: string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: Record<string, string>;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: Record<string, string>;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The template selection expression for the integration.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfigInput;
}

/**
 * @public
 */
export interface UpdateIntegrationResult {
  /**
   * <p>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>The ID of the VPC link for a private integration. Supported only for HTTP APIs.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.</p>
   */
  IntegrationSubtype?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
   */
  PassthroughBehavior?: PassthroughBehavior | string;

  /**
   * <p>Specifies the format of the payload sent to an integration. Required for HTTP APIs.</p>
   */
  PayloadFormatVersion?: string;

  /**
   * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>\{location\}</replaceable>.<replaceable>\{name\}</replaceable>
   *           , where
   *             <replaceable>\{location\}</replaceable>
   *            is querystring, path, or header; and
   *             <replaceable>\{name\}</replaceable>
   *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  RequestParameters?: Record<string, string>;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</p>
   */
  RequestTemplates?: Record<string, string>;

  /**
   * <p>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
   */
  ResponseParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The template selection expression for the integration. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.</p>
   */
  TimeoutInMillis?: number;

  /**
   * <p>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</p>
   */
  TlsConfig?: TlsConfig;
}

/**
 * @public
 * <p>Updates an IntegrationResponses.</p>
 */
export interface UpdateIntegrationResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration ID.</p>
   */
  IntegrationId: string | undefined;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId: string | undefined;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.<replaceable>\{name\}</replaceable>
   *                , where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.<replaceable>\{name\}</replaceable>
   *                 or integration.response.body.<replaceable>\{JSON-expression\}</replaceable>
   *                , where
   *                   <replaceable>\{name\}</replaceable>
   *                 is a valid and unique response header name and
   *                   <replaceable>\{JSON-expression\}</replaceable>
   *                 is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: Record<string, string>;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: Record<string, string>;

  /**
   * <p>The template selection expression for the integration response. Supported only for WebSocket APIs.</p>
   */
  TemplateSelectionExpression?: string;
}

/**
 * @public
 */
export interface UpdateIntegrationResponseResponse {
  /**
   * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | string;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: Record<string, string>;

  /**
   * <p>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: Record<string, string>;

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;
}

/**
 * @public
 * <p>Updates a Model.</p>
 */
export interface UpdateModelRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model ID.</p>
   */
  ModelId: string | undefined;

  /**
   * <p>The name of the model.</p>
   */
  Name?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

/**
 * @public
 */
export interface UpdateModelResponse {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema draft 4 model.</p>
   */
  Schema?: string;
}

/**
 * @public
 * <p>Updates a Route.</p>
 */
export interface UpdateRouteRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether an API key is required for the route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>The authorization scopes supported by this route.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: Record<string, string>;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

/**
 * @public
 */
export interface UpdateRouteResult {
  /**
   * <p>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</p>
   */
  ApiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  AuthorizationScopes?: string[];

  /**
   * <p>The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.</p>
   */
  AuthorizationType?: AuthorizationType | string;

  /**
   * <p>The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  AuthorizerId?: string;

  /**
   * <p>The model selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The operation name for the route.</p>
   */
  OperationName?: string;

  /**
   * <p>The request models for the route. Supported only for WebSocket APIs.</p>
   */
  RequestModels?: Record<string, string>;

  /**
   * <p>The request parameters for the route. Supported only for WebSocket APIs.</p>
   */
  RequestParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>The route ID.</p>
   */
  RouteId?: string;

  /**
   * <p>The route key for the route.</p>
   */
  RouteKey?: string;

  /**
   * <p>The route response selection expression for the route. Supported only for WebSocket APIs.</p>
   */
  RouteResponseSelectionExpression?: string;

  /**
   * <p>The target for the route.</p>
   */
  Target?: string;
}

/**
 * @public
 * <p>Updates a RouteResponse.</p>
 */
export interface UpdateRouteResponseRequest {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The model selection expression for the route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The response models for the route response.</p>
   */
  ResponseModels?: Record<string, string>;

  /**
   * <p>The route response parameters.</p>
   */
  ResponseParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string | undefined;

  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string | undefined;

  /**
   * <p>The route response key.</p>
   */
  RouteResponseKey?: string;
}

/**
 * @public
 */
export interface UpdateRouteResponseResponse {
  /**
   * <p>Represents the model selection expression of a route response. Supported only for WebSocket APIs.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: Record<string, string>;

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: Record<string, ParameterConstraints>;

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;
}

/**
 * @public
 * <p>Updates a Stage.</p>
 */
export interface UpdateStageRequest {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description for the API stage.</p>
   */
  Description?: string;

  /**
   * <p>Route settings for the stage.</p>
   */
  RouteSettings?: Record<string, RouteSettings>;

  /**
   * <p>The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.</p>
   */
  StageName: string | undefined;

  /**
   * <p>A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateStageResponse {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: AccessLogSettings;

  /**
   * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
   */
  ApiGatewayManaged?: boolean;

  /**
   * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: RouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Route settings for the stage, by routeKey.</p>
   */
  RouteSettings?: Record<string, RouteSettings>;

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
   */
  StageVariables?: Record<string, string>;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Updates a VPC link.</p>
 */
export interface UpdateVpcLinkRequest {
  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcLinkResponse {
  /**
   * <p>The timestamp when the VPC link was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name of the VPC link.</p>
   */
  Name?: string;

  /**
   * <p>A list of security group IDs for the VPC link.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs to include in the VPC link.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Tags for the VPC link.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The ID of the VPC link.</p>
   */
  VpcLinkId?: string;

  /**
   * <p>The status of the VPC link.</p>
   */
  VpcLinkStatus?: VpcLinkStatus | string;

  /**
   * <p>A message summarizing the cause of the status of the VPC link.</p>
   */
  VpcLinkStatusMessage?: string;

  /**
   * <p>The version of the VPC link.</p>
   */
  VpcLinkVersion?: VpcLinkVersion | string;
}
