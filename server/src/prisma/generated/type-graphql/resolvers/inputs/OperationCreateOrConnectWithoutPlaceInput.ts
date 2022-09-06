import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateWithoutPlaceInput } from "../inputs/OperationCreateWithoutPlaceInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationCreateOrConnectWithoutPlaceInput", {
  isAbstract: true
})
export class OperationCreateOrConnectWithoutPlaceInput {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationCreateWithoutPlaceInput, {
    nullable: false
  })
  create!: OperationCreateWithoutPlaceInput;
}
