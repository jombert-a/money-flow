import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationOrderByRelationAggregateInput } from "../inputs/OperationOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OperationTypeOrderByWithRelationInput", {
  isAbstract: true
})
export class OperationTypeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OperationOrderByRelationAggregateInput, {
    nullable: true
  })
  operations?: OperationOrderByRelationAggregateInput | undefined;
}
