import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationTypeUpdateInput } from "../../../inputs/OperationTypeUpdateInput";
import { OperationTypeWhereUniqueInput } from "../../../inputs/OperationTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOperationTypeArgs {
  @TypeGraphQL.Field(_type => OperationTypeUpdateInput, {
    nullable: false
  })
  data!: OperationTypeUpdateInput;

  @TypeGraphQL.Field(_type => OperationTypeWhereUniqueInput, {
    nullable: false
  })
  where!: OperationTypeWhereUniqueInput;
}
