import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { OperationType } from "../models/OperationType";
import { Place } from "../models/Place";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Operation", {
  isAbstract: true
})
export class Operation {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  operationTypeId!: string;

  operationType?: OperationType;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeId?: string | null;

  place?: Place | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  value!: number;
}
