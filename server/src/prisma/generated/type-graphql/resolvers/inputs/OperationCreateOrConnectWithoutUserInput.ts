import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateWithoutUserInput } from "../inputs/OperationCreateWithoutUserInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class OperationCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationCreateWithoutUserInput, {
    nullable: false
  })
  create!: OperationCreateWithoutUserInput;
}
