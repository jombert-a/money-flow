import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OperationTypeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OperationTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OperationTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OperationTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OperationTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OperationTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  postive?: BoolWithAggregatesFilter | undefined;
}
