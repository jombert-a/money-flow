import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationAvgOrderByAggregateInput } from "../inputs/OperationAvgOrderByAggregateInput";
import { OperationCountOrderByAggregateInput } from "../inputs/OperationCountOrderByAggregateInput";
import { OperationMaxOrderByAggregateInput } from "../inputs/OperationMaxOrderByAggregateInput";
import { OperationMinOrderByAggregateInput } from "../inputs/OperationMinOrderByAggregateInput";
import { OperationSumOrderByAggregateInput } from "../inputs/OperationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OperationOrderByWithAggregationInput", {
  isAbstract: true
})
export class OperationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  operationTypeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  placeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OperationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OperationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OperationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OperationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OperationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OperationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OperationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OperationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OperationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OperationSumOrderByAggregateInput | undefined;
}
