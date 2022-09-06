import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCountAggregate } from "../outputs/PlaceCountAggregate";
import { PlaceMaxAggregate } from "../outputs/PlaceMaxAggregate";
import { PlaceMinAggregate } from "../outputs/PlaceMinAggregate";

@TypeGraphQL.ObjectType("AggregatePlace", {
  isAbstract: true
})
export class AggregatePlace {
  @TypeGraphQL.Field(_type => PlaceCountAggregate, {
    nullable: true
  })
  _count!: PlaceCountAggregate | null;

  @TypeGraphQL.Field(_type => PlaceMinAggregate, {
    nullable: true
  })
  _min!: PlaceMinAggregate | null;

  @TypeGraphQL.Field(_type => PlaceMaxAggregate, {
    nullable: true
  })
  _max!: PlaceMaxAggregate | null;
}
