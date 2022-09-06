import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationTypeOrderByWithRelationInput } from "../../../inputs/OperationTypeOrderByWithRelationInput";
import { OperationTypeWhereInput } from "../../../inputs/OperationTypeWhereInput";
import { OperationTypeWhereUniqueInput } from "../../../inputs/OperationTypeWhereUniqueInput";
import { OperationTypeScalarFieldEnum } from "../../../../enums/OperationTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOperationTypeArgs {
  @TypeGraphQL.Field(_type => OperationTypeWhereInput, {
    nullable: true
  })
  where?: OperationTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OperationTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OperationTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OperationTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: OperationTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OperationTypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "postive"> | undefined;
}
