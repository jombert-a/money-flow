import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationTypeCreateOrConnectWithoutOperationsInput } from "../inputs/OperationTypeCreateOrConnectWithoutOperationsInput";
import { OperationTypeCreateWithoutOperationsInput } from "../inputs/OperationTypeCreateWithoutOperationsInput";
import { OperationTypeWhereUniqueInput } from "../inputs/OperationTypeWhereUniqueInput";

@TypeGraphQL.InputType("OperationTypeCreateNestedOneWithoutOperationsInput", {
  isAbstract: true
})
export class OperationTypeCreateNestedOneWithoutOperationsInput {
  @TypeGraphQL.Field(_type => OperationTypeCreateWithoutOperationsInput, {
    nullable: true
  })
  create?: OperationTypeCreateWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeCreateOrConnectWithoutOperationsInput, {
    nullable: true
  })
  connectOrCreate?: OperationTypeCreateOrConnectWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: OperationTypeWhereUniqueInput | undefined;
}
