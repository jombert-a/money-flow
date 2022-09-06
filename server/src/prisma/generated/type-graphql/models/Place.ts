import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Operation } from "../models/Operation";
import { PlaceCount } from "../resolvers/outputs/PlaceCount";

@TypeGraphQL.ObjectType("Place", {
  isAbstract: true
})
export class Place {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  Operations?: Operation[];

  @TypeGraphQL.Field(_type => PlaceCount, {
    nullable: true
  })
  _count?: PlaceCount | null;
}
