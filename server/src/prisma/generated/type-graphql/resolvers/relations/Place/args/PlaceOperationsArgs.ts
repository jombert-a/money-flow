import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationOrderByWithRelationInput } from "../../../inputs/OperationOrderByWithRelationInput";
import { OperationWhereInput } from "../../../inputs/OperationWhereInput";
import { OperationWhereUniqueInput } from "../../../inputs/OperationWhereUniqueInput";
import { OperationScalarFieldEnum } from "../../../../enums/OperationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PlaceOperationsArgs {
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

  @TypeGraphQL.Field(_type => [OperationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "operationTypeId" | "placeId" | "comment" | "date" | "value"> | undefined;
}
