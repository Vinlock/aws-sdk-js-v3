// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateDestinationCommandInput, CreateDestinationCommandOutput } from "../commands/CreateDestinationCommand";
import { CreateSiteCommandInput, CreateSiteCommandOutput } from "../commands/CreateSiteCommand";
import { CreateWorkerCommandInput, CreateWorkerCommandOutput } from "../commands/CreateWorkerCommand";
import { CreateWorkerFleetCommandInput, CreateWorkerFleetCommandOutput } from "../commands/CreateWorkerFleetCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "../commands/DeleteDestinationCommand";
import { DeleteSiteCommandInput, DeleteSiteCommandOutput } from "../commands/DeleteSiteCommand";
import { DeleteWorkerCommandInput, DeleteWorkerCommandOutput } from "../commands/DeleteWorkerCommand";
import { DeleteWorkerFleetCommandInput, DeleteWorkerFleetCommandOutput } from "../commands/DeleteWorkerFleetCommand";
import { GetDestinationCommandInput, GetDestinationCommandOutput } from "../commands/GetDestinationCommand";
import { GetSiteCommandInput, GetSiteCommandOutput } from "../commands/GetSiteCommand";
import { GetWorkerCommandInput, GetWorkerCommandOutput } from "../commands/GetWorkerCommand";
import { GetWorkerFleetCommandInput, GetWorkerFleetCommandOutput } from "../commands/GetWorkerFleetCommand";
import { ListDestinationsCommandInput, ListDestinationsCommandOutput } from "../commands/ListDestinationsCommand";
import { ListSitesCommandInput, ListSitesCommandOutput } from "../commands/ListSitesCommand";
import { ListWorkerFleetsCommandInput, ListWorkerFleetsCommandOutput } from "../commands/ListWorkerFleetsCommand";
import { ListWorkersCommandInput, ListWorkersCommandOutput } from "../commands/ListWorkersCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "../commands/UpdateDestinationCommand";
import { UpdateSiteCommandInput, UpdateSiteCommandOutput } from "../commands/UpdateSiteCommand";
import { UpdateWorkerCommandInput, UpdateWorkerCommandOutput } from "../commands/UpdateWorkerCommand";
import { UpdateWorkerFleetCommandInput, UpdateWorkerFleetCommandOutput } from "../commands/UpdateWorkerFleetCommand";
import { IoTRoboRunnerServiceException as __BaseException } from "../models/IoTRoboRunnerServiceException";
import {
  AccessDeniedException,
  CartesianCoordinates,
  ConflictException,
  Destination,
  InternalServerException,
  Orientation,
  PositionCoordinates,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Site,
  ThrottlingException,
  ValidationException,
  VendorProperties,
  Worker,
  WorkerFleet,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateDestinationCommand
 */
export const se_CreateDestinationCommand = async (
  input: CreateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createDestination";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalFixedProperties != null && { additionalFixedProperties: input.additionalFixedProperties }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
    ...(input.site != null && { site: input.site }),
    ...(input.state != null && { state: input.state }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateSiteCommand
 */
export const se_CreateSiteCommand = async (
  input: CreateSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createSite";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.countryCode != null && { countryCode: input.countryCode }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateWorkerCommand
 */
export const se_CreateWorkerCommand = async (
  input: CreateWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createWorker";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalFixedProperties != null && { additionalFixedProperties: input.additionalFixedProperties }),
    ...(input.additionalTransientProperties != null && {
      additionalTransientProperties: input.additionalTransientProperties,
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.fleet != null && { fleet: input.fleet }),
    ...(input.name != null && { name: input.name }),
    ...(input.orientation != null && { orientation: se_Orientation(input.orientation, context) }),
    ...(input.position != null && { position: se_PositionCoordinates(input.position, context) }),
    ...(input.vendorProperties != null && { vendorProperties: se_VendorProperties(input.vendorProperties, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateWorkerFleetCommand
 */
export const se_CreateWorkerFleetCommand = async (
  input: CreateWorkerFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createWorkerFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalFixedProperties != null && { additionalFixedProperties: input.additionalFixedProperties }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
    ...(input.site != null && { site: input.site }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDestinationCommand
 */
export const se_DeleteDestinationCommand = async (
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteDestination";
  let body: any;
  body = JSON.stringify({
    ...(input.id != null && { id: input.id }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteSiteCommand
 */
export const se_DeleteSiteCommand = async (
  input: DeleteSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteSite";
  let body: any;
  body = JSON.stringify({
    ...(input.id != null && { id: input.id }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteWorkerCommand
 */
export const se_DeleteWorkerCommand = async (
  input: DeleteWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteWorker";
  let body: any;
  body = JSON.stringify({
    ...(input.id != null && { id: input.id }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteWorkerFleetCommand
 */
export const se_DeleteWorkerFleetCommand = async (
  input: DeleteWorkerFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteWorkerFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.id != null && { id: input.id }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDestinationCommand
 */
export const se_GetDestinationCommand = async (
  input: GetDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getDestination";
  const query: any = map({
    id: [, __expectNonNull(input.id!, `id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetSiteCommand
 */
export const se_GetSiteCommand = async (
  input: GetSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getSite";
  const query: any = map({
    id: [, __expectNonNull(input.id!, `id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetWorkerCommand
 */
export const se_GetWorkerCommand = async (
  input: GetWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getWorker";
  const query: any = map({
    id: [, __expectNonNull(input.id!, `id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetWorkerFleetCommand
 */
export const se_GetWorkerFleetCommand = async (
  input: GetWorkerFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getWorkerFleet";
  const query: any = map({
    id: [, __expectNonNull(input.id!, `id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDestinationsCommand
 */
export const se_ListDestinationsCommand = async (
  input: ListDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listDestinations";
  const query: any = map({
    site: [, __expectNonNull(input.site!, `site`)],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    state: [, input.state!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListSitesCommand
 */
export const se_ListSitesCommand = async (
  input: ListSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listSites";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListWorkerFleetsCommand
 */
export const se_ListWorkerFleetsCommand = async (
  input: ListWorkerFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listWorkerFleets";
  const query: any = map({
    site: [, __expectNonNull(input.site!, `site`)],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListWorkersCommand
 */
export const se_ListWorkersCommand = async (
  input: ListWorkersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listWorkers";
  const query: any = map({
    site: [, __expectNonNull(input.site!, `site`)],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    fleet: [, input.fleet!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDestinationCommand
 */
export const se_UpdateDestinationCommand = async (
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateDestination";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalFixedProperties != null && { additionalFixedProperties: input.additionalFixedProperties }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.state != null && { state: input.state }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSiteCommand
 */
export const se_UpdateSiteCommand = async (
  input: UpdateSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateSite";
  let body: any;
  body = JSON.stringify({
    ...(input.countryCode != null && { countryCode: input.countryCode }),
    ...(input.description != null && { description: input.description }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateWorkerCommand
 */
export const se_UpdateWorkerCommand = async (
  input: UpdateWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateWorker";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalFixedProperties != null && { additionalFixedProperties: input.additionalFixedProperties }),
    ...(input.additionalTransientProperties != null && {
      additionalTransientProperties: input.additionalTransientProperties,
    }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.orientation != null && { orientation: se_Orientation(input.orientation, context) }),
    ...(input.position != null && { position: se_PositionCoordinates(input.position, context) }),
    ...(input.vendorProperties != null && { vendorProperties: se_VendorProperties(input.vendorProperties, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateWorkerFleetCommand
 */
export const se_UpdateWorkerFleetCommand = async (
  input: UpdateWorkerFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateWorkerFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalFixedProperties != null && { additionalFixedProperties: input.additionalFixedProperties }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateDestinationCommand
 */
export const de_CreateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDestinationCommandError
 */
const de_CreateDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotroborunner#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iotroborunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateSiteCommand
 */
export const de_CreateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSiteCommandError
 */
const de_CreateSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotroborunner#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iotroborunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateWorkerCommand
 */
export const de_CreateWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorkerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.site != null) {
    contents.site = __expectString(data.site);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkerCommandError
 */
const de_CreateWorkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotroborunner#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iotroborunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateWorkerFleetCommand
 */
export const de_CreateWorkerFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorkerFleetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkerFleetCommandError
 */
const de_CreateWorkerFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotroborunner#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iotroborunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDestinationCommand
 */
export const de_DeleteDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDestinationCommandError
 */
const de_DeleteDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotroborunner#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteSiteCommand
 */
export const de_DeleteSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSiteCommandError
 */
const de_DeleteSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotroborunner#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWorkerCommand
 */
export const de_DeleteWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteWorkerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkerCommandError
 */
const de_DeleteWorkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotroborunner#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWorkerFleetCommand
 */
export const de_DeleteWorkerFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteWorkerFleetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkerFleetCommandError
 */
const de_DeleteWorkerFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotroborunner#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDestinationCommand
 */
export const de_GetDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.additionalFixedProperties != null) {
    contents.additionalFixedProperties = __expectString(data.additionalFixedProperties);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.site != null) {
    contents.site = __expectString(data.site);
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDestinationCommandError
 */
const de_GetDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSiteCommand
 */
export const de_GetSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.countryCode != null) {
    contents.countryCode = __expectString(data.countryCode);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSiteCommandError
 */
const de_GetSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWorkerCommand
 */
export const de_GetWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.additionalFixedProperties != null) {
    contents.additionalFixedProperties = __expectString(data.additionalFixedProperties);
  }
  if (data.additionalTransientProperties != null) {
    contents.additionalTransientProperties = __expectString(data.additionalTransientProperties);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.fleet != null) {
    contents.fleet = __expectString(data.fleet);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.orientation != null) {
    contents.orientation = de_Orientation(__expectUnion(data.orientation), context);
  }
  if (data.position != null) {
    contents.position = de_PositionCoordinates(__expectUnion(data.position), context);
  }
  if (data.site != null) {
    contents.site = __expectString(data.site);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  if (data.vendorProperties != null) {
    contents.vendorProperties = de_VendorProperties(data.vendorProperties, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkerCommandError
 */
const de_GetWorkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWorkerFleetCommand
 */
export const de_GetWorkerFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkerFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkerFleetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.additionalFixedProperties != null) {
    contents.additionalFixedProperties = __expectString(data.additionalFixedProperties);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.site != null) {
    contents.site = __expectString(data.site);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkerFleetCommandError
 */
const de_GetWorkerFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkerFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDestinationsCommand
 */
export const de_ListDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.destinations != null) {
    contents.destinations = de_Destinations(data.destinations, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDestinationsCommandError
 */
const de_ListDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSitesCommand
 */
export const de_ListSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSitesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sites != null) {
    contents.sites = de_Sites(data.sites, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSitesCommandError
 */
const de_ListSitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWorkerFleetsCommand
 */
export const de_ListWorkerFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerFleetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkerFleetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workerFleets != null) {
    contents.workerFleets = de_WorkerFleets(data.workerFleets, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkerFleetsCommandError
 */
const de_ListWorkerFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWorkersCommand
 */
export const de_ListWorkersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workers != null) {
    contents.workers = de_Workers(data.workers, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkersCommandError
 */
const de_ListWorkersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDestinationCommand
 */
export const de_UpdateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.additionalFixedProperties != null) {
    contents.additionalFixedProperties = __expectString(data.additionalFixedProperties);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDestinationCommandError
 */
const de_UpdateDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateSiteCommand
 */
export const de_UpdateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.countryCode != null) {
    contents.countryCode = __expectString(data.countryCode);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSiteCommandError
 */
const de_UpdateSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateWorkerCommand
 */
export const de_UpdateWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWorkerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.additionalFixedProperties != null) {
    contents.additionalFixedProperties = __expectString(data.additionalFixedProperties);
  }
  if (data.additionalTransientProperties != null) {
    contents.additionalTransientProperties = __expectString(data.additionalTransientProperties);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.fleet != null) {
    contents.fleet = __expectString(data.fleet);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.orientation != null) {
    contents.orientation = de_Orientation(__expectUnion(data.orientation), context);
  }
  if (data.position != null) {
    contents.position = de_PositionCoordinates(__expectUnion(data.position), context);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  if (data.vendorProperties != null) {
    contents.vendorProperties = de_VendorProperties(data.vendorProperties, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkerCommandError
 */
const de_UpdateWorkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateWorkerFleetCommand
 */
export const de_UpdateWorkerFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkerFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWorkerFleetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.additionalFixedProperties != null) {
    contents.additionalFixedProperties = __expectString(data.additionalFixedProperties);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updatedAt)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkerFleetCommandError
 */
const de_UpdateWorkerFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkerFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotroborunner#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotroborunner#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotroborunner#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotroborunner#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotroborunner#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1CartesianCoordinates
 */
const se_CartesianCoordinates = (input: CartesianCoordinates, context: __SerdeContext): any => {
  return {
    ...(input.x != null && { x: __serializeFloat(input.x) }),
    ...(input.y != null && { y: __serializeFloat(input.y) }),
    ...(input.z != null && { z: __serializeFloat(input.z) }),
  };
};

/**
 * serializeAws_restJson1Orientation
 */
const se_Orientation = (input: Orientation, context: __SerdeContext): any => {
  return Orientation.visit(input, {
    degrees: (value) => ({ degrees: __serializeFloat(value) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1PositionCoordinates
 */
const se_PositionCoordinates = (input: PositionCoordinates, context: __SerdeContext): any => {
  return PositionCoordinates.visit(input, {
    cartesianCoordinates: (value) => ({ cartesianCoordinates: se_CartesianCoordinates(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VendorProperties
 */
const se_VendorProperties = (input: VendorProperties, context: __SerdeContext): any => {
  return {
    ...(input.vendorAdditionalFixedProperties != null && {
      vendorAdditionalFixedProperties: input.vendorAdditionalFixedProperties,
    }),
    ...(input.vendorAdditionalTransientProperties != null && {
      vendorAdditionalTransientProperties: input.vendorAdditionalTransientProperties,
    }),
    ...(input.vendorWorkerId != null && { vendorWorkerId: input.vendorWorkerId }),
    ...(input.vendorWorkerIpAddress != null && { vendorWorkerIpAddress: input.vendorWorkerIpAddress }),
  };
};

/**
 * deserializeAws_restJson1CartesianCoordinates
 */
const de_CartesianCoordinates = (output: any, context: __SerdeContext): CartesianCoordinates => {
  return {
    x: __limitedParseDouble(output.x),
    y: __limitedParseDouble(output.y),
    z: __limitedParseDouble(output.z),
  } as any;
};

/**
 * deserializeAws_restJson1Destination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    additionalFixedProperties: __expectString(output.additionalFixedProperties),
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    site: __expectString(output.site),
    state: __expectString(output.state),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Destinations
 */
const de_Destinations = (output: any, context: __SerdeContext): Destination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Destination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Orientation
 */
const de_Orientation = (output: any, context: __SerdeContext): Orientation => {
  if (__limitedParseDouble(output.degrees) !== undefined) {
    return { degrees: __limitedParseDouble(output.degrees) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1PositionCoordinates
 */
const de_PositionCoordinates = (output: any, context: __SerdeContext): PositionCoordinates => {
  if (output.cartesianCoordinates != null) {
    return {
      cartesianCoordinates: de_CartesianCoordinates(output.cartesianCoordinates, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1Site
 */
const de_Site = (output: any, context: __SerdeContext): Site => {
  return {
    arn: __expectString(output.arn),
    countryCode: __expectString(output.countryCode),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1Sites
 */
const de_Sites = (output: any, context: __SerdeContext): Site[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Site(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VendorProperties
 */
const de_VendorProperties = (output: any, context: __SerdeContext): VendorProperties => {
  return {
    vendorAdditionalFixedProperties: __expectString(output.vendorAdditionalFixedProperties),
    vendorAdditionalTransientProperties: __expectString(output.vendorAdditionalTransientProperties),
    vendorWorkerId: __expectString(output.vendorWorkerId),
    vendorWorkerIpAddress: __expectString(output.vendorWorkerIpAddress),
  } as any;
};

/**
 * deserializeAws_restJson1Worker
 */
const de_Worker = (output: any, context: __SerdeContext): Worker => {
  return {
    additionalFixedProperties: __expectString(output.additionalFixedProperties),
    additionalTransientProperties: __expectString(output.additionalTransientProperties),
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fleet: __expectString(output.fleet),
    id: __expectString(output.id),
    name: __expectString(output.name),
    orientation: output.orientation != null ? de_Orientation(__expectUnion(output.orientation), context) : undefined,
    position: output.position != null ? de_PositionCoordinates(__expectUnion(output.position), context) : undefined,
    site: __expectString(output.site),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
    vendorProperties:
      output.vendorProperties != null ? de_VendorProperties(output.vendorProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WorkerFleet
 */
const de_WorkerFleet = (output: any, context: __SerdeContext): WorkerFleet => {
  return {
    additionalFixedProperties: __expectString(output.additionalFixedProperties),
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    site: __expectString(output.site),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WorkerFleets
 */
const de_WorkerFleets = (output: any, context: __SerdeContext): WorkerFleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkerFleet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Workers
 */
const de_Workers = (output: any, context: __SerdeContext): Worker[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Worker(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
