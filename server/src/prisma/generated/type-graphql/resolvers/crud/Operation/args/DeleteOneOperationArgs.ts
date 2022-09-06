import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationWhereUniqueInput } from "../../../inputs/OperationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOperationArgs {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;
}
