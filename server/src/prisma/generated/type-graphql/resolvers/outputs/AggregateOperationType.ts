import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationTypeCountAggregate } from "../outputs/OperationTypeCountAggregate";
import { OperationTypeMaxAggregate } from "../outputs/OperationTypeMaxAggregate";
import { OperationTypeMinAggregate } from "../outputs/OperationTypeMinAggregate";

@TypeGraphQL.ObjectType("AggregateOperationType", {
  isAbstract: true
})
export class AggregateOperationType {
  @TypeGraphQL.Field(_type => OperationTypeCountAggregate, {
    nullable: true
  })
  _count!: OperationTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => OperationTypeMinAggregate, {
    nullable: true
  })
  _min!: OperationTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => OperationTypeMaxAggregate, {
    nullable: true
  })
  _max!: OperationTypeMaxAggregate | null;
}
