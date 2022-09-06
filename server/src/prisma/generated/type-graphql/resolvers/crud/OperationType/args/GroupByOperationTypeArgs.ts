import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationTypeOrderByWithAggregationInput } from "../../../inputs/OperationTypeOrderByWithAggregationInput";
import { OperationTypeScalarWhereWithAggregatesInput } from "../../../inputs/OperationTypeScalarWhereWithAggregatesInput";
import { OperationTypeWhereInput } from "../../../inputs/OperationTypeWhereInput";
import { OperationTypeScalarFieldEnum } from "../../../../enums/OperationTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOperationTypeArgs {
  @TypeGraphQL.Field(_type => OperationTypeWhereInput, {
    nullable: true
  })
  where?: OperationTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OperationTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OperationTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "postive">;

  @TypeGraphQL.Field(_type => OperationTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OperationTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
