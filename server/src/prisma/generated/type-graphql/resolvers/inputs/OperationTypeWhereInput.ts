import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { OperationListRelationFilter } from "../inputs/OperationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OperationTypeWhereInput", {
  isAbstract: true
})
export class OperationTypeWhereInput {
  @TypeGraphQL.Field(_type => [OperationTypeWhereInput], {
    nullable: true
  })
  AND?: OperationTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationTypeWhereInput], {
    nullable: true
  })
  OR?: OperationTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationTypeWhereInput], {
    nullable: true
  })
  NOT?: OperationTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  postive?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => OperationListRelationFilter, {
    nullable: true
  })
  operations?: OperationListRelationFilter | undefined;
}
