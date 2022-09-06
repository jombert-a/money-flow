import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationTypeCreateInput } from "../../../inputs/OperationTypeCreateInput";
import { OperationTypeUpdateInput } from "../../../inputs/OperationTypeUpdateInput";
import { OperationTypeWhereUniqueInput } from "../../../inputs/OperationTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOperationTypeArgs {
  @TypeGraphQL.Field(_type => OperationTypeWhereUniqueInput, {
    nullable: false
  })
  where!: OperationTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationTypeCreateInput, {
    nullable: false
  })
  create!: OperationTypeCreateInput;

  @TypeGraphQL.Field(_type => OperationTypeUpdateInput, {
    nullable: false
  })
  update!: OperationTypeUpdateInput;
}
