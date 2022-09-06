import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationTypeUpdateManyMutationInput } from "../../../inputs/OperationTypeUpdateManyMutationInput";
import { OperationTypeWhereInput } from "../../../inputs/OperationTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOperationTypeArgs {
  @TypeGraphQL.Field(_type => OperationTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: OperationTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OperationTypeWhereInput, {
    nullable: true
  })
  where?: OperationTypeWhereInput | undefined;
}
