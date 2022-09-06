import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateWithoutOperationTypeInput } from "../inputs/OperationCreateWithoutOperationTypeInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationCreateOrConnectWithoutOperationTypeInput", {
  isAbstract: true
})
export class OperationCreateOrConnectWithoutOperationTypeInput {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationCreateWithoutOperationTypeInput, {
    nullable: false
  })
  create!: OperationCreateWithoutOperationTypeInput;
}
