import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationUpdateManyMutationInput } from "../../../inputs/OperationUpdateManyMutationInput";
import { OperationWhereInput } from "../../../inputs/OperationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOperationArgs {
  @TypeGraphQL.Field(_type => OperationUpdateManyMutationInput, {
    nullable: false
  })
  data!: OperationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OperationWhereInput, {
    nullable: true
  })
  where?: OperationWhereInput | undefined;
}
