import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationOrderByWithAggregationInput } from "../../../inputs/OperationOrderByWithAggregationInput";
import { OperationScalarWhereWithAggregatesInput } from "../../../inputs/OperationScalarWhereWithAggregatesInput";
import { OperationWhereInput } from "../../../inputs/OperationWhereInput";
import { OperationScalarFieldEnum } from "../../../../enums/OperationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOperationArgs {
  @TypeGraphQL.Field(_type => OperationWhereInput, {
    nullable: true
  })
  where?: OperationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OperationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OperationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "operationTypeId" | "placeId" | "comment" | "date" | "value">;

  @TypeGraphQL.Field(_type => OperationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OperationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
