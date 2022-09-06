import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationAvgAggregate } from "../outputs/OperationAvgAggregate";
import { OperationCountAggregate } from "../outputs/OperationCountAggregate";
import { OperationMaxAggregate } from "../outputs/OperationMaxAggregate";
import { OperationMinAggregate } from "../outputs/OperationMinAggregate";
import { OperationSumAggregate } from "../outputs/OperationSumAggregate";

@TypeGraphQL.ObjectType("AggregateOperation", {
  isAbstract: true
})
export class AggregateOperation {
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
