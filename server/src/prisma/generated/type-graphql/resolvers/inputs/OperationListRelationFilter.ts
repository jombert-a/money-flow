import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationWhereInput } from "../inputs/OperationWhereInput";

@TypeGraphQL.InputType("OperationListRelationFilter", {
  isAbstract: true
})
export class OperationListRelationFilter {
  @TypeGraphQL.Field(_type => OperationWhereInput, {
    nullable: true
  })
  every?: OperationWhereInput | undefined;

  @TypeGraphQL.Field(_type => OperationWhereInput, {
    nullable: true
  })
  some?: OperationWhereInput | undefined;

  @TypeGraphQL.Field(_type => OperationWhereInput, {
    nullable: true
  })
  none?: OperationWhereInput | undefined;
}
