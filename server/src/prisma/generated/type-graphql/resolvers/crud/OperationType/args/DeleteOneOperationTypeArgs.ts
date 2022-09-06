import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationTypeWhereUniqueInput } from "../../../inputs/OperationTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOperationTypeArgs {
  @TypeGraphQL.Field(_type => OperationTypeWhereUniqueInput, {
    nullable: false
  })
  where!: OperationTypeWhereUniqueInput;
}
