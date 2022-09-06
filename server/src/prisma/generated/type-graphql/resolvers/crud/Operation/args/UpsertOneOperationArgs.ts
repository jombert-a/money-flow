import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationCreateInput } from "../../../inputs/OperationCreateInput";
import { OperationUpdateInput } from "../../../inputs/OperationUpdateInput";
import { OperationWhereUniqueInput } from "../../../inputs/OperationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOperationArgs {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationCreateInput, {
    nullable: false
  })
  create!: OperationCreateInput;

  @TypeGraphQL.Field(_type => OperationUpdateInput, {
    nullable: false
  })
  update!: OperationUpdateInput;
}
