import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationCreateInput } from "../../../inputs/OperationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOperationArgs {
  @TypeGraphQL.Field(_type => OperationCreateInput, {
    nullable: false
  })
  data!: OperationCreateInput;
}
