import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { OperationTypeRelationFilter } from "../inputs/OperationTypeRelationFilter";
import { PlaceRelationFilter } from "../inputs/PlaceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("OperationWhereInput", {
  isAbstract: true
})
export class OperationWhereInput {
  @TypeGraphQL.Field(_type => [OperationWhereInput], {
    nullable: true
  })
  AND?: OperationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationWhereInput], {
    nullable: true
  })
  OR?: OperationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationWhereInput], {
    nullable: true
  })
  NOT?: OperationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  operationTypeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => OperationTypeRelationFilter, {
    nullable: true
  })
  operationType?: OperationTypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  placeId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PlaceRelationFilter, {
    nullable: true
  })
  place?: PlaceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  comment?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  value?: FloatFilter | undefined;
}
