import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Operation } from "../models/Operation";
import { OperationTypeCount } from "../resolvers/outputs/OperationTypeCount";

@TypeGraphQL.ObjectType("OperationType", {
  isAbstract: true
})
export class OperationType {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  postive!: boolean;

  operations?: Operation[];

  @TypeGraphQL.Field(_type => OperationTypeCount, {
    nullable: true
  })
  _count?: OperationTypeCount | null;
}
