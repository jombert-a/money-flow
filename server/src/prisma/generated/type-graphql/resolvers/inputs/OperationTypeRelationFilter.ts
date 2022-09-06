import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationTypeWhereInput } from "../inputs/OperationTypeWhereInput";

@TypeGraphQL.InputType("OperationTypeRelationFilter", {
  isAbstract: true
})
export class OperationTypeRelationFilter {
  @TypeGraphQL.Field(_type => OperationTypeWhereInput, {
    nullable: true
  })
  is?: OperationTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeWhereInput, {
    nullable: true
  })
  isNot?: OperationTypeWhereInput | undefined;
}
