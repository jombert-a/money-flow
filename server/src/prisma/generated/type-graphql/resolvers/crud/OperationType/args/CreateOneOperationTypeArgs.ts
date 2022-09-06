import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationTypeCreateInput } from "../../../inputs/OperationTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOperationTypeArgs {
  @TypeGraphQL.Field(_type => OperationTypeCreateInput, {
    nullable: false
  })
  data!: OperationTypeCreateInput;
}
