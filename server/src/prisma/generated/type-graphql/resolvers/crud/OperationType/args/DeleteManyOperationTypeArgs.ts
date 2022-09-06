import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationTypeWhereInput } from "../../../inputs/OperationTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOperationTypeArgs {
  @TypeGraphQL.Field(_type => OperationTypeWhereInput, {
    nullable: true
  })
  where?: OperationTypeWhereInput | undefined;
}
