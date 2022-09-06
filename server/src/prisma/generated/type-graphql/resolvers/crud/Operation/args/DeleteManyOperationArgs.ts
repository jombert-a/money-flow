import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationWhereInput } from "../../../inputs/OperationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOperationArgs {
  @TypeGraphQL.Field(_type => OperationWhereInput, {
    nullable: true
  })
  where?: OperationWhereInput | undefined;
}
