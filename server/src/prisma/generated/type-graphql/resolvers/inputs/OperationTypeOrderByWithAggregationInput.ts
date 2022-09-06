import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationTypeCountOrderByAggregateInput } from "../inputs/OperationTypeCountOrderByAggregateInput";
import { OperationTypeMaxOrderByAggregateInput } from "../inputs/OperationTypeMaxOrderByAggregateInput";
import { OperationTypeMinOrderByAggregateInput } from "../inputs/OperationTypeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OperationTypeOrderByWithAggregationInput", {
  isAbstract: true
})
export class OperationTypeOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => OperationTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OperationTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OperationTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OperationTypeMinOrderByAggregateInput | undefined;
}
