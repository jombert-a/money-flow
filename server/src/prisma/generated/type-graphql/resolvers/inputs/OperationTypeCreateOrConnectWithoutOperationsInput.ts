import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationTypeCreateWithoutOperationsInput } from "../inputs/OperationTypeCreateWithoutOperationsInput";
import { OperationTypeWhereUniqueInput } from "../inputs/OperationTypeWhereUniqueInput";

@TypeGraphQL.InputType("OperationTypeCreateOrConnectWithoutOperationsInput", {
  isAbstract: true
})
export class OperationTypeCreateOrConnectWithoutOperationsInput {
  @TypeGraphQL.Field(_type => OperationTypeWhereUniqueInput, {
    nullable: false
  })
  where!: OperationTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationTypeCreateWithoutOperationsInput, {
    nullable: false
  })
  create!: OperationTypeCreateWithoutOperationsInput;
}
