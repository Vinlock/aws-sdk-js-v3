// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateAccountAliasRequest, CreateAccountAliasRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryCreateAccountAliasCommand,
  serializeAws_queryCreateAccountAliasCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link CreateAccountAliasCommand}.
 */
export interface CreateAccountAliasCommandInput extends CreateAccountAliasRequest {}
/**
 * The output of {@link CreateAccountAliasCommand}.
 */
export interface CreateAccountAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account
 *             alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an
 *                 alias for your Amazon Web Services account ID</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateAccountAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @example To create an account alias
 * ```javascript
 * // The following command associates the alias examplecorp to your AWS account.
 * const input = {
 *   "AccountAlias": "examplecorp"
 * };
 * const command = new CreateAccountAliasCommand(input);
 * await client.send(command);
 * // example id: 5adaf6fb-94fc-4ca2-b825-2fbc2062add1
 * ```
 *
 */
export class CreateAccountAliasCommand extends $Command<
  CreateAccountAliasCommandInput,
  CreateAccountAliasCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CreateAccountAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccountAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateAccountAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccountAliasRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccountAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateAccountAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccountAliasCommandOutput> {
    return deserializeAws_queryCreateAccountAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
