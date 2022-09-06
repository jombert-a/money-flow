import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationTypeCreateOrConnectWithoutOperationsInput } from "../inputs/OperationTypeCreateOrConnectWithoutOperationsInput";
import { OperationTypeCreateWithoutOperationsInput } from "../inputs/OperationTypeCreateWithoutOperationsInput";
import { OperationTypeUpdateWithoutOperationsInput } from "../inputs/OperationTypeUpdateWithoutOperationsInput";
import { OperationTypeUpsertWithoutOperationsInput } from "../inputs/OperationTypeUpsertWithoutOperationsInput";
import { OperationTypeWhereUniqueInput } from "../inputs/OperationTypeWhereUniqueInput";

@TypeGraphQL.InputType("OperationTypeUpdateOneRequiredWithoutOperationsNestedInput", {
  isAbstract: true
})
export class OperationTypeUpdateOneRequiredWithoutOperationsNestedInput {
  @TypeGraphQL.Field(_type => OperationTypeCreateWithoutOperationsInput, {
    nullable: true
  })
  create?: OperationTypeCreateWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeCreateOrConnectWithoutOperationsInput, {
    nullable: true
  })
  connectOrCreate?: OperationTypeCreateOrConnectWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeUpsertWithoutOperationsInput, {
    nullable: true
  })
  upsert?: OperationTypeUpsertWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: OperationTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeUpdateWithoutOperationsInput, {
    nullable: true
  })
  update?: OperationTypeUpdateWithoutOperationsInput | undefined;
}
