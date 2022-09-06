import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationUpdateInput } from "../../../inputs/OperationUpdateInput";
import { OperationWhereUniqueInput } from "../../../inputs/OperationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOperationArgs {
  @TypeGraphQL.Field(_type => OperationUpdateInput, {
    nullable: false
  })
  data!: OperationUpdateInput;

  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;
}
