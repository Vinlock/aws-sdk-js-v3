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

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  VerifyRequest,
  VerifyRequestFilterSensitiveLog,
  VerifyResponse,
  VerifyResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1VerifyCommand, serializeAws_json1_1VerifyCommand } from "../protocols/Aws_json1_1";

/**
 * The input for {@link VerifyCommand}.
 */
export interface VerifyCommandInput extends VerifyRequest {}
/**
 * The output of {@link VerifyCommand}.
 */
export interface VerifyCommandOutput extends VerifyResponse, __MetadataBearer {}

/**
 * <p>Verifies a digital signature that was generated by the <a>Sign</a> operation. </p>
 *          <p></p>
 *          <p>Verification confirms that an authorized user signed the message with the specified KMS
 *       key and signing algorithm, and the message hasn't changed since it was signed. If the
 *       signature is verified, the value of the <code>SignatureValid</code> field in the response is
 *         <code>True</code>. If the signature verification fails, the <code>Verify</code> operation
 *       fails with an <code>KMSInvalidSignatureException</code> exception.</p>
 *          <p>A digital signature is generated by using the private key in an asymmetric KMS key. The
 *       signature is verified by using the public key in the same asymmetric KMS key.
 *       For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>To use the <code>Verify</code> operation, specify the
 *       same asymmetric KMS key, message, and signing algorithm that were used to produce the
 *       signature. The message type does not need to be the same as the one used for signing, but it must
 *       indicate whether the value of the <code>Message</code> parameter should be
 *       hashed as part of the verification process.</p>
 *          <p>You can also verify the digital signature by using the public key of the KMS key outside
 *       of KMS. Use the <a>GetPublicKey</a> operation to download the public key in the
 *       asymmetric KMS key and then use the public key to verify the signature outside of KMS. The
 *       advantage of using the <code>Verify</code> operation is that it is performed within KMS. As
 *       a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged
 *       in CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use
 *       the KMS key to verify signatures.</p>
 *          <p>To verify a signature outside of KMS with an SM2 public key (China Regions only), you must
 *       specify the distinguishing ID. By default, KMS uses <code>1234567812345678</code> as the
 *       distinguishing ID. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-sm-offline-verification">Offline verification
 *         with SM2 key pairs</a>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Verify</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>Sign</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, VerifyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, VerifyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new VerifyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyCommandInput} for command's `input` shape.
 * @see {@link VerifyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @example To use an asymmetric KMS key to verify a digital signature
 * ```javascript
 * // This operation uses the public key in an elliptic curve (ECC) asymmetric key to verify a digital signature within AWS KMS.
 * const input = {
 *   "KeyId": "alias/ECC_signing_key",
 *   "Message": "<message to be verified>",
 *   "MessageType": "RAW",
 *   "Signature": "<binary data>",
 *   "SigningAlgorithm": "ECDSA_SHA_384"
 * };
 * const command = new VerifyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "SignatureValid": true,
 *   "SigningAlgorithm": "ECDSA_SHA_384"
 * }
 * *\/
 * // example id: to-use-an-asymmetric-kms-key-to-verify-a-digital-signature-1
 * ```
 *
 * @example To use an asymmetric KMS key to verify a digital signature on a message digest
 * ```javascript
 * // This operation uses the public key in an RSA asymmetric signing key pair to verify the digital signature of a message digest. Hashing a message into a digest before sending it to KMS lets you verify messages that exceed the 4096-byte message size limit. To indicate that the value of Message is a digest, use the MessageType parameter
 * const input = {
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
 *   "Message": "<message digest to be verified>",
 *   "MessageType": "DIGEST",
 *   "Signature": "<binary data>",
 *   "SigningAlgorithm": "RSASSA_PSS_SHA_512"
 * };
 * const command = new VerifyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
 *   "SignatureValid": true,
 *   "SigningAlgorithm": "RSASSA_PSS_SHA_512"
 * }
 * *\/
 * // example id: to-use-an-asymmetric-kms-key-to-verify-a-digital-signature-on-a-message-digest-2
 * ```
 *
 */
export class VerifyCommand extends $Command<VerifyCommandInput, VerifyCommandOutput, KMSClientResolvedConfig> {
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

  constructor(readonly input: VerifyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyCommandInput, VerifyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, VerifyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "VerifyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: VerifyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1VerifyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyCommandOutput> {
    return deserializeAws_json1_1VerifyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
