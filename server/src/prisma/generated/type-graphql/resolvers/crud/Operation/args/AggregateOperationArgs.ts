import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationOrderByWithRelationInput } from "../../../inputs/OperationOrderByWithRelationInput";
import { OperationWhereInput } from "../../../inputs/OperationWhereInput";
import { OperationWhereUniqueInput } from "../../../inputs/OperationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOperationArgs {
  @TypeGraphQL.Field(_type => OperationWhereInput, {
    nullable: true
  })
  where?: OperationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OperationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OperationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: true
  })
  cursor?: OperationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
