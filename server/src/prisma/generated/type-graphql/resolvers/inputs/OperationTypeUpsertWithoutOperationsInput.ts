import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationTypeCreateWithoutOperationsInput } from "../inputs/OperationTypeCreateWithoutOperationsInput";
import { OperationTypeUpdateWithoutOperationsInput } from "../inputs/OperationTypeUpdateWithoutOperationsInput";

@TypeGraphQL.InputType("OperationTypeUpsertWithoutOperationsInput", {
  isAbstract: true
})
export class OperationTypeUpsertWithoutOperationsInput {
  @TypeGraphQL.Field(_type => OperationTypeUpdateWithoutOperationsInput, {
    nullable: false
  })
  update!: OperationTypeUpdateWithoutOperationsInput;

  @TypeGraphQL.Field(_type => OperationTypeCreateWithoutOperationsInput, {
    nullable: false
  })
  create!: OperationTypeCreateWithoutOperationsInput;
}
