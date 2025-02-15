// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AssignInstanceCommandInput, AssignInstanceCommandOutput } from "../commands/AssignInstanceCommand";
import { AssignVolumeCommandInput, AssignVolumeCommandOutput } from "../commands/AssignVolumeCommand";
import { AssociateElasticIpCommandInput, AssociateElasticIpCommandOutput } from "../commands/AssociateElasticIpCommand";
import {
  AttachElasticLoadBalancerCommandInput,
  AttachElasticLoadBalancerCommandOutput,
} from "../commands/AttachElasticLoadBalancerCommand";
import { CloneStackCommandInput, CloneStackCommandOutput } from "../commands/CloneStackCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "../commands/CreateInstanceCommand";
import { CreateLayerCommandInput, CreateLayerCommandOutput } from "../commands/CreateLayerCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "../commands/CreateStackCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "../commands/CreateUserProfileCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "../commands/DeleteInstanceCommand";
import { DeleteLayerCommandInput, DeleteLayerCommandOutput } from "../commands/DeleteLayerCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "../commands/DeleteStackCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "../commands/DeleteUserProfileCommand";
import {
  DeregisterEcsClusterCommandInput,
  DeregisterEcsClusterCommandOutput,
} from "../commands/DeregisterEcsClusterCommand";
import {
  DeregisterElasticIpCommandInput,
  DeregisterElasticIpCommandOutput,
} from "../commands/DeregisterElasticIpCommand";
import { DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput } from "../commands/DeregisterInstanceCommand";
import {
  DeregisterRdsDbInstanceCommandInput,
  DeregisterRdsDbInstanceCommandOutput,
} from "../commands/DeregisterRdsDbInstanceCommand";
import { DeregisterVolumeCommandInput, DeregisterVolumeCommandOutput } from "../commands/DeregisterVolumeCommand";
import {
  DescribeAgentVersionsCommandInput,
  DescribeAgentVersionsCommandOutput,
} from "../commands/DescribeAgentVersionsCommand";
import { DescribeAppsCommandInput, DescribeAppsCommandOutput } from "../commands/DescribeAppsCommand";
import { DescribeCommandsCommandInput, DescribeCommandsCommandOutput } from "../commands/DescribeCommandsCommand";
import {
  DescribeDeploymentsCommandInput,
  DescribeDeploymentsCommandOutput,
} from "../commands/DescribeDeploymentsCommand";
import {
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
} from "../commands/DescribeEcsClustersCommand";
import { DescribeElasticIpsCommandInput, DescribeElasticIpsCommandOutput } from "../commands/DescribeElasticIpsCommand";
import {
  DescribeElasticLoadBalancersCommandInput,
  DescribeElasticLoadBalancersCommandOutput,
} from "../commands/DescribeElasticLoadBalancersCommand";
import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "../commands/DescribeInstancesCommand";
import { DescribeLayersCommandInput, DescribeLayersCommandOutput } from "../commands/DescribeLayersCommand";
import {
  DescribeLoadBasedAutoScalingCommandInput,
  DescribeLoadBasedAutoScalingCommandOutput,
} from "../commands/DescribeLoadBasedAutoScalingCommand";
import {
  DescribeMyUserProfileCommandInput,
  DescribeMyUserProfileCommandOutput,
} from "../commands/DescribeMyUserProfileCommand";
import {
  DescribeOperatingSystemsCommandInput,
  DescribeOperatingSystemsCommandOutput,
} from "../commands/DescribeOperatingSystemsCommand";
import {
  DescribePermissionsCommandInput,
  DescribePermissionsCommandOutput,
} from "../commands/DescribePermissionsCommand";
import { DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput } from "../commands/DescribeRaidArraysCommand";
import {
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
} from "../commands/DescribeRdsDbInstancesCommand";
import {
  DescribeServiceErrorsCommandInput,
  DescribeServiceErrorsCommandOutput,
} from "../commands/DescribeServiceErrorsCommand";
import {
  DescribeStackProvisioningParametersCommandInput,
  DescribeStackProvisioningParametersCommandOutput,
} from "../commands/DescribeStackProvisioningParametersCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "../commands/DescribeStacksCommand";
import {
  DescribeStackSummaryCommandInput,
  DescribeStackSummaryCommandOutput,
} from "../commands/DescribeStackSummaryCommand";
import {
  DescribeTimeBasedAutoScalingCommandInput,
  DescribeTimeBasedAutoScalingCommandOutput,
} from "../commands/DescribeTimeBasedAutoScalingCommand";
import {
  DescribeUserProfilesCommandInput,
  DescribeUserProfilesCommandOutput,
} from "../commands/DescribeUserProfilesCommand";
import { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "../commands/DescribeVolumesCommand";
import {
  DetachElasticLoadBalancerCommandInput,
  DetachElasticLoadBalancerCommandOutput,
} from "../commands/DetachElasticLoadBalancerCommand";
import {
  DisassociateElasticIpCommandInput,
  DisassociateElasticIpCommandOutput,
} from "../commands/DisassociateElasticIpCommand";
import {
  GetHostnameSuggestionCommandInput,
  GetHostnameSuggestionCommandOutput,
} from "../commands/GetHostnameSuggestionCommand";
import { GrantAccessCommandInput, GrantAccessCommandOutput } from "../commands/GrantAccessCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "../commands/RebootInstanceCommand";
import { RegisterEcsClusterCommandInput, RegisterEcsClusterCommandOutput } from "../commands/RegisterEcsClusterCommand";
import { RegisterElasticIpCommandInput, RegisterElasticIpCommandOutput } from "../commands/RegisterElasticIpCommand";
import { RegisterInstanceCommandInput, RegisterInstanceCommandOutput } from "../commands/RegisterInstanceCommand";
import {
  RegisterRdsDbInstanceCommandInput,
  RegisterRdsDbInstanceCommandOutput,
} from "../commands/RegisterRdsDbInstanceCommand";
import { RegisterVolumeCommandInput, RegisterVolumeCommandOutput } from "../commands/RegisterVolumeCommand";
import {
  SetLoadBasedAutoScalingCommandInput,
  SetLoadBasedAutoScalingCommandOutput,
} from "../commands/SetLoadBasedAutoScalingCommand";
import { SetPermissionCommandInput, SetPermissionCommandOutput } from "../commands/SetPermissionCommand";
import {
  SetTimeBasedAutoScalingCommandInput,
  SetTimeBasedAutoScalingCommandOutput,
} from "../commands/SetTimeBasedAutoScalingCommand";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "../commands/StartInstanceCommand";
import { StartStackCommandInput, StartStackCommandOutput } from "../commands/StartStackCommand";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "../commands/StopInstanceCommand";
import { StopStackCommandInput, StopStackCommandOutput } from "../commands/StopStackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UnassignInstanceCommandInput, UnassignInstanceCommandOutput } from "../commands/UnassignInstanceCommand";
import { UnassignVolumeCommandInput, UnassignVolumeCommandOutput } from "../commands/UnassignVolumeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "../commands/UpdateAppCommand";
import { UpdateElasticIpCommandInput, UpdateElasticIpCommandOutput } from "../commands/UpdateElasticIpCommand";
import { UpdateInstanceCommandInput, UpdateInstanceCommandOutput } from "../commands/UpdateInstanceCommand";
import { UpdateLayerCommandInput, UpdateLayerCommandOutput } from "../commands/UpdateLayerCommand";
import {
  UpdateMyUserProfileCommandInput,
  UpdateMyUserProfileCommandOutput,
} from "../commands/UpdateMyUserProfileCommand";
import {
  UpdateRdsDbInstanceCommandInput,
  UpdateRdsDbInstanceCommandOutput,
} from "../commands/UpdateRdsDbInstanceCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "../commands/UpdateStackCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "../commands/UpdateUserProfileCommand";
import { UpdateVolumeCommandInput, UpdateVolumeCommandOutput } from "../commands/UpdateVolumeCommand";
import {
  AgentVersion,
  App,
  AppAttributesKeys,
  AssignInstanceRequest,
  AssignVolumeRequest,
  AssociateElasticIpRequest,
  AttachElasticLoadBalancerRequest,
  AutoScalingThresholds,
  BlockDeviceMapping,
  ChefConfiguration,
  CloneStackRequest,
  CloneStackResult,
  CloudWatchLogsConfiguration,
  CloudWatchLogsLogStream,
  Command,
  CreateAppRequest,
  CreateAppResult,
  CreateDeploymentRequest,
  CreateDeploymentResult,
  CreateInstanceRequest,
  CreateInstanceResult,
  CreateLayerRequest,
  CreateLayerResult,
  CreateStackRequest,
  CreateStackResult,
  CreateUserProfileRequest,
  CreateUserProfileResult,
  DataSource,
  DeleteAppRequest,
  DeleteInstanceRequest,
  DeleteLayerRequest,
  DeleteStackRequest,
  DeleteUserProfileRequest,
  Deployment,
  DeploymentCommand,
  DeregisterEcsClusterRequest,
  DeregisterElasticIpRequest,
  DeregisterInstanceRequest,
  DeregisterRdsDbInstanceRequest,
  DeregisterVolumeRequest,
  DescribeAgentVersionsRequest,
  DescribeAgentVersionsResult,
  DescribeAppsRequest,
  DescribeAppsResult,
  DescribeCommandsRequest,
  DescribeCommandsResult,
  DescribeDeploymentsRequest,
  DescribeDeploymentsResult,
  DescribeEcsClustersRequest,
  DescribeEcsClustersResult,
  DescribeElasticIpsRequest,
  DescribeElasticIpsResult,
  DescribeElasticLoadBalancersRequest,
  DescribeElasticLoadBalancersResult,
  DescribeInstancesRequest,
  DescribeInstancesResult,
  DescribeLayersRequest,
  DescribeLayersResult,
  DescribeLoadBasedAutoScalingRequest,
  DescribeLoadBasedAutoScalingResult,
  DescribeMyUserProfileResult,
  DescribeOperatingSystemsResponse,
  DescribePermissionsRequest,
  DescribePermissionsResult,
  DescribeRaidArraysRequest,
  DescribeRaidArraysResult,
  DescribeRdsDbInstancesRequest,
  DescribeRdsDbInstancesResult,
  DescribeServiceErrorsRequest,
  DescribeServiceErrorsResult,
  DescribeStackProvisioningParametersRequest,
  DescribeStackProvisioningParametersResult,
  DescribeStacksRequest,
  DescribeStacksResult,
  DescribeStackSummaryRequest,
  DescribeStackSummaryResult,
  DescribeTimeBasedAutoScalingRequest,
  DescribeTimeBasedAutoScalingResult,
  DescribeUserProfilesRequest,
  DescribeUserProfilesResult,
  DescribeVolumesRequest,
  DescribeVolumesResult,
  DetachElasticLoadBalancerRequest,
  DisassociateElasticIpRequest,
  EbsBlockDevice,
  EcsCluster,
  ElasticIp,
  ElasticLoadBalancer,
  EnvironmentVariable,
  GetHostnameSuggestionRequest,
  GetHostnameSuggestionResult,
  GrantAccessRequest,
  GrantAccessResult,
  Instance,
  InstanceIdentity,
  InstancesCount,
  Layer,
  LayerAttributesKeys,
  LifecycleEventConfiguration,
  ListTagsRequest,
  ListTagsResult,
  LoadBasedAutoScalingConfiguration,
  OperatingSystem,
  OperatingSystemConfigurationManager,
  Permission,
  RaidArray,
  RdsDbInstance,
  RebootInstanceRequest,
  Recipes,
  RegisterEcsClusterRequest,
  RegisterEcsClusterResult,
  RegisterElasticIpRequest,
  RegisterElasticIpResult,
  RegisterInstanceRequest,
  RegisterInstanceResult,
  RegisterRdsDbInstanceRequest,
  RegisterVolumeRequest,
  RegisterVolumeResult,
  ReportedOs,
  ResourceNotFoundException,
  SelfUserProfile,
  ServiceError,
  SetLoadBasedAutoScalingRequest,
  SetPermissionRequest,
  SetTimeBasedAutoScalingRequest,
  ShutdownEventConfiguration,
  Source,
  SslConfiguration,
  Stack,
  StackAttributesKeys,
  StackConfigurationManager,
  StackSummary,
  StartInstanceRequest,
  StartStackRequest,
  StopInstanceRequest,
  StopStackRequest,
  TagResourceRequest,
  TemporaryCredential,
  TimeBasedAutoScalingConfiguration,
  UnassignInstanceRequest,
  UnassignVolumeRequest,
  UntagResourceRequest,
  UpdateAppRequest,
  UpdateElasticIpRequest,
  UpdateInstanceRequest,
  UpdateLayerRequest,
  UpdateMyUserProfileRequest,
  UpdateRdsDbInstanceRequest,
  UpdateStackRequest,
  UpdateUserProfileRequest,
  UpdateVolumeRequest,
  UserProfile,
  ValidationException,
  Volume,
  VolumeConfiguration,
  WeeklyAutoScalingSchedule,
} from "../models/models_0";
import { OpsWorksServiceException as __BaseException } from "../models/OpsWorksServiceException";

/**
 * serializeAws_json1_1AssignInstanceCommand
 */
export const se_AssignInstanceCommand = async (
  input: AssignInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssignInstance");
  let body: any;
  body = JSON.stringify(se_AssignInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssignVolumeCommand
 */
export const se_AssignVolumeCommand = async (
  input: AssignVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssignVolume");
  let body: any;
  body = JSON.stringify(se_AssignVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateElasticIpCommand
 */
export const se_AssociateElasticIpCommand = async (
  input: AssociateElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateElasticIp");
  let body: any;
  body = JSON.stringify(se_AssociateElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachElasticLoadBalancerCommand
 */
export const se_AttachElasticLoadBalancerCommand = async (
  input: AttachElasticLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachElasticLoadBalancer");
  let body: any;
  body = JSON.stringify(se_AttachElasticLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CloneStackCommand
 */
export const se_CloneStackCommand = async (
  input: CloneStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CloneStack");
  let body: any;
  body = JSON.stringify(se_CloneStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppCommand
 */
export const se_CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApp");
  let body: any;
  body = JSON.stringify(se_CreateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDeployment");
  let body: any;
  body = JSON.stringify(se_CreateDeploymentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstanceCommand
 */
export const se_CreateInstanceCommand = async (
  input: CreateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInstance");
  let body: any;
  body = JSON.stringify(se_CreateInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLayerCommand
 */
export const se_CreateLayerCommand = async (
  input: CreateLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLayer");
  let body: any;
  body = JSON.stringify(se_CreateLayerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStackCommand
 */
export const se_CreateStackCommand = async (
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStack");
  let body: any;
  body = JSON.stringify(se_CreateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserProfileCommand
 */
export const se_CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserProfile");
  let body: any;
  body = JSON.stringify(se_CreateUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppCommand
 */
export const se_DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApp");
  let body: any;
  body = JSON.stringify(se_DeleteAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInstanceCommand
 */
export const se_DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInstance");
  let body: any;
  body = JSON.stringify(se_DeleteInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLayerCommand
 */
export const se_DeleteLayerCommand = async (
  input: DeleteLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLayer");
  let body: any;
  body = JSON.stringify(se_DeleteLayerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStackCommand
 */
export const se_DeleteStackCommand = async (
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStack");
  let body: any;
  body = JSON.stringify(se_DeleteStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserProfileCommand
 */
export const se_DeleteUserProfileCommand = async (
  input: DeleteUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserProfile");
  let body: any;
  body = JSON.stringify(se_DeleteUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterEcsClusterCommand
 */
export const se_DeregisterEcsClusterCommand = async (
  input: DeregisterEcsClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterEcsCluster");
  let body: any;
  body = JSON.stringify(se_DeregisterEcsClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterElasticIpCommand
 */
export const se_DeregisterElasticIpCommand = async (
  input: DeregisterElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterElasticIp");
  let body: any;
  body = JSON.stringify(se_DeregisterElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterInstanceCommand
 */
export const se_DeregisterInstanceCommand = async (
  input: DeregisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterInstance");
  let body: any;
  body = JSON.stringify(se_DeregisterInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterRdsDbInstanceCommand
 */
export const se_DeregisterRdsDbInstanceCommand = async (
  input: DeregisterRdsDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterRdsDbInstance");
  let body: any;
  body = JSON.stringify(se_DeregisterRdsDbInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterVolumeCommand
 */
export const se_DeregisterVolumeCommand = async (
  input: DeregisterVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterVolume");
  let body: any;
  body = JSON.stringify(se_DeregisterVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAgentVersionsCommand
 */
export const se_DescribeAgentVersionsCommand = async (
  input: DescribeAgentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAgentVersions");
  let body: any;
  body = JSON.stringify(se_DescribeAgentVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppsCommand
 */
export const se_DescribeAppsCommand = async (
  input: DescribeAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApps");
  let body: any;
  body = JSON.stringify(se_DescribeAppsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCommandsCommand
 */
export const se_DescribeCommandsCommand = async (
  input: DescribeCommandsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCommands");
  let body: any;
  body = JSON.stringify(se_DescribeCommandsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeploymentsCommand
 */
export const se_DescribeDeploymentsCommand = async (
  input: DescribeDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeployments");
  let body: any;
  body = JSON.stringify(se_DescribeDeploymentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEcsClustersCommand
 */
export const se_DescribeEcsClustersCommand = async (
  input: DescribeEcsClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEcsClusters");
  let body: any;
  body = JSON.stringify(se_DescribeEcsClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeElasticIpsCommand
 */
export const se_DescribeElasticIpsCommand = async (
  input: DescribeElasticIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeElasticIps");
  let body: any;
  body = JSON.stringify(se_DescribeElasticIpsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeElasticLoadBalancersCommand
 */
export const se_DescribeElasticLoadBalancersCommand = async (
  input: DescribeElasticLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeElasticLoadBalancers");
  let body: any;
  body = JSON.stringify(se_DescribeElasticLoadBalancersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstancesCommand
 */
export const se_DescribeInstancesCommand = async (
  input: DescribeInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInstances");
  let body: any;
  body = JSON.stringify(se_DescribeInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLayersCommand
 */
export const se_DescribeLayersCommand = async (
  input: DescribeLayersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLayers");
  let body: any;
  body = JSON.stringify(se_DescribeLayersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLoadBasedAutoScalingCommand
 */
export const se_DescribeLoadBasedAutoScalingCommand = async (
  input: DescribeLoadBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLoadBasedAutoScaling");
  let body: any;
  body = JSON.stringify(se_DescribeLoadBasedAutoScalingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMyUserProfileCommand
 */
export const se_DescribeMyUserProfileCommand = async (
  input: DescribeMyUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMyUserProfile");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOperatingSystemsCommand
 */
export const se_DescribeOperatingSystemsCommand = async (
  input: DescribeOperatingSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOperatingSystems");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePermissionsCommand
 */
export const se_DescribePermissionsCommand = async (
  input: DescribePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePermissions");
  let body: any;
  body = JSON.stringify(se_DescribePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRaidArraysCommand
 */
export const se_DescribeRaidArraysCommand = async (
  input: DescribeRaidArraysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRaidArrays");
  let body: any;
  body = JSON.stringify(se_DescribeRaidArraysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRdsDbInstancesCommand
 */
export const se_DescribeRdsDbInstancesCommand = async (
  input: DescribeRdsDbInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRdsDbInstances");
  let body: any;
  body = JSON.stringify(se_DescribeRdsDbInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServiceErrorsCommand
 */
export const se_DescribeServiceErrorsCommand = async (
  input: DescribeServiceErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServiceErrors");
  let body: any;
  body = JSON.stringify(se_DescribeServiceErrorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStackProvisioningParametersCommand
 */
export const se_DescribeStackProvisioningParametersCommand = async (
  input: DescribeStackProvisioningParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStackProvisioningParameters");
  let body: any;
  body = JSON.stringify(se_DescribeStackProvisioningParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStacksCommand
 */
export const se_DescribeStacksCommand = async (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStacks");
  let body: any;
  body = JSON.stringify(se_DescribeStacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStackSummaryCommand
 */
export const se_DescribeStackSummaryCommand = async (
  input: DescribeStackSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStackSummary");
  let body: any;
  body = JSON.stringify(se_DescribeStackSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTimeBasedAutoScalingCommand
 */
export const se_DescribeTimeBasedAutoScalingCommand = async (
  input: DescribeTimeBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTimeBasedAutoScaling");
  let body: any;
  body = JSON.stringify(se_DescribeTimeBasedAutoScalingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserProfilesCommand
 */
export const se_DescribeUserProfilesCommand = async (
  input: DescribeUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserProfiles");
  let body: any;
  body = JSON.stringify(se_DescribeUserProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeVolumesCommand
 */
export const se_DescribeVolumesCommand = async (
  input: DescribeVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVolumes");
  let body: any;
  body = JSON.stringify(se_DescribeVolumesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachElasticLoadBalancerCommand
 */
export const se_DetachElasticLoadBalancerCommand = async (
  input: DetachElasticLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetachElasticLoadBalancer");
  let body: any;
  body = JSON.stringify(se_DetachElasticLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateElasticIpCommand
 */
export const se_DisassociateElasticIpCommand = async (
  input: DisassociateElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateElasticIp");
  let body: any;
  body = JSON.stringify(se_DisassociateElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetHostnameSuggestionCommand
 */
export const se_GetHostnameSuggestionCommand = async (
  input: GetHostnameSuggestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetHostnameSuggestion");
  let body: any;
  body = JSON.stringify(se_GetHostnameSuggestionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GrantAccessCommand
 */
export const se_GrantAccessCommand = async (
  input: GrantAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GrantAccess");
  let body: any;
  body = JSON.stringify(se_GrantAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(se_ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootInstanceCommand
 */
export const se_RebootInstanceCommand = async (
  input: RebootInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RebootInstance");
  let body: any;
  body = JSON.stringify(se_RebootInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterEcsClusterCommand
 */
export const se_RegisterEcsClusterCommand = async (
  input: RegisterEcsClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterEcsCluster");
  let body: any;
  body = JSON.stringify(se_RegisterEcsClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterElasticIpCommand
 */
export const se_RegisterElasticIpCommand = async (
  input: RegisterElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterElasticIp");
  let body: any;
  body = JSON.stringify(se_RegisterElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterInstanceCommand
 */
export const se_RegisterInstanceCommand = async (
  input: RegisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterInstance");
  let body: any;
  body = JSON.stringify(se_RegisterInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterRdsDbInstanceCommand
 */
export const se_RegisterRdsDbInstanceCommand = async (
  input: RegisterRdsDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterRdsDbInstance");
  let body: any;
  body = JSON.stringify(se_RegisterRdsDbInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterVolumeCommand
 */
export const se_RegisterVolumeCommand = async (
  input: RegisterVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterVolume");
  let body: any;
  body = JSON.stringify(se_RegisterVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetLoadBasedAutoScalingCommand
 */
export const se_SetLoadBasedAutoScalingCommand = async (
  input: SetLoadBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetLoadBasedAutoScaling");
  let body: any;
  body = JSON.stringify(se_SetLoadBasedAutoScalingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetPermissionCommand
 */
export const se_SetPermissionCommand = async (
  input: SetPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetPermission");
  let body: any;
  body = JSON.stringify(se_SetPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetTimeBasedAutoScalingCommand
 */
export const se_SetTimeBasedAutoScalingCommand = async (
  input: SetTimeBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetTimeBasedAutoScaling");
  let body: any;
  body = JSON.stringify(se_SetTimeBasedAutoScalingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartInstanceCommand
 */
export const se_StartInstanceCommand = async (
  input: StartInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartInstance");
  let body: any;
  body = JSON.stringify(se_StartInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartStackCommand
 */
export const se_StartStackCommand = async (
  input: StartStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartStack");
  let body: any;
  body = JSON.stringify(se_StartStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopInstanceCommand
 */
export const se_StopInstanceCommand = async (
  input: StopInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopInstance");
  let body: any;
  body = JSON.stringify(se_StopInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopStackCommand
 */
export const se_StopStackCommand = async (
  input: StopStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopStack");
  let body: any;
  body = JSON.stringify(se_StopStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnassignInstanceCommand
 */
export const se_UnassignInstanceCommand = async (
  input: UnassignInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UnassignInstance");
  let body: any;
  body = JSON.stringify(se_UnassignInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnassignVolumeCommand
 */
export const se_UnassignVolumeCommand = async (
  input: UnassignVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UnassignVolume");
  let body: any;
  body = JSON.stringify(se_UnassignVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAppCommand
 */
export const se_UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApp");
  let body: any;
  body = JSON.stringify(se_UpdateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateElasticIpCommand
 */
export const se_UpdateElasticIpCommand = async (
  input: UpdateElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateElasticIp");
  let body: any;
  body = JSON.stringify(se_UpdateElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInstanceCommand
 */
export const se_UpdateInstanceCommand = async (
  input: UpdateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInstance");
  let body: any;
  body = JSON.stringify(se_UpdateInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLayerCommand
 */
export const se_UpdateLayerCommand = async (
  input: UpdateLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLayer");
  let body: any;
  body = JSON.stringify(se_UpdateLayerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMyUserProfileCommand
 */
export const se_UpdateMyUserProfileCommand = async (
  input: UpdateMyUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMyUserProfile");
  let body: any;
  body = JSON.stringify(se_UpdateMyUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRdsDbInstanceCommand
 */
export const se_UpdateRdsDbInstanceCommand = async (
  input: UpdateRdsDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRdsDbInstance");
  let body: any;
  body = JSON.stringify(se_UpdateRdsDbInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStackCommand
 */
export const se_UpdateStackCommand = async (
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateStack");
  let body: any;
  body = JSON.stringify(se_UpdateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserProfileCommand
 */
export const se_UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserProfile");
  let body: any;
  body = JSON.stringify(se_UpdateUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVolumeCommand
 */
export const se_UpdateVolumeCommand = async (
  input: UpdateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVolume");
  let body: any;
  body = JSON.stringify(se_UpdateVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssignInstanceCommand
 */
export const de_AssignInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssignInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssignInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssignInstanceCommandError
 */
const de_AssignInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1AssignVolumeCommand
 */
export const de_AssignVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssignVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssignVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssignVolumeCommandError
 */
const de_AssignVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1AssociateElasticIpCommand
 */
export const de_AssociateElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateElasticIpCommandError
 */
const de_AssociateElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1AttachElasticLoadBalancerCommand
 */
export const de_AttachElasticLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachElasticLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachElasticLoadBalancerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachElasticLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachElasticLoadBalancerCommandError
 */
const de_AttachElasticLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachElasticLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1CloneStackCommand
 */
export const de_CloneStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CloneStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CloneStackResult(data, context);
  const response: CloneStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CloneStackCommandError
 */
const de_CloneStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1CreateAppCommand
 */
export const de_CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAppResult(data, context);
  const response: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAppCommandError
 */
const de_CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDeploymentResult(data, context);
  const response: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDeploymentCommandError
 */
const de_CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1CreateInstanceCommand
 */
export const de_CreateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInstanceResult(data, context);
  const response: CreateInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateInstanceCommandError
 */
const de_CreateInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1CreateLayerCommand
 */
export const de_CreateLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLayerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLayerResult(data, context);
  const response: CreateLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLayerCommandError
 */
const de_CreateLayerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLayerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1CreateStackCommand
 */
export const de_CreateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStackResult(data, context);
  const response: CreateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateStackCommandError
 */
const de_CreateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1CreateUserProfileCommand
 */
export const de_CreateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserProfileResult(data, context);
  const response: CreateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserProfileCommandError
 */
const de_CreateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeleteAppCommand
 */
export const de_DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAppCommandError
 */
const de_DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeleteInstanceCommand
 */
export const de_DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteInstanceCommandError
 */
const de_DeleteInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeleteLayerCommand
 */
export const de_DeleteLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLayerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLayerCommandError
 */
const de_DeleteLayerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeleteStackCommand
 */
export const de_DeleteStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteStackCommandError
 */
const de_DeleteStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeleteUserProfileCommand
 */
export const de_DeleteUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserProfileCommandError
 */
const de_DeleteUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeregisterEcsClusterCommand
 */
export const de_DeregisterEcsClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterEcsClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterEcsClusterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterEcsClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterEcsClusterCommandError
 */
const de_DeregisterEcsClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterEcsClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeregisterElasticIpCommand
 */
export const de_DeregisterElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterElasticIpCommandError
 */
const de_DeregisterElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeregisterInstanceCommand
 */
export const de_DeregisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterInstanceCommandError
 */
const de_DeregisterInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeregisterRdsDbInstanceCommand
 */
export const de_DeregisterRdsDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRdsDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterRdsDbInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterRdsDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterRdsDbInstanceCommandError
 */
const de_DeregisterRdsDbInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRdsDbInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DeregisterVolumeCommand
 */
export const de_DeregisterVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterVolumeCommandError
 */
const de_DeregisterVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeAgentVersionsCommand
 */
export const de_DescribeAgentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAgentVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAgentVersionsResult(data, context);
  const response: DescribeAgentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAgentVersionsCommandError
 */
const de_DescribeAgentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeAppsCommand
 */
export const de_DescribeAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAppsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAppsResult(data, context);
  const response: DescribeAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAppsCommandError
 */
const de_DescribeAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeCommandsCommand
 */
export const de_DescribeCommandsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommandsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCommandsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCommandsResult(data, context);
  const response: DescribeCommandsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCommandsCommandError
 */
const de_DescribeCommandsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommandsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeDeploymentsCommand
 */
export const de_DescribeDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDeploymentsResult(data, context);
  const response: DescribeDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDeploymentsCommandError
 */
const de_DescribeDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeEcsClustersCommand
 */
export const de_DescribeEcsClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEcsClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEcsClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEcsClustersResult(data, context);
  const response: DescribeEcsClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEcsClustersCommandError
 */
const de_DescribeEcsClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEcsClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeElasticIpsCommand
 */
export const de_DescribeElasticIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticIpsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeElasticIpsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeElasticIpsResult(data, context);
  const response: DescribeElasticIpsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeElasticIpsCommandError
 */
const de_DescribeElasticIpsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticIpsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeElasticLoadBalancersCommand
 */
export const de_DescribeElasticLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeElasticLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeElasticLoadBalancersResult(data, context);
  const response: DescribeElasticLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeElasticLoadBalancersCommandError
 */
const de_DescribeElasticLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeInstancesCommand
 */
export const de_DescribeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstancesResult(data, context);
  const response: DescribeInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInstancesCommandError
 */
const de_DescribeInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeLayersCommand
 */
export const de_DescribeLayersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLayersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLayersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLayersResult(data, context);
  const response: DescribeLayersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLayersCommandError
 */
const de_DescribeLayersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLayersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand
 */
export const de_DescribeLoadBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBasedAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoadBasedAutoScalingResult(data, context);
  const response: DescribeLoadBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLoadBasedAutoScalingCommandError
 */
const de_DescribeLoadBasedAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBasedAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeMyUserProfileCommand
 */
export const de_DescribeMyUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMyUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMyUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMyUserProfileResult(data, context);
  const response: DescribeMyUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMyUserProfileCommandError
 */
const de_DescribeMyUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMyUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeOperatingSystemsCommand
 */
export const de_DescribeOperatingSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOperatingSystemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOperatingSystemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOperatingSystemsResponse(data, context);
  const response: DescribeOperatingSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeOperatingSystemsCommandError
 */
const de_DescribeOperatingSystemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOperatingSystemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribePermissionsCommand
 */
export const de_DescribePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePermissionsResult(data, context);
  const response: DescribePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePermissionsCommandError
 */
const de_DescribePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeRaidArraysCommand
 */
export const de_DescribeRaidArraysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRaidArraysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRaidArraysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRaidArraysResult(data, context);
  const response: DescribeRaidArraysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRaidArraysCommandError
 */
const de_DescribeRaidArraysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRaidArraysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeRdsDbInstancesCommand
 */
export const de_DescribeRdsDbInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRdsDbInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRdsDbInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRdsDbInstancesResult(data, context);
  const response: DescribeRdsDbInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRdsDbInstancesCommandError
 */
const de_DescribeRdsDbInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRdsDbInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeServiceErrorsCommand
 */
export const de_DescribeServiceErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServiceErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServiceErrorsResult(data, context);
  const response: DescribeServiceErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeServiceErrorsCommandError
 */
const de_DescribeServiceErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeStackProvisioningParametersCommand
 */
export const de_DescribeStackProvisioningParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackProvisioningParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackProvisioningParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackProvisioningParametersResult(data, context);
  const response: DescribeStackProvisioningParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStackProvisioningParametersCommandError
 */
const de_DescribeStackProvisioningParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackProvisioningParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeStacksCommand
 */
export const de_DescribeStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStacksResult(data, context);
  const response: DescribeStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStacksCommandError
 */
const de_DescribeStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeStackSummaryCommand
 */
export const de_DescribeStackSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackSummaryResult(data, context);
  const response: DescribeStackSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStackSummaryCommandError
 */
const de_DescribeStackSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand
 */
export const de_DescribeTimeBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTimeBasedAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTimeBasedAutoScalingResult(data, context);
  const response: DescribeTimeBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTimeBasedAutoScalingCommandError
 */
const de_DescribeTimeBasedAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeBasedAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeUserProfilesCommand
 */
export const de_DescribeUserProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserProfilesResult(data, context);
  const response: DescribeUserProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUserProfilesCommandError
 */
const de_DescribeUserProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DescribeVolumesCommand
 */
export const de_DescribeVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeVolumesResult(data, context);
  const response: DescribeVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeVolumesCommandError
 */
const de_DescribeVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1DetachElasticLoadBalancerCommand
 */
export const de_DetachElasticLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachElasticLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachElasticLoadBalancerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachElasticLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetachElasticLoadBalancerCommandError
 */
const de_DetachElasticLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachElasticLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateElasticIpCommand
 */
export const de_DisassociateElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateElasticIpCommandError
 */
const de_DisassociateElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1GetHostnameSuggestionCommand
 */
export const de_GetHostnameSuggestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostnameSuggestionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetHostnameSuggestionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetHostnameSuggestionResult(data, context);
  const response: GetHostnameSuggestionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetHostnameSuggestionCommandError
 */
const de_GetHostnameSuggestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostnameSuggestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1GrantAccessCommand
 */
export const de_GrantAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GrantAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GrantAccessResult(data, context);
  const response: GrantAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GrantAccessCommandError
 */
const de_GrantAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsResult(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1RebootInstanceCommand
 */
export const de_RebootInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RebootInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RebootInstanceCommandError
 */
const de_RebootInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1RegisterEcsClusterCommand
 */
export const de_RegisterEcsClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterEcsClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterEcsClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterEcsClusterResult(data, context);
  const response: RegisterEcsClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterEcsClusterCommandError
 */
const de_RegisterEcsClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterEcsClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1RegisterElasticIpCommand
 */
export const de_RegisterElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterElasticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterElasticIpResult(data, context);
  const response: RegisterElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterElasticIpCommandError
 */
const de_RegisterElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1RegisterInstanceCommand
 */
export const de_RegisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterInstanceResult(data, context);
  const response: RegisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterInstanceCommandError
 */
const de_RegisterInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1RegisterRdsDbInstanceCommand
 */
export const de_RegisterRdsDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRdsDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterRdsDbInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterRdsDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterRdsDbInstanceCommandError
 */
const de_RegisterRdsDbInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRdsDbInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1RegisterVolumeCommand
 */
export const de_RegisterVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterVolumeResult(data, context);
  const response: RegisterVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterVolumeCommandError
 */
const de_RegisterVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1SetLoadBasedAutoScalingCommand
 */
export const de_SetLoadBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetLoadBasedAutoScalingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetLoadBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetLoadBasedAutoScalingCommandError
 */
const de_SetLoadBasedAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBasedAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1SetPermissionCommand
 */
export const de_SetPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetPermissionCommandError
 */
const de_SetPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1SetTimeBasedAutoScalingCommand
 */
export const de_SetTimeBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTimeBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetTimeBasedAutoScalingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTimeBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetTimeBasedAutoScalingCommandError
 */
const de_SetTimeBasedAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTimeBasedAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1StartInstanceCommand
 */
export const de_StartInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartInstanceCommandError
 */
const de_StartInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1StartStackCommand
 */
export const de_StartStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartStackCommandError
 */
const de_StartStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1StopInstanceCommand
 */
export const de_StopInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopInstanceCommandError
 */
const de_StopInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1StopStackCommand
 */
export const de_StopStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopStackCommandError
 */
const de_StopStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UnassignInstanceCommand
 */
export const de_UnassignInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnassignInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnassignInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UnassignInstanceCommandError
 */
const de_UnassignInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UnassignVolumeCommand
 */
export const de_UnassignVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnassignVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnassignVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UnassignVolumeCommandError
 */
const de_UnassignVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UpdateAppCommand
 */
export const de_UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAppCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAppCommandError
 */
const de_UpdateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UpdateElasticIpCommand
 */
export const de_UpdateElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateElasticIpCommandError
 */
const de_UpdateElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UpdateInstanceCommand
 */
export const de_UpdateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateInstanceCommandError
 */
const de_UpdateInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UpdateLayerCommand
 */
export const de_UpdateLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLayerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLayerCommandError
 */
const de_UpdateLayerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLayerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UpdateMyUserProfileCommand
 */
export const de_UpdateMyUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMyUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMyUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateMyUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMyUserProfileCommandError
 */
const de_UpdateMyUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMyUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UpdateRdsDbInstanceCommand
 */
export const de_UpdateRdsDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRdsDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRdsDbInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateRdsDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRdsDbInstanceCommandError
 */
const de_UpdateRdsDbInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRdsDbInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UpdateStackCommand
 */
export const de_UpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateStackCommandError
 */
const de_UpdateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UpdateUserProfileCommand
 */
export const de_UpdateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateUserProfileCommandError
 */
const de_UpdateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1UpdateVolumeCommand
 */
export const de_UpdateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateVolumeCommandError
 */
const de_UpdateVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
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
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AppAttributes
 */
const se_AppAttributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [AppAttributesKeys | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1AssignInstanceRequest
 */
const se_AssignInstanceRequest = (input: AssignInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.LayerIds != null && { LayerIds: se_Strings(input.LayerIds, context) }),
  };
};

/**
 * serializeAws_json1_1AssignVolumeRequest
 */
const se_AssignVolumeRequest = (input: AssignVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

/**
 * serializeAws_json1_1AssociateElasticIpRequest
 */
const se_AssociateElasticIpRequest = (input: AssociateElasticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1AttachElasticLoadBalancerRequest
 */
const se_AttachElasticLoadBalancerRequest = (input: AttachElasticLoadBalancerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ElasticLoadBalancerName != null && { ElasticLoadBalancerName: input.ElasticLoadBalancerName }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
  };
};

/**
 * serializeAws_json1_1AutoScalingThresholds
 */
const se_AutoScalingThresholds = (input: AutoScalingThresholds, context: __SerdeContext): any => {
  return {
    ...(input.Alarms != null && { Alarms: se_Strings(input.Alarms, context) }),
    ...(input.CpuThreshold != null && { CpuThreshold: __serializeFloat(input.CpuThreshold) }),
    ...(input.IgnoreMetricsTime != null && { IgnoreMetricsTime: input.IgnoreMetricsTime }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.LoadThreshold != null && { LoadThreshold: __serializeFloat(input.LoadThreshold) }),
    ...(input.MemoryThreshold != null && { MemoryThreshold: __serializeFloat(input.MemoryThreshold) }),
    ...(input.ThresholdsWaitTime != null && { ThresholdsWaitTime: input.ThresholdsWaitTime }),
  };
};

/**
 * serializeAws_json1_1BlockDeviceMapping
 */
const se_BlockDeviceMapping = (input: BlockDeviceMapping, context: __SerdeContext): any => {
  return {
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.Ebs != null && { Ebs: se_EbsBlockDevice(input.Ebs, context) }),
    ...(input.NoDevice != null && { NoDevice: input.NoDevice }),
    ...(input.VirtualName != null && { VirtualName: input.VirtualName }),
  };
};

/**
 * serializeAws_json1_1BlockDeviceMappings
 */
const se_BlockDeviceMappings = (input: BlockDeviceMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BlockDeviceMapping(entry, context);
    });
};

/**
 * serializeAws_json1_1ChefConfiguration
 */
const se_ChefConfiguration = (input: ChefConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BerkshelfVersion != null && { BerkshelfVersion: input.BerkshelfVersion }),
    ...(input.ManageBerkshelf != null && { ManageBerkshelf: input.ManageBerkshelf }),
  };
};

/**
 * serializeAws_json1_1CloneStackRequest
 */
const se_CloneStackRequest = (input: CloneStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.Attributes != null && { Attributes: se_StackAttributes(input.Attributes, context) }),
    ...(input.ChefConfiguration != null && {
      ChefConfiguration: se_ChefConfiguration(input.ChefConfiguration, context),
    }),
    ...(input.CloneAppIds != null && { CloneAppIds: se_Strings(input.CloneAppIds, context) }),
    ...(input.ClonePermissions != null && { ClonePermissions: input.ClonePermissions }),
    ...(input.ConfigurationManager != null && {
      ConfigurationManager: se_StackConfigurationManager(input.ConfigurationManager, context),
    }),
    ...(input.CustomCookbooksSource != null && {
      CustomCookbooksSource: se_Source(input.CustomCookbooksSource, context),
    }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.DefaultAvailabilityZone != null && { DefaultAvailabilityZone: input.DefaultAvailabilityZone }),
    ...(input.DefaultInstanceProfileArn != null && { DefaultInstanceProfileArn: input.DefaultInstanceProfileArn }),
    ...(input.DefaultOs != null && { DefaultOs: input.DefaultOs }),
    ...(input.DefaultRootDeviceType != null && { DefaultRootDeviceType: input.DefaultRootDeviceType }),
    ...(input.DefaultSshKeyName != null && { DefaultSshKeyName: input.DefaultSshKeyName }),
    ...(input.DefaultSubnetId != null && { DefaultSubnetId: input.DefaultSubnetId }),
    ...(input.HostnameTheme != null && { HostnameTheme: input.HostnameTheme }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.SourceStackId != null && { SourceStackId: input.SourceStackId }),
    ...(input.UseCustomCookbooks != null && { UseCustomCookbooks: input.UseCustomCookbooks }),
    ...(input.UseOpsworksSecurityGroups != null && { UseOpsworksSecurityGroups: input.UseOpsworksSecurityGroups }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * serializeAws_json1_1CloudWatchLogsConfiguration
 */
const se_CloudWatchLogsConfiguration = (input: CloudWatchLogsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.LogStreams != null && { LogStreams: se_CloudWatchLogsLogStreams(input.LogStreams, context) }),
  };
};

/**
 * serializeAws_json1_1CloudWatchLogsLogStream
 */
const se_CloudWatchLogsLogStream = (input: CloudWatchLogsLogStream, context: __SerdeContext): any => {
  return {
    ...(input.BatchCount != null && { BatchCount: input.BatchCount }),
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.BufferDuration != null && { BufferDuration: input.BufferDuration }),
    ...(input.DatetimeFormat != null && { DatetimeFormat: input.DatetimeFormat }),
    ...(input.Encoding != null && { Encoding: input.Encoding }),
    ...(input.File != null && { File: input.File }),
    ...(input.FileFingerprintLines != null && { FileFingerprintLines: input.FileFingerprintLines }),
    ...(input.InitialPosition != null && { InitialPosition: input.InitialPosition }),
    ...(input.LogGroupName != null && { LogGroupName: input.LogGroupName }),
    ...(input.MultiLineStartPattern != null && { MultiLineStartPattern: input.MultiLineStartPattern }),
    ...(input.TimeZone != null && { TimeZone: input.TimeZone }),
  };
};

/**
 * serializeAws_json1_1CloudWatchLogsLogStreams
 */
const se_CloudWatchLogsLogStreams = (input: CloudWatchLogsLogStream[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CloudWatchLogsLogStream(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateAppRequest
 */
const se_CreateAppRequest = (input: CreateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppSource != null && { AppSource: se_Source(input.AppSource, context) }),
    ...(input.Attributes != null && { Attributes: se_AppAttributes(input.Attributes, context) }),
    ...(input.DataSources != null && { DataSources: se_DataSources(input.DataSources, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Domains != null && { Domains: se_Strings(input.Domains, context) }),
    ...(input.EnableSsl != null && { EnableSsl: input.EnableSsl }),
    ...(input.Environment != null && { Environment: se_EnvironmentVariables(input.Environment, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Shortname != null && { Shortname: input.Shortname }),
    ...(input.SslConfiguration != null && { SslConfiguration: se_SslConfiguration(input.SslConfiguration, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1CreateDeploymentRequest
 */
const se_CreateDeploymentRequest = (input: CreateDeploymentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppId != null && { AppId: input.AppId }),
    ...(input.Command != null && { Command: se_DeploymentCommand(input.Command, context) }),
    ...(input.Comment != null && { Comment: input.Comment }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.InstanceIds != null && { InstanceIds: se_Strings(input.InstanceIds, context) }),
    ...(input.LayerIds != null && { LayerIds: se_Strings(input.LayerIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1CreateInstanceRequest
 */
const se_CreateInstanceRequest = (input: CreateInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.AmiId != null && { AmiId: input.AmiId }),
    ...(input.Architecture != null && { Architecture: input.Architecture }),
    ...(input.AutoScalingType != null && { AutoScalingType: input.AutoScalingType }),
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.BlockDeviceMappings != null && {
      BlockDeviceMappings: se_BlockDeviceMappings(input.BlockDeviceMappings, context),
    }),
    ...(input.EbsOptimized != null && { EbsOptimized: input.EbsOptimized }),
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.InstallUpdatesOnBoot != null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.LayerIds != null && { LayerIds: se_Strings(input.LayerIds, context) }),
    ...(input.Os != null && { Os: input.Os }),
    ...(input.RootDeviceType != null && { RootDeviceType: input.RootDeviceType }),
    ...(input.SshKeyName != null && { SshKeyName: input.SshKeyName }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
    ...(input.Tenancy != null && { Tenancy: input.Tenancy }),
    ...(input.VirtualizationType != null && { VirtualizationType: input.VirtualizationType }),
  };
};

/**
 * serializeAws_json1_1CreateLayerRequest
 */
const se_CreateLayerRequest = (input: CreateLayerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_LayerAttributes(input.Attributes, context) }),
    ...(input.AutoAssignElasticIps != null && { AutoAssignElasticIps: input.AutoAssignElasticIps }),
    ...(input.AutoAssignPublicIps != null && { AutoAssignPublicIps: input.AutoAssignPublicIps }),
    ...(input.CloudWatchLogsConfiguration != null && {
      CloudWatchLogsConfiguration: se_CloudWatchLogsConfiguration(input.CloudWatchLogsConfiguration, context),
    }),
    ...(input.CustomInstanceProfileArn != null && { CustomInstanceProfileArn: input.CustomInstanceProfileArn }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.CustomRecipes != null && { CustomRecipes: se_Recipes(input.CustomRecipes, context) }),
    ...(input.CustomSecurityGroupIds != null && {
      CustomSecurityGroupIds: se_Strings(input.CustomSecurityGroupIds, context),
    }),
    ...(input.EnableAutoHealing != null && { EnableAutoHealing: input.EnableAutoHealing }),
    ...(input.InstallUpdatesOnBoot != null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
    ...(input.LifecycleEventConfiguration != null && {
      LifecycleEventConfiguration: se_LifecycleEventConfiguration(input.LifecycleEventConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Packages != null && { Packages: se_Strings(input.Packages, context) }),
    ...(input.Shortname != null && { Shortname: input.Shortname }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.UseEbsOptimizedInstances != null && { UseEbsOptimizedInstances: input.UseEbsOptimizedInstances }),
    ...(input.VolumeConfigurations != null && {
      VolumeConfigurations: se_VolumeConfigurations(input.VolumeConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateStackRequest
 */
const se_CreateStackRequest = (input: CreateStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.Attributes != null && { Attributes: se_StackAttributes(input.Attributes, context) }),
    ...(input.ChefConfiguration != null && {
      ChefConfiguration: se_ChefConfiguration(input.ChefConfiguration, context),
    }),
    ...(input.ConfigurationManager != null && {
      ConfigurationManager: se_StackConfigurationManager(input.ConfigurationManager, context),
    }),
    ...(input.CustomCookbooksSource != null && {
      CustomCookbooksSource: se_Source(input.CustomCookbooksSource, context),
    }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.DefaultAvailabilityZone != null && { DefaultAvailabilityZone: input.DefaultAvailabilityZone }),
    ...(input.DefaultInstanceProfileArn != null && { DefaultInstanceProfileArn: input.DefaultInstanceProfileArn }),
    ...(input.DefaultOs != null && { DefaultOs: input.DefaultOs }),
    ...(input.DefaultRootDeviceType != null && { DefaultRootDeviceType: input.DefaultRootDeviceType }),
    ...(input.DefaultSshKeyName != null && { DefaultSshKeyName: input.DefaultSshKeyName }),
    ...(input.DefaultSubnetId != null && { DefaultSubnetId: input.DefaultSubnetId }),
    ...(input.HostnameTheme != null && { HostnameTheme: input.HostnameTheme }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.UseCustomCookbooks != null && { UseCustomCookbooks: input.UseCustomCookbooks }),
    ...(input.UseOpsworksSecurityGroups != null && { UseOpsworksSecurityGroups: input.UseOpsworksSecurityGroups }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * serializeAws_json1_1CreateUserProfileRequest
 */
const se_CreateUserProfileRequest = (input: CreateUserProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowSelfManagement != null && { AllowSelfManagement: input.AllowSelfManagement }),
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
    ...(input.SshPublicKey != null && { SshPublicKey: input.SshPublicKey }),
    ...(input.SshUsername != null && { SshUsername: input.SshUsername }),
  };
};

/**
 * serializeAws_json1_1DailyAutoScalingSchedule
 */
const se_DailyAutoScalingSchedule = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1DataSource
 */
const se_DataSource = (input: DataSource, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DataSources
 */
const se_DataSources = (input: DataSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataSource(entry, context);
    });
};

/**
 * serializeAws_json1_1DeleteAppRequest
 */
const se_DeleteAppRequest = (input: DeleteAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppId != null && { AppId: input.AppId }),
  };
};

/**
 * serializeAws_json1_1DeleteInstanceRequest
 */
const se_DeleteInstanceRequest = (input: DeleteInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteElasticIp != null && { DeleteElasticIp: input.DeleteElasticIp }),
    ...(input.DeleteVolumes != null && { DeleteVolumes: input.DeleteVolumes }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1DeleteLayerRequest
 */
const se_DeleteLayerRequest = (input: DeleteLayerRequest, context: __SerdeContext): any => {
  return {
    ...(input.LayerId != null && { LayerId: input.LayerId }),
  };
};

/**
 * serializeAws_json1_1DeleteStackRequest
 */
const se_DeleteStackRequest = (input: DeleteStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DeleteUserProfileRequest
 */
const se_DeleteUserProfileRequest = (input: DeleteUserProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
  };
};

/**
 * serializeAws_json1_1DeploymentCommand
 */
const se_DeploymentCommand = (input: DeploymentCommand, context: __SerdeContext): any => {
  return {
    ...(input.Args != null && { Args: se_DeploymentCommandArgs(input.Args, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeploymentCommandArgs
 */
const se_DeploymentCommandArgs = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Strings(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1DeregisterEcsClusterRequest
 */
const se_DeregisterEcsClusterRequest = (input: DeregisterEcsClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.EcsClusterArn != null && { EcsClusterArn: input.EcsClusterArn }),
  };
};

/**
 * serializeAws_json1_1DeregisterElasticIpRequest
 */
const se_DeregisterElasticIpRequest = (input: DeregisterElasticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
  };
};

/**
 * serializeAws_json1_1DeregisterInstanceRequest
 */
const se_DeregisterInstanceRequest = (input: DeregisterInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1DeregisterRdsDbInstanceRequest
 */
const se_DeregisterRdsDbInstanceRequest = (input: DeregisterRdsDbInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.RdsDbInstanceArn != null && { RdsDbInstanceArn: input.RdsDbInstanceArn }),
  };
};

/**
 * serializeAws_json1_1DeregisterVolumeRequest
 */
const se_DeregisterVolumeRequest = (input: DeregisterVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

/**
 * serializeAws_json1_1DescribeAgentVersionsRequest
 */
const se_DescribeAgentVersionsRequest = (input: DescribeAgentVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationManager != null && {
      ConfigurationManager: se_StackConfigurationManager(input.ConfigurationManager, context),
    }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeAppsRequest
 */
const se_DescribeAppsRequest = (input: DescribeAppsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppIds != null && { AppIds: se_Strings(input.AppIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeCommandsRequest
 */
const se_DescribeCommandsRequest = (input: DescribeCommandsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommandIds != null && { CommandIds: se_Strings(input.CommandIds, context) }),
    ...(input.DeploymentId != null && { DeploymentId: input.DeploymentId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1DescribeDeploymentsRequest
 */
const se_DescribeDeploymentsRequest = (input: DescribeDeploymentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppId != null && { AppId: input.AppId }),
    ...(input.DeploymentIds != null && { DeploymentIds: se_Strings(input.DeploymentIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeEcsClustersRequest
 */
const se_DescribeEcsClustersRequest = (input: DescribeEcsClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.EcsClusterArns != null && { EcsClusterArns: se_Strings(input.EcsClusterArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeElasticIpsRequest
 */
const se_DescribeElasticIpsRequest = (input: DescribeElasticIpsRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Ips != null && { Ips: se_Strings(input.Ips, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeElasticLoadBalancersRequest
 */
const se_DescribeElasticLoadBalancersRequest = (
  input: DescribeElasticLoadBalancersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LayerIds != null && { LayerIds: se_Strings(input.LayerIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeInstancesRequest
 */
const se_DescribeInstancesRequest = (input: DescribeInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceIds != null && { InstanceIds: se_Strings(input.InstanceIds, context) }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeLayersRequest
 */
const se_DescribeLayersRequest = (input: DescribeLayersRequest, context: __SerdeContext): any => {
  return {
    ...(input.LayerIds != null && { LayerIds: se_Strings(input.LayerIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeLoadBasedAutoScalingRequest
 */
const se_DescribeLoadBasedAutoScalingRequest = (
  input: DescribeLoadBasedAutoScalingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LayerIds != null && { LayerIds: se_Strings(input.LayerIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribePermissionsRequest
 */
const se_DescribePermissionsRequest = (input: DescribePermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeRaidArraysRequest
 */
const se_DescribeRaidArraysRequest = (input: DescribeRaidArraysRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.RaidArrayIds != null && { RaidArrayIds: se_Strings(input.RaidArrayIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeRdsDbInstancesRequest
 */
const se_DescribeRdsDbInstancesRequest = (input: DescribeRdsDbInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.RdsDbInstanceArns != null && { RdsDbInstanceArns: se_Strings(input.RdsDbInstanceArns, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeServiceErrorsRequest
 */
const se_DescribeServiceErrorsRequest = (input: DescribeServiceErrorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ServiceErrorIds != null && { ServiceErrorIds: se_Strings(input.ServiceErrorIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeStackProvisioningParametersRequest
 */
const se_DescribeStackProvisioningParametersRequest = (
  input: DescribeStackProvisioningParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeStacksRequest
 */
const se_DescribeStacksRequest = (input: DescribeStacksRequest, context: __SerdeContext): any => {
  return {
    ...(input.StackIds != null && { StackIds: se_Strings(input.StackIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeStackSummaryRequest
 */
const se_DescribeStackSummaryRequest = (input: DescribeStackSummaryRequest, context: __SerdeContext): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1DescribeTimeBasedAutoScalingRequest
 */
const se_DescribeTimeBasedAutoScalingRequest = (
  input: DescribeTimeBasedAutoScalingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceIds != null && { InstanceIds: se_Strings(input.InstanceIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeUserProfilesRequest
 */
const se_DescribeUserProfilesRequest = (input: DescribeUserProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.IamUserArns != null && { IamUserArns: se_Strings(input.IamUserArns, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeVolumesRequest
 */
const se_DescribeVolumesRequest = (input: DescribeVolumesRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.RaidArrayId != null && { RaidArrayId: input.RaidArrayId }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.VolumeIds != null && { VolumeIds: se_Strings(input.VolumeIds, context) }),
  };
};

/**
 * serializeAws_json1_1DetachElasticLoadBalancerRequest
 */
const se_DetachElasticLoadBalancerRequest = (input: DetachElasticLoadBalancerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ElasticLoadBalancerName != null && { ElasticLoadBalancerName: input.ElasticLoadBalancerName }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
  };
};

/**
 * serializeAws_json1_1DisassociateElasticIpRequest
 */
const se_DisassociateElasticIpRequest = (input: DisassociateElasticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
  };
};

/**
 * serializeAws_json1_1EbsBlockDevice
 */
const se_EbsBlockDevice = (input: EbsBlockDevice, context: __SerdeContext): any => {
  return {
    ...(input.DeleteOnTermination != null && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
    ...(input.VolumeSize != null && { VolumeSize: input.VolumeSize }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

/**
 * serializeAws_json1_1EnvironmentVariable
 */
const se_EnvironmentVariable = (input: EnvironmentVariable, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Secure != null && { Secure: input.Secure }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1EnvironmentVariables
 */
const se_EnvironmentVariables = (input: EnvironmentVariable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EnvironmentVariable(entry, context);
    });
};

/**
 * serializeAws_json1_1GetHostnameSuggestionRequest
 */
const se_GetHostnameSuggestionRequest = (input: GetHostnameSuggestionRequest, context: __SerdeContext): any => {
  return {
    ...(input.LayerId != null && { LayerId: input.LayerId }),
  };
};

/**
 * serializeAws_json1_1GrantAccessRequest
 */
const se_GrantAccessRequest = (input: GrantAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ValidForInMinutes != null && { ValidForInMinutes: input.ValidForInMinutes }),
  };
};

/**
 * serializeAws_json1_1InstanceIdentity
 */
const se_InstanceIdentity = (input: InstanceIdentity, context: __SerdeContext): any => {
  return {
    ...(input.Document != null && { Document: input.Document }),
    ...(input.Signature != null && { Signature: input.Signature }),
  };
};

/**
 * serializeAws_json1_1LayerAttributes
 */
const se_LayerAttributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [LayerAttributesKeys | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1LifecycleEventConfiguration
 */
const se_LifecycleEventConfiguration = (input: LifecycleEventConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Shutdown != null && { Shutdown: se_ShutdownEventConfiguration(input.Shutdown, context) }),
  };
};

/**
 * serializeAws_json1_1ListTagsRequest
 */
const se_ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1RebootInstanceRequest
 */
const se_RebootInstanceRequest = (input: RebootInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1Recipes
 */
const se_Recipes = (input: Recipes, context: __SerdeContext): any => {
  return {
    ...(input.Configure != null && { Configure: se_Strings(input.Configure, context) }),
    ...(input.Deploy != null && { Deploy: se_Strings(input.Deploy, context) }),
    ...(input.Setup != null && { Setup: se_Strings(input.Setup, context) }),
    ...(input.Shutdown != null && { Shutdown: se_Strings(input.Shutdown, context) }),
    ...(input.Undeploy != null && { Undeploy: se_Strings(input.Undeploy, context) }),
  };
};

/**
 * serializeAws_json1_1RegisterEcsClusterRequest
 */
const se_RegisterEcsClusterRequest = (input: RegisterEcsClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.EcsClusterArn != null && { EcsClusterArn: input.EcsClusterArn }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1RegisterElasticIpRequest
 */
const se_RegisterElasticIpRequest = (input: RegisterElasticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1RegisterInstanceRequest
 */
const se_RegisterInstanceRequest = (input: RegisterInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.InstanceIdentity != null && { InstanceIdentity: se_InstanceIdentity(input.InstanceIdentity, context) }),
    ...(input.PrivateIp != null && { PrivateIp: input.PrivateIp }),
    ...(input.PublicIp != null && { PublicIp: input.PublicIp }),
    ...(input.RsaPublicKey != null && { RsaPublicKey: input.RsaPublicKey }),
    ...(input.RsaPublicKeyFingerprint != null && { RsaPublicKeyFingerprint: input.RsaPublicKeyFingerprint }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1RegisterRdsDbInstanceRequest
 */
const se_RegisterRdsDbInstanceRequest = (input: RegisterRdsDbInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DbPassword != null && { DbPassword: input.DbPassword }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.RdsDbInstanceArn != null && { RdsDbInstanceArn: input.RdsDbInstanceArn }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1RegisterVolumeRequest
 */
const se_RegisterVolumeRequest = (input: RegisterVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.Ec2VolumeId != null && { Ec2VolumeId: input.Ec2VolumeId }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1SetLoadBasedAutoScalingRequest
 */
const se_SetLoadBasedAutoScalingRequest = (input: SetLoadBasedAutoScalingRequest, context: __SerdeContext): any => {
  return {
    ...(input.DownScaling != null && { DownScaling: se_AutoScalingThresholds(input.DownScaling, context) }),
    ...(input.Enable != null && { Enable: input.Enable }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
    ...(input.UpScaling != null && { UpScaling: se_AutoScalingThresholds(input.UpScaling, context) }),
  };
};

/**
 * serializeAws_json1_1SetPermissionRequest
 */
const se_SetPermissionRequest = (input: SetPermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowSsh != null && { AllowSsh: input.AllowSsh }),
    ...(input.AllowSudo != null && { AllowSudo: input.AllowSudo }),
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
    ...(input.Level != null && { Level: input.Level }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1SetTimeBasedAutoScalingRequest
 */
const se_SetTimeBasedAutoScalingRequest = (input: SetTimeBasedAutoScalingRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingSchedule != null && {
      AutoScalingSchedule: se_WeeklyAutoScalingSchedule(input.AutoScalingSchedule, context),
    }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1ShutdownEventConfiguration
 */
const se_ShutdownEventConfiguration = (input: ShutdownEventConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DelayUntilElbConnectionsDrained != null && {
      DelayUntilElbConnectionsDrained: input.DelayUntilElbConnectionsDrained,
    }),
    ...(input.ExecutionTimeout != null && { ExecutionTimeout: input.ExecutionTimeout }),
  };
};

/**
 * serializeAws_json1_1Source
 */
const se_Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Revision != null && { Revision: input.Revision }),
    ...(input.SshKey != null && { SshKey: input.SshKey }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Url != null && { Url: input.Url }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1SslConfiguration
 */
const se_SslConfiguration = (input: SslConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.Chain != null && { Chain: input.Chain }),
    ...(input.PrivateKey != null && { PrivateKey: input.PrivateKey }),
  };
};

/**
 * serializeAws_json1_1StackAttributes
 */
const se_StackAttributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [StackAttributesKeys | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1StackConfigurationManager
 */
const se_StackConfigurationManager = (input: StackConfigurationManager, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1StartInstanceRequest
 */
const se_StartInstanceRequest = (input: StartInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1StartStackRequest
 */
const se_StartStackRequest = (input: StartStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1StopInstanceRequest
 */
const se_StopInstanceRequest = (input: StopInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Force != null && { Force: input.Force }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1StopStackRequest
 */
const se_StopStackRequest = (input: StopStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

/**
 * serializeAws_json1_1Strings
 */
const se_Strings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1UnassignInstanceRequest
 */
const se_UnassignInstanceRequest = (input: UnassignInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1UnassignVolumeRequest
 */
const se_UnassignVolumeRequest = (input: UnassignVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAppRequest
 */
const se_UpdateAppRequest = (input: UpdateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppId != null && { AppId: input.AppId }),
    ...(input.AppSource != null && { AppSource: se_Source(input.AppSource, context) }),
    ...(input.Attributes != null && { Attributes: se_AppAttributes(input.Attributes, context) }),
    ...(input.DataSources != null && { DataSources: se_DataSources(input.DataSources, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Domains != null && { Domains: se_Strings(input.Domains, context) }),
    ...(input.EnableSsl != null && { EnableSsl: input.EnableSsl }),
    ...(input.Environment != null && { Environment: se_EnvironmentVariables(input.Environment, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SslConfiguration != null && { SslConfiguration: se_SslConfiguration(input.SslConfiguration, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1UpdateElasticIpRequest
 */
const se_UpdateElasticIpRequest = (input: UpdateElasticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateInstanceRequest
 */
const se_UpdateInstanceRequest = (input: UpdateInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.AmiId != null && { AmiId: input.AmiId }),
    ...(input.Architecture != null && { Architecture: input.Architecture }),
    ...(input.AutoScalingType != null && { AutoScalingType: input.AutoScalingType }),
    ...(input.EbsOptimized != null && { EbsOptimized: input.EbsOptimized }),
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.InstallUpdatesOnBoot != null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.LayerIds != null && { LayerIds: se_Strings(input.LayerIds, context) }),
    ...(input.Os != null && { Os: input.Os }),
    ...(input.SshKeyName != null && { SshKeyName: input.SshKeyName }),
  };
};

/**
 * serializeAws_json1_1UpdateLayerRequest
 */
const se_UpdateLayerRequest = (input: UpdateLayerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_LayerAttributes(input.Attributes, context) }),
    ...(input.AutoAssignElasticIps != null && { AutoAssignElasticIps: input.AutoAssignElasticIps }),
    ...(input.AutoAssignPublicIps != null && { AutoAssignPublicIps: input.AutoAssignPublicIps }),
    ...(input.CloudWatchLogsConfiguration != null && {
      CloudWatchLogsConfiguration: se_CloudWatchLogsConfiguration(input.CloudWatchLogsConfiguration, context),
    }),
    ...(input.CustomInstanceProfileArn != null && { CustomInstanceProfileArn: input.CustomInstanceProfileArn }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.CustomRecipes != null && { CustomRecipes: se_Recipes(input.CustomRecipes, context) }),
    ...(input.CustomSecurityGroupIds != null && {
      CustomSecurityGroupIds: se_Strings(input.CustomSecurityGroupIds, context),
    }),
    ...(input.EnableAutoHealing != null && { EnableAutoHealing: input.EnableAutoHealing }),
    ...(input.InstallUpdatesOnBoot != null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
    ...(input.LifecycleEventConfiguration != null && {
      LifecycleEventConfiguration: se_LifecycleEventConfiguration(input.LifecycleEventConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Packages != null && { Packages: se_Strings(input.Packages, context) }),
    ...(input.Shortname != null && { Shortname: input.Shortname }),
    ...(input.UseEbsOptimizedInstances != null && { UseEbsOptimizedInstances: input.UseEbsOptimizedInstances }),
    ...(input.VolumeConfigurations != null && {
      VolumeConfigurations: se_VolumeConfigurations(input.VolumeConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateMyUserProfileRequest
 */
const se_UpdateMyUserProfileRequest = (input: UpdateMyUserProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.SshPublicKey != null && { SshPublicKey: input.SshPublicKey }),
  };
};

/**
 * serializeAws_json1_1UpdateRdsDbInstanceRequest
 */
const se_UpdateRdsDbInstanceRequest = (input: UpdateRdsDbInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DbPassword != null && { DbPassword: input.DbPassword }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.RdsDbInstanceArn != null && { RdsDbInstanceArn: input.RdsDbInstanceArn }),
  };
};

/**
 * serializeAws_json1_1UpdateStackRequest
 */
const se_UpdateStackRequest = (input: UpdateStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.Attributes != null && { Attributes: se_StackAttributes(input.Attributes, context) }),
    ...(input.ChefConfiguration != null && {
      ChefConfiguration: se_ChefConfiguration(input.ChefConfiguration, context),
    }),
    ...(input.ConfigurationManager != null && {
      ConfigurationManager: se_StackConfigurationManager(input.ConfigurationManager, context),
    }),
    ...(input.CustomCookbooksSource != null && {
      CustomCookbooksSource: se_Source(input.CustomCookbooksSource, context),
    }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.DefaultAvailabilityZone != null && { DefaultAvailabilityZone: input.DefaultAvailabilityZone }),
    ...(input.DefaultInstanceProfileArn != null && { DefaultInstanceProfileArn: input.DefaultInstanceProfileArn }),
    ...(input.DefaultOs != null && { DefaultOs: input.DefaultOs }),
    ...(input.DefaultRootDeviceType != null && { DefaultRootDeviceType: input.DefaultRootDeviceType }),
    ...(input.DefaultSshKeyName != null && { DefaultSshKeyName: input.DefaultSshKeyName }),
    ...(input.DefaultSubnetId != null && { DefaultSubnetId: input.DefaultSubnetId }),
    ...(input.HostnameTheme != null && { HostnameTheme: input.HostnameTheme }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.UseCustomCookbooks != null && { UseCustomCookbooks: input.UseCustomCookbooks }),
    ...(input.UseOpsworksSecurityGroups != null && { UseOpsworksSecurityGroups: input.UseOpsworksSecurityGroups }),
  };
};

/**
 * serializeAws_json1_1UpdateUserProfileRequest
 */
const se_UpdateUserProfileRequest = (input: UpdateUserProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowSelfManagement != null && { AllowSelfManagement: input.AllowSelfManagement }),
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
    ...(input.SshPublicKey != null && { SshPublicKey: input.SshPublicKey }),
    ...(input.SshUsername != null && { SshUsername: input.SshUsername }),
  };
};

/**
 * serializeAws_json1_1UpdateVolumeRequest
 */
const se_UpdateVolumeRequest = (input: UpdateVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.MountPoint != null && { MountPoint: input.MountPoint }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

/**
 * serializeAws_json1_1VolumeConfiguration
 */
const se_VolumeConfiguration = (input: VolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.MountPoint != null && { MountPoint: input.MountPoint }),
    ...(input.NumberOfDisks != null && { NumberOfDisks: input.NumberOfDisks }),
    ...(input.RaidLevel != null && { RaidLevel: input.RaidLevel }),
    ...(input.Size != null && { Size: input.Size }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

/**
 * serializeAws_json1_1VolumeConfigurations
 */
const se_VolumeConfigurations = (input: VolumeConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VolumeConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1WeeklyAutoScalingSchedule
 */
const se_WeeklyAutoScalingSchedule = (input: WeeklyAutoScalingSchedule, context: __SerdeContext): any => {
  return {
    ...(input.Friday != null && { Friday: se_DailyAutoScalingSchedule(input.Friday, context) }),
    ...(input.Monday != null && { Monday: se_DailyAutoScalingSchedule(input.Monday, context) }),
    ...(input.Saturday != null && { Saturday: se_DailyAutoScalingSchedule(input.Saturday, context) }),
    ...(input.Sunday != null && { Sunday: se_DailyAutoScalingSchedule(input.Sunday, context) }),
    ...(input.Thursday != null && { Thursday: se_DailyAutoScalingSchedule(input.Thursday, context) }),
    ...(input.Tuesday != null && { Tuesday: se_DailyAutoScalingSchedule(input.Tuesday, context) }),
    ...(input.Wednesday != null && { Wednesday: se_DailyAutoScalingSchedule(input.Wednesday, context) }),
  };
};

/**
 * deserializeAws_json1_1AgentVersion
 */
const de_AgentVersion = (output: any, context: __SerdeContext): AgentVersion => {
  return {
    ConfigurationManager:
      output.ConfigurationManager != null
        ? de_StackConfigurationManager(output.ConfigurationManager, context)
        : undefined,
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1AgentVersions
 */
const de_AgentVersions = (output: any, context: __SerdeContext): AgentVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AgentVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1App
 */
const de_App = (output: any, context: __SerdeContext): App => {
  return {
    AppId: __expectString(output.AppId),
    AppSource: output.AppSource != null ? de_Source(output.AppSource, context) : undefined,
    Attributes: output.Attributes != null ? de_AppAttributes(output.Attributes, context) : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    DataSources: output.DataSources != null ? de_DataSources(output.DataSources, context) : undefined,
    Description: __expectString(output.Description),
    Domains: output.Domains != null ? de_Strings(output.Domains, context) : undefined,
    EnableSsl: __expectBoolean(output.EnableSsl),
    Environment: output.Environment != null ? de_EnvironmentVariables(output.Environment, context) : undefined,
    Name: __expectString(output.Name),
    Shortname: __expectString(output.Shortname),
    SslConfiguration:
      output.SslConfiguration != null ? de_SslConfiguration(output.SslConfiguration, context) : undefined,
    StackId: __expectString(output.StackId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1AppAttributes
 */
const de_AppAttributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [AppAttributesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1Apps
 */
const de_Apps = (output: any, context: __SerdeContext): App[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_App(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoScalingThresholds
 */
const de_AutoScalingThresholds = (output: any, context: __SerdeContext): AutoScalingThresholds => {
  return {
    Alarms: output.Alarms != null ? de_Strings(output.Alarms, context) : undefined,
    CpuThreshold: __limitedParseDouble(output.CpuThreshold),
    IgnoreMetricsTime: __expectInt32(output.IgnoreMetricsTime),
    InstanceCount: __expectInt32(output.InstanceCount),
    LoadThreshold: __limitedParseDouble(output.LoadThreshold),
    MemoryThreshold: __limitedParseDouble(output.MemoryThreshold),
    ThresholdsWaitTime: __expectInt32(output.ThresholdsWaitTime),
  } as any;
};

/**
 * deserializeAws_json1_1BlockDeviceMapping
 */
const de_BlockDeviceMapping = (output: any, context: __SerdeContext): BlockDeviceMapping => {
  return {
    DeviceName: __expectString(output.DeviceName),
    Ebs: output.Ebs != null ? de_EbsBlockDevice(output.Ebs, context) : undefined,
    NoDevice: __expectString(output.NoDevice),
    VirtualName: __expectString(output.VirtualName),
  } as any;
};

/**
 * deserializeAws_json1_1BlockDeviceMappings
 */
const de_BlockDeviceMappings = (output: any, context: __SerdeContext): BlockDeviceMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BlockDeviceMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ChefConfiguration
 */
const de_ChefConfiguration = (output: any, context: __SerdeContext): ChefConfiguration => {
  return {
    BerkshelfVersion: __expectString(output.BerkshelfVersion),
    ManageBerkshelf: __expectBoolean(output.ManageBerkshelf),
  } as any;
};

/**
 * deserializeAws_json1_1CloneStackResult
 */
const de_CloneStackResult = (output: any, context: __SerdeContext): CloneStackResult => {
  return {
    StackId: __expectString(output.StackId),
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchLogsConfiguration
 */
const de_CloudWatchLogsConfiguration = (output: any, context: __SerdeContext): CloudWatchLogsConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    LogStreams: output.LogStreams != null ? de_CloudWatchLogsLogStreams(output.LogStreams, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchLogsLogStream
 */
const de_CloudWatchLogsLogStream = (output: any, context: __SerdeContext): CloudWatchLogsLogStream => {
  return {
    BatchCount: __expectInt32(output.BatchCount),
    BatchSize: __expectInt32(output.BatchSize),
    BufferDuration: __expectInt32(output.BufferDuration),
    DatetimeFormat: __expectString(output.DatetimeFormat),
    Encoding: __expectString(output.Encoding),
    File: __expectString(output.File),
    FileFingerprintLines: __expectString(output.FileFingerprintLines),
    InitialPosition: __expectString(output.InitialPosition),
    LogGroupName: __expectString(output.LogGroupName),
    MultiLineStartPattern: __expectString(output.MultiLineStartPattern),
    TimeZone: __expectString(output.TimeZone),
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchLogsLogStreams
 */
const de_CloudWatchLogsLogStreams = (output: any, context: __SerdeContext): CloudWatchLogsLogStream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CloudWatchLogsLogStream(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Command
 */
const de_Command = (output: any, context: __SerdeContext): Command => {
  return {
    AcknowledgedAt: __expectString(output.AcknowledgedAt),
    CommandId: __expectString(output.CommandId),
    CompletedAt: __expectString(output.CompletedAt),
    CreatedAt: __expectString(output.CreatedAt),
    DeploymentId: __expectString(output.DeploymentId),
    ExitCode: __expectInt32(output.ExitCode),
    InstanceId: __expectString(output.InstanceId),
    LogUrl: __expectString(output.LogUrl),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1Commands
 */
const de_Commands = (output: any, context: __SerdeContext): Command[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Command(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAppResult
 */
const de_CreateAppResult = (output: any, context: __SerdeContext): CreateAppResult => {
  return {
    AppId: __expectString(output.AppId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDeploymentResult
 */
const de_CreateDeploymentResult = (output: any, context: __SerdeContext): CreateDeploymentResult => {
  return {
    DeploymentId: __expectString(output.DeploymentId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateInstanceResult
 */
const de_CreateInstanceResult = (output: any, context: __SerdeContext): CreateInstanceResult => {
  return {
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLayerResult
 */
const de_CreateLayerResult = (output: any, context: __SerdeContext): CreateLayerResult => {
  return {
    LayerId: __expectString(output.LayerId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateStackResult
 */
const de_CreateStackResult = (output: any, context: __SerdeContext): CreateStackResult => {
  return {
    StackId: __expectString(output.StackId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserProfileResult
 */
const de_CreateUserProfileResult = (output: any, context: __SerdeContext): CreateUserProfileResult => {
  return {
    IamUserArn: __expectString(output.IamUserArn),
  } as any;
};

/**
 * deserializeAws_json1_1DailyAutoScalingSchedule
 */
const de_DailyAutoScalingSchedule = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    Arn: __expectString(output.Arn),
    DatabaseName: __expectString(output.DatabaseName),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DataSources
 */
const de_DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Deployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    AppId: __expectString(output.AppId),
    Command: output.Command != null ? de_DeploymentCommand(output.Command, context) : undefined,
    Comment: __expectString(output.Comment),
    CompletedAt: __expectString(output.CompletedAt),
    CreatedAt: __expectString(output.CreatedAt),
    CustomJson: __expectString(output.CustomJson),
    DeploymentId: __expectString(output.DeploymentId),
    Duration: __expectInt32(output.Duration),
    IamUserArn: __expectString(output.IamUserArn),
    InstanceIds: output.InstanceIds != null ? de_Strings(output.InstanceIds, context) : undefined,
    StackId: __expectString(output.StackId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentCommand
 */
const de_DeploymentCommand = (output: any, context: __SerdeContext): DeploymentCommand => {
  return {
    Args: output.Args != null ? de_DeploymentCommandArgs(output.Args, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentCommandArgs
 */
const de_DeploymentCommandArgs = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Strings(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Deployments
 */
const de_Deployments = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Deployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeAgentVersionsResult
 */
const de_DescribeAgentVersionsResult = (output: any, context: __SerdeContext): DescribeAgentVersionsResult => {
  return {
    AgentVersions: output.AgentVersions != null ? de_AgentVersions(output.AgentVersions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAppsResult
 */
const de_DescribeAppsResult = (output: any, context: __SerdeContext): DescribeAppsResult => {
  return {
    Apps: output.Apps != null ? de_Apps(output.Apps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCommandsResult
 */
const de_DescribeCommandsResult = (output: any, context: __SerdeContext): DescribeCommandsResult => {
  return {
    Commands: output.Commands != null ? de_Commands(output.Commands, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDeploymentsResult
 */
const de_DescribeDeploymentsResult = (output: any, context: __SerdeContext): DescribeDeploymentsResult => {
  return {
    Deployments: output.Deployments != null ? de_Deployments(output.Deployments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEcsClustersResult
 */
const de_DescribeEcsClustersResult = (output: any, context: __SerdeContext): DescribeEcsClustersResult => {
  return {
    EcsClusters: output.EcsClusters != null ? de_EcsClusters(output.EcsClusters, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeElasticIpsResult
 */
const de_DescribeElasticIpsResult = (output: any, context: __SerdeContext): DescribeElasticIpsResult => {
  return {
    ElasticIps: output.ElasticIps != null ? de_ElasticIps(output.ElasticIps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeElasticLoadBalancersResult
 */
const de_DescribeElasticLoadBalancersResult = (
  output: any,
  context: __SerdeContext
): DescribeElasticLoadBalancersResult => {
  return {
    ElasticLoadBalancers:
      output.ElasticLoadBalancers != null ? de_ElasticLoadBalancers(output.ElasticLoadBalancers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInstancesResult
 */
const de_DescribeInstancesResult = (output: any, context: __SerdeContext): DescribeInstancesResult => {
  return {
    Instances: output.Instances != null ? de_Instances(output.Instances, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLayersResult
 */
const de_DescribeLayersResult = (output: any, context: __SerdeContext): DescribeLayersResult => {
  return {
    Layers: output.Layers != null ? de_Layers(output.Layers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLoadBasedAutoScalingResult
 */
const de_DescribeLoadBasedAutoScalingResult = (
  output: any,
  context: __SerdeContext
): DescribeLoadBasedAutoScalingResult => {
  return {
    LoadBasedAutoScalingConfigurations:
      output.LoadBasedAutoScalingConfigurations != null
        ? de_LoadBasedAutoScalingConfigurations(output.LoadBasedAutoScalingConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMyUserProfileResult
 */
const de_DescribeMyUserProfileResult = (output: any, context: __SerdeContext): DescribeMyUserProfileResult => {
  return {
    UserProfile: output.UserProfile != null ? de_SelfUserProfile(output.UserProfile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOperatingSystemsResponse
 */
const de_DescribeOperatingSystemsResponse = (
  output: any,
  context: __SerdeContext
): DescribeOperatingSystemsResponse => {
  return {
    OperatingSystems:
      output.OperatingSystems != null ? de_OperatingSystems(output.OperatingSystems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePermissionsResult
 */
const de_DescribePermissionsResult = (output: any, context: __SerdeContext): DescribePermissionsResult => {
  return {
    Permissions: output.Permissions != null ? de_Permissions(output.Permissions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRaidArraysResult
 */
const de_DescribeRaidArraysResult = (output: any, context: __SerdeContext): DescribeRaidArraysResult => {
  return {
    RaidArrays: output.RaidArrays != null ? de_RaidArrays(output.RaidArrays, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRdsDbInstancesResult
 */
const de_DescribeRdsDbInstancesResult = (output: any, context: __SerdeContext): DescribeRdsDbInstancesResult => {
  return {
    RdsDbInstances: output.RdsDbInstances != null ? de_RdsDbInstances(output.RdsDbInstances, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeServiceErrorsResult
 */
const de_DescribeServiceErrorsResult = (output: any, context: __SerdeContext): DescribeServiceErrorsResult => {
  return {
    ServiceErrors: output.ServiceErrors != null ? de_ServiceErrors(output.ServiceErrors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStackProvisioningParametersResult
 */
const de_DescribeStackProvisioningParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeStackProvisioningParametersResult => {
  return {
    AgentInstallerUrl: __expectString(output.AgentInstallerUrl),
    Parameters: output.Parameters != null ? de_Parameters(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStacksResult
 */
const de_DescribeStacksResult = (output: any, context: __SerdeContext): DescribeStacksResult => {
  return {
    Stacks: output.Stacks != null ? de_Stacks(output.Stacks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStackSummaryResult
 */
const de_DescribeStackSummaryResult = (output: any, context: __SerdeContext): DescribeStackSummaryResult => {
  return {
    StackSummary: output.StackSummary != null ? de_StackSummary(output.StackSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTimeBasedAutoScalingResult
 */
const de_DescribeTimeBasedAutoScalingResult = (
  output: any,
  context: __SerdeContext
): DescribeTimeBasedAutoScalingResult => {
  return {
    TimeBasedAutoScalingConfigurations:
      output.TimeBasedAutoScalingConfigurations != null
        ? de_TimeBasedAutoScalingConfigurations(output.TimeBasedAutoScalingConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserProfilesResult
 */
const de_DescribeUserProfilesResult = (output: any, context: __SerdeContext): DescribeUserProfilesResult => {
  return {
    UserProfiles: output.UserProfiles != null ? de_UserProfiles(output.UserProfiles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeVolumesResult
 */
const de_DescribeVolumesResult = (output: any, context: __SerdeContext): DescribeVolumesResult => {
  return {
    Volumes: output.Volumes != null ? de_Volumes(output.Volumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EbsBlockDevice
 */
const de_EbsBlockDevice = (output: any, context: __SerdeContext): EbsBlockDevice => {
  return {
    DeleteOnTermination: __expectBoolean(output.DeleteOnTermination),
    Iops: __expectInt32(output.Iops),
    SnapshotId: __expectString(output.SnapshotId),
    VolumeSize: __expectInt32(output.VolumeSize),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

/**
 * deserializeAws_json1_1EcsCluster
 */
const de_EcsCluster = (output: any, context: __SerdeContext): EcsCluster => {
  return {
    EcsClusterArn: __expectString(output.EcsClusterArn),
    EcsClusterName: __expectString(output.EcsClusterName),
    RegisteredAt: __expectString(output.RegisteredAt),
    StackId: __expectString(output.StackId),
  } as any;
};

/**
 * deserializeAws_json1_1EcsClusters
 */
const de_EcsClusters = (output: any, context: __SerdeContext): EcsCluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EcsCluster(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ElasticIp
 */
const de_ElasticIp = (output: any, context: __SerdeContext): ElasticIp => {
  return {
    Domain: __expectString(output.Domain),
    InstanceId: __expectString(output.InstanceId),
    Ip: __expectString(output.Ip),
    Name: __expectString(output.Name),
    Region: __expectString(output.Region),
  } as any;
};

/**
 * deserializeAws_json1_1ElasticIps
 */
const de_ElasticIps = (output: any, context: __SerdeContext): ElasticIp[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ElasticIp(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ElasticLoadBalancer
 */
const de_ElasticLoadBalancer = (output: any, context: __SerdeContext): ElasticLoadBalancer => {
  return {
    AvailabilityZones: output.AvailabilityZones != null ? de_Strings(output.AvailabilityZones, context) : undefined,
    DnsName: __expectString(output.DnsName),
    Ec2InstanceIds: output.Ec2InstanceIds != null ? de_Strings(output.Ec2InstanceIds, context) : undefined,
    ElasticLoadBalancerName: __expectString(output.ElasticLoadBalancerName),
    LayerId: __expectString(output.LayerId),
    Region: __expectString(output.Region),
    StackId: __expectString(output.StackId),
    SubnetIds: output.SubnetIds != null ? de_Strings(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1ElasticLoadBalancers
 */
const de_ElasticLoadBalancers = (output: any, context: __SerdeContext): ElasticLoadBalancer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ElasticLoadBalancer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnvironmentVariable
 */
const de_EnvironmentVariable = (output: any, context: __SerdeContext): EnvironmentVariable => {
  return {
    Key: __expectString(output.Key),
    Secure: __expectBoolean(output.Secure),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentVariables
 */
const de_EnvironmentVariables = (output: any, context: __SerdeContext): EnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentVariable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetHostnameSuggestionResult
 */
const de_GetHostnameSuggestionResult = (output: any, context: __SerdeContext): GetHostnameSuggestionResult => {
  return {
    Hostname: __expectString(output.Hostname),
    LayerId: __expectString(output.LayerId),
  } as any;
};

/**
 * deserializeAws_json1_1GrantAccessResult
 */
const de_GrantAccessResult = (output: any, context: __SerdeContext): GrantAccessResult => {
  return {
    TemporaryCredential:
      output.TemporaryCredential != null ? de_TemporaryCredential(output.TemporaryCredential, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    AgentVersion: __expectString(output.AgentVersion),
    AmiId: __expectString(output.AmiId),
    Architecture: __expectString(output.Architecture),
    Arn: __expectString(output.Arn),
    AutoScalingType: __expectString(output.AutoScalingType),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    BlockDeviceMappings:
      output.BlockDeviceMappings != null ? de_BlockDeviceMappings(output.BlockDeviceMappings, context) : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    EbsOptimized: __expectBoolean(output.EbsOptimized),
    Ec2InstanceId: __expectString(output.Ec2InstanceId),
    EcsClusterArn: __expectString(output.EcsClusterArn),
    EcsContainerInstanceArn: __expectString(output.EcsContainerInstanceArn),
    ElasticIp: __expectString(output.ElasticIp),
    Hostname: __expectString(output.Hostname),
    InfrastructureClass: __expectString(output.InfrastructureClass),
    InstallUpdatesOnBoot: __expectBoolean(output.InstallUpdatesOnBoot),
    InstanceId: __expectString(output.InstanceId),
    InstanceProfileArn: __expectString(output.InstanceProfileArn),
    InstanceType: __expectString(output.InstanceType),
    LastServiceErrorId: __expectString(output.LastServiceErrorId),
    LayerIds: output.LayerIds != null ? de_Strings(output.LayerIds, context) : undefined,
    Os: __expectString(output.Os),
    Platform: __expectString(output.Platform),
    PrivateDns: __expectString(output.PrivateDns),
    PrivateIp: __expectString(output.PrivateIp),
    PublicDns: __expectString(output.PublicDns),
    PublicIp: __expectString(output.PublicIp),
    RegisteredBy: __expectString(output.RegisteredBy),
    ReportedAgentVersion: __expectString(output.ReportedAgentVersion),
    ReportedOs: output.ReportedOs != null ? de_ReportedOs(output.ReportedOs, context) : undefined,
    RootDeviceType: __expectString(output.RootDeviceType),
    RootDeviceVolumeId: __expectString(output.RootDeviceVolumeId),
    SecurityGroupIds: output.SecurityGroupIds != null ? de_Strings(output.SecurityGroupIds, context) : undefined,
    SshHostDsaKeyFingerprint: __expectString(output.SshHostDsaKeyFingerprint),
    SshHostRsaKeyFingerprint: __expectString(output.SshHostRsaKeyFingerprint),
    SshKeyName: __expectString(output.SshKeyName),
    StackId: __expectString(output.StackId),
    Status: __expectString(output.Status),
    SubnetId: __expectString(output.SubnetId),
    Tenancy: __expectString(output.Tenancy),
    VirtualizationType: __expectString(output.VirtualizationType),
  } as any;
};

/**
 * deserializeAws_json1_1Instances
 */
const de_Instances = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Instance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstancesCount
 */
const de_InstancesCount = (output: any, context: __SerdeContext): InstancesCount => {
  return {
    Assigning: __expectInt32(output.Assigning),
    Booting: __expectInt32(output.Booting),
    ConnectionLost: __expectInt32(output.ConnectionLost),
    Deregistering: __expectInt32(output.Deregistering),
    Online: __expectInt32(output.Online),
    Pending: __expectInt32(output.Pending),
    Rebooting: __expectInt32(output.Rebooting),
    Registered: __expectInt32(output.Registered),
    Registering: __expectInt32(output.Registering),
    Requested: __expectInt32(output.Requested),
    RunningSetup: __expectInt32(output.RunningSetup),
    SetupFailed: __expectInt32(output.SetupFailed),
    ShuttingDown: __expectInt32(output.ShuttingDown),
    StartFailed: __expectInt32(output.StartFailed),
    StopFailed: __expectInt32(output.StopFailed),
    Stopped: __expectInt32(output.Stopped),
    Stopping: __expectInt32(output.Stopping),
    Terminated: __expectInt32(output.Terminated),
    Terminating: __expectInt32(output.Terminating),
    Unassigning: __expectInt32(output.Unassigning),
  } as any;
};

/**
 * deserializeAws_json1_1Layer
 */
const de_Layer = (output: any, context: __SerdeContext): Layer => {
  return {
    Arn: __expectString(output.Arn),
    Attributes: output.Attributes != null ? de_LayerAttributes(output.Attributes, context) : undefined,
    AutoAssignElasticIps: __expectBoolean(output.AutoAssignElasticIps),
    AutoAssignPublicIps: __expectBoolean(output.AutoAssignPublicIps),
    CloudWatchLogsConfiguration:
      output.CloudWatchLogsConfiguration != null
        ? de_CloudWatchLogsConfiguration(output.CloudWatchLogsConfiguration, context)
        : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    CustomInstanceProfileArn: __expectString(output.CustomInstanceProfileArn),
    CustomJson: __expectString(output.CustomJson),
    CustomRecipes: output.CustomRecipes != null ? de_Recipes(output.CustomRecipes, context) : undefined,
    CustomSecurityGroupIds:
      output.CustomSecurityGroupIds != null ? de_Strings(output.CustomSecurityGroupIds, context) : undefined,
    DefaultRecipes: output.DefaultRecipes != null ? de_Recipes(output.DefaultRecipes, context) : undefined,
    DefaultSecurityGroupNames:
      output.DefaultSecurityGroupNames != null ? de_Strings(output.DefaultSecurityGroupNames, context) : undefined,
    EnableAutoHealing: __expectBoolean(output.EnableAutoHealing),
    InstallUpdatesOnBoot: __expectBoolean(output.InstallUpdatesOnBoot),
    LayerId: __expectString(output.LayerId),
    LifecycleEventConfiguration:
      output.LifecycleEventConfiguration != null
        ? de_LifecycleEventConfiguration(output.LifecycleEventConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
    Packages: output.Packages != null ? de_Strings(output.Packages, context) : undefined,
    Shortname: __expectString(output.Shortname),
    StackId: __expectString(output.StackId),
    Type: __expectString(output.Type),
    UseEbsOptimizedInstances: __expectBoolean(output.UseEbsOptimizedInstances),
    VolumeConfigurations:
      output.VolumeConfigurations != null ? de_VolumeConfigurations(output.VolumeConfigurations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LayerAttributes
 */
const de_LayerAttributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [LayerAttributesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1Layers
 */
const de_Layers = (output: any, context: __SerdeContext): Layer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Layer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LifecycleEventConfiguration
 */
const de_LifecycleEventConfiguration = (output: any, context: __SerdeContext): LifecycleEventConfiguration => {
  return {
    Shutdown: output.Shutdown != null ? de_ShutdownEventConfiguration(output.Shutdown, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsResult
 */
const de_ListTagsResult = (output: any, context: __SerdeContext): ListTagsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoadBasedAutoScalingConfiguration
 */
const de_LoadBasedAutoScalingConfiguration = (
  output: any,
  context: __SerdeContext
): LoadBasedAutoScalingConfiguration => {
  return {
    DownScaling: output.DownScaling != null ? de_AutoScalingThresholds(output.DownScaling, context) : undefined,
    Enable: __expectBoolean(output.Enable),
    LayerId: __expectString(output.LayerId),
    UpScaling: output.UpScaling != null ? de_AutoScalingThresholds(output.UpScaling, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoadBasedAutoScalingConfigurations
 */
const de_LoadBasedAutoScalingConfigurations = (
  output: any,
  context: __SerdeContext
): LoadBasedAutoScalingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoadBasedAutoScalingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OperatingSystem
 */
const de_OperatingSystem = (output: any, context: __SerdeContext): OperatingSystem => {
  return {
    ConfigurationManagers:
      output.ConfigurationManagers != null
        ? de_OperatingSystemConfigurationManagers(output.ConfigurationManagers, context)
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ReportedName: __expectString(output.ReportedName),
    ReportedVersion: __expectString(output.ReportedVersion),
    Supported: __expectBoolean(output.Supported),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1OperatingSystemConfigurationManager
 */
const de_OperatingSystemConfigurationManager = (
  output: any,
  context: __SerdeContext
): OperatingSystemConfigurationManager => {
  return {
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1OperatingSystemConfigurationManagers
 */
const de_OperatingSystemConfigurationManagers = (
  output: any,
  context: __SerdeContext
): OperatingSystemConfigurationManager[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OperatingSystemConfigurationManager(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OperatingSystems
 */
const de_OperatingSystems = (output: any, context: __SerdeContext): OperatingSystem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OperatingSystem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Parameters
 */
const de_Parameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Permission
 */
const de_Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    AllowSsh: __expectBoolean(output.AllowSsh),
    AllowSudo: __expectBoolean(output.AllowSudo),
    IamUserArn: __expectString(output.IamUserArn),
    Level: __expectString(output.Level),
    StackId: __expectString(output.StackId),
  } as any;
};

/**
 * deserializeAws_json1_1Permissions
 */
const de_Permissions = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Permission(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RaidArray
 */
const de_RaidArray = (output: any, context: __SerdeContext): RaidArray => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreatedAt: __expectString(output.CreatedAt),
    Device: __expectString(output.Device),
    InstanceId: __expectString(output.InstanceId),
    Iops: __expectInt32(output.Iops),
    MountPoint: __expectString(output.MountPoint),
    Name: __expectString(output.Name),
    NumberOfDisks: __expectInt32(output.NumberOfDisks),
    RaidArrayId: __expectString(output.RaidArrayId),
    RaidLevel: __expectInt32(output.RaidLevel),
    Size: __expectInt32(output.Size),
    StackId: __expectString(output.StackId),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

/**
 * deserializeAws_json1_1RaidArrays
 */
const de_RaidArrays = (output: any, context: __SerdeContext): RaidArray[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RaidArray(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RdsDbInstance
 */
const de_RdsDbInstance = (output: any, context: __SerdeContext): RdsDbInstance => {
  return {
    Address: __expectString(output.Address),
    DbInstanceIdentifier: __expectString(output.DbInstanceIdentifier),
    DbPassword: __expectString(output.DbPassword),
    DbUser: __expectString(output.DbUser),
    Engine: __expectString(output.Engine),
    MissingOnRds: __expectBoolean(output.MissingOnRds),
    RdsDbInstanceArn: __expectString(output.RdsDbInstanceArn),
    Region: __expectString(output.Region),
    StackId: __expectString(output.StackId),
  } as any;
};

/**
 * deserializeAws_json1_1RdsDbInstances
 */
const de_RdsDbInstances = (output: any, context: __SerdeContext): RdsDbInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RdsDbInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Recipes
 */
const de_Recipes = (output: any, context: __SerdeContext): Recipes => {
  return {
    Configure: output.Configure != null ? de_Strings(output.Configure, context) : undefined,
    Deploy: output.Deploy != null ? de_Strings(output.Deploy, context) : undefined,
    Setup: output.Setup != null ? de_Strings(output.Setup, context) : undefined,
    Shutdown: output.Shutdown != null ? de_Strings(output.Shutdown, context) : undefined,
    Undeploy: output.Undeploy != null ? de_Strings(output.Undeploy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegisterEcsClusterResult
 */
const de_RegisterEcsClusterResult = (output: any, context: __SerdeContext): RegisterEcsClusterResult => {
  return {
    EcsClusterArn: __expectString(output.EcsClusterArn),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterElasticIpResult
 */
const de_RegisterElasticIpResult = (output: any, context: __SerdeContext): RegisterElasticIpResult => {
  return {
    ElasticIp: __expectString(output.ElasticIp),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterInstanceResult
 */
const de_RegisterInstanceResult = (output: any, context: __SerdeContext): RegisterInstanceResult => {
  return {
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterVolumeResult
 */
const de_RegisterVolumeResult = (output: any, context: __SerdeContext): RegisterVolumeResult => {
  return {
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

/**
 * deserializeAws_json1_1ReportedOs
 */
const de_ReportedOs = (output: any, context: __SerdeContext): ReportedOs => {
  return {
    Family: __expectString(output.Family),
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SelfUserProfile
 */
const de_SelfUserProfile = (output: any, context: __SerdeContext): SelfUserProfile => {
  return {
    IamUserArn: __expectString(output.IamUserArn),
    Name: __expectString(output.Name),
    SshPublicKey: __expectString(output.SshPublicKey),
    SshUsername: __expectString(output.SshUsername),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceError
 */
const de_ServiceError = (output: any, context: __SerdeContext): ServiceError => {
  return {
    CreatedAt: __expectString(output.CreatedAt),
    InstanceId: __expectString(output.InstanceId),
    Message: __expectString(output.Message),
    ServiceErrorId: __expectString(output.ServiceErrorId),
    StackId: __expectString(output.StackId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceErrors
 */
const de_ServiceErrors = (output: any, context: __SerdeContext): ServiceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ShutdownEventConfiguration
 */
const de_ShutdownEventConfiguration = (output: any, context: __SerdeContext): ShutdownEventConfiguration => {
  return {
    DelayUntilElbConnectionsDrained: __expectBoolean(output.DelayUntilElbConnectionsDrained),
    ExecutionTimeout: __expectInt32(output.ExecutionTimeout),
  } as any;
};

/**
 * deserializeAws_json1_1Source
 */
const de_Source = (output: any, context: __SerdeContext): Source => {
  return {
    Password: __expectString(output.Password),
    Revision: __expectString(output.Revision),
    SshKey: __expectString(output.SshKey),
    Type: __expectString(output.Type),
    Url: __expectString(output.Url),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1SslConfiguration
 */
const de_SslConfiguration = (output: any, context: __SerdeContext): SslConfiguration => {
  return {
    Certificate: __expectString(output.Certificate),
    Chain: __expectString(output.Chain),
    PrivateKey: __expectString(output.PrivateKey),
  } as any;
};

/**
 * deserializeAws_json1_1Stack
 */
const de_Stack = (output: any, context: __SerdeContext): Stack => {
  return {
    AgentVersion: __expectString(output.AgentVersion),
    Arn: __expectString(output.Arn),
    Attributes: output.Attributes != null ? de_StackAttributes(output.Attributes, context) : undefined,
    ChefConfiguration:
      output.ChefConfiguration != null ? de_ChefConfiguration(output.ChefConfiguration, context) : undefined,
    ConfigurationManager:
      output.ConfigurationManager != null
        ? de_StackConfigurationManager(output.ConfigurationManager, context)
        : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    CustomCookbooksSource:
      output.CustomCookbooksSource != null ? de_Source(output.CustomCookbooksSource, context) : undefined,
    CustomJson: __expectString(output.CustomJson),
    DefaultAvailabilityZone: __expectString(output.DefaultAvailabilityZone),
    DefaultInstanceProfileArn: __expectString(output.DefaultInstanceProfileArn),
    DefaultOs: __expectString(output.DefaultOs),
    DefaultRootDeviceType: __expectString(output.DefaultRootDeviceType),
    DefaultSshKeyName: __expectString(output.DefaultSshKeyName),
    DefaultSubnetId: __expectString(output.DefaultSubnetId),
    HostnameTheme: __expectString(output.HostnameTheme),
    Name: __expectString(output.Name),
    Region: __expectString(output.Region),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    StackId: __expectString(output.StackId),
    UseCustomCookbooks: __expectBoolean(output.UseCustomCookbooks),
    UseOpsworksSecurityGroups: __expectBoolean(output.UseOpsworksSecurityGroups),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1StackAttributes
 */
const de_StackAttributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [StackAttributesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1StackConfigurationManager
 */
const de_StackConfigurationManager = (output: any, context: __SerdeContext): StackConfigurationManager => {
  return {
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1Stacks
 */
const de_Stacks = (output: any, context: __SerdeContext): Stack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Stack(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StackSummary
 */
const de_StackSummary = (output: any, context: __SerdeContext): StackSummary => {
  return {
    AppsCount: __expectInt32(output.AppsCount),
    Arn: __expectString(output.Arn),
    InstancesCount: output.InstancesCount != null ? de_InstancesCount(output.InstancesCount, context) : undefined,
    LayersCount: __expectInt32(output.LayersCount),
    Name: __expectString(output.Name),
    StackId: __expectString(output.StackId),
  } as any;
};

/**
 * deserializeAws_json1_1Strings
 */
const de_Strings = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1TemporaryCredential
 */
const de_TemporaryCredential = (output: any, context: __SerdeContext): TemporaryCredential => {
  return {
    InstanceId: __expectString(output.InstanceId),
    Password: __expectString(output.Password),
    Username: __expectString(output.Username),
    ValidForInMinutes: __expectInt32(output.ValidForInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1TimeBasedAutoScalingConfiguration
 */
const de_TimeBasedAutoScalingConfiguration = (
  output: any,
  context: __SerdeContext
): TimeBasedAutoScalingConfiguration => {
  return {
    AutoScalingSchedule:
      output.AutoScalingSchedule != null
        ? de_WeeklyAutoScalingSchedule(output.AutoScalingSchedule, context)
        : undefined,
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

/**
 * deserializeAws_json1_1TimeBasedAutoScalingConfigurations
 */
const de_TimeBasedAutoScalingConfigurations = (
  output: any,
  context: __SerdeContext
): TimeBasedAutoScalingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimeBasedAutoScalingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserProfile
 */
const de_UserProfile = (output: any, context: __SerdeContext): UserProfile => {
  return {
    AllowSelfManagement: __expectBoolean(output.AllowSelfManagement),
    IamUserArn: __expectString(output.IamUserArn),
    Name: __expectString(output.Name),
    SshPublicKey: __expectString(output.SshPublicKey),
    SshUsername: __expectString(output.SshUsername),
  } as any;
};

/**
 * deserializeAws_json1_1UserProfiles
 */
const de_UserProfiles = (output: any, context: __SerdeContext): UserProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Volume
 */
const de_Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    Device: __expectString(output.Device),
    Ec2VolumeId: __expectString(output.Ec2VolumeId),
    Encrypted: __expectBoolean(output.Encrypted),
    InstanceId: __expectString(output.InstanceId),
    Iops: __expectInt32(output.Iops),
    MountPoint: __expectString(output.MountPoint),
    Name: __expectString(output.Name),
    RaidArrayId: __expectString(output.RaidArrayId),
    Region: __expectString(output.Region),
    Size: __expectInt32(output.Size),
    Status: __expectString(output.Status),
    VolumeId: __expectString(output.VolumeId),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

/**
 * deserializeAws_json1_1VolumeConfiguration
 */
const de_VolumeConfiguration = (output: any, context: __SerdeContext): VolumeConfiguration => {
  return {
    Encrypted: __expectBoolean(output.Encrypted),
    Iops: __expectInt32(output.Iops),
    MountPoint: __expectString(output.MountPoint),
    NumberOfDisks: __expectInt32(output.NumberOfDisks),
    RaidLevel: __expectInt32(output.RaidLevel),
    Size: __expectInt32(output.Size),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

/**
 * deserializeAws_json1_1VolumeConfigurations
 */
const de_VolumeConfigurations = (output: any, context: __SerdeContext): VolumeConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VolumeConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Volumes
 */
const de_Volumes = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Volume(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WeeklyAutoScalingSchedule
 */
const de_WeeklyAutoScalingSchedule = (output: any, context: __SerdeContext): WeeklyAutoScalingSchedule => {
  return {
    Friday: output.Friday != null ? de_DailyAutoScalingSchedule(output.Friday, context) : undefined,
    Monday: output.Monday != null ? de_DailyAutoScalingSchedule(output.Monday, context) : undefined,
    Saturday: output.Saturday != null ? de_DailyAutoScalingSchedule(output.Saturday, context) : undefined,
    Sunday: output.Sunday != null ? de_DailyAutoScalingSchedule(output.Sunday, context) : undefined,
    Thursday: output.Thursday != null ? de_DailyAutoScalingSchedule(output.Thursday, context) : undefined,
    Tuesday: output.Tuesday != null ? de_DailyAutoScalingSchedule(output.Tuesday, context) : undefined,
    Wednesday: output.Wednesday != null ? de_DailyAutoScalingSchedule(output.Wednesday, context) : undefined,
  } as any;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `OpsWorks_20130218.${operation}`,
  };
}

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
