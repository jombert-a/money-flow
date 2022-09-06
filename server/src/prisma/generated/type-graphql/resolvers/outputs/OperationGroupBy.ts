import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationAvgAggregate } from "../outputs/OperationAvgAggregate";
import { OperationCountAggregate } from "../outputs/OperationCountAggregate";
import { OperationMaxAggregate } from "../outputs/OperationMaxAggregate";
import { OperationMinAggregate } from "../outputs/OperationMinAggregate";
import { OperationSumAggregate } from "../outputs/OperationSumAggregate";

@TypeGraphQL.ObjectType("OperationGroupBy", {
  isAbstract: true
})
export class OperationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  operationTypeId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => OperationCountAggregate, {
    nullable: true
  })
  _count!: OperationCountAggregate | null;

  @TypeGraphQL.Field(_type => OperationAvgAggregate, {
    nullable: true
  })
  _avg!: OperationAvgAggregate | null;

  @TypeGraphQL.Field(_type => OperationSumAggregate, {
    nullable: true
  })
  _sum!: OperationSumAggregate | null;

  @TypeGraphQL.Field(_type => OperationMinAggregate, {
    nullable: true
  })
  _min!: OperationMinAggregate | null;

  @TypeGraphQL.Field(_type => OperationMaxAggregate, {
    nullable: true
  })
  _max!: OperationMaxAggregate | null;
}
