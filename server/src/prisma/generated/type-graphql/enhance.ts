import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Place: crudResolvers.PlaceCrudResolver,
  OperationType: crudResolvers.OperationTypeCrudResolver,
  Operation: crudResolvers.OperationCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Place: {
    aggregatePlace: actionResolvers.AggregatePlaceResolver,
    createManyPlace: actionResolvers.CreateManyPlaceResolver,
    createOnePlace: actionResolvers.CreateOnePlaceResolver,
    deleteManyPlace: actionResolvers.DeleteManyPlaceResolver,
    deleteOnePlace: actionResolvers.DeleteOnePlaceResolver,
    findFirstPlace: actionResolvers.FindFirstPlaceResolver,
    places: actionResolvers.FindManyPlaceResolver,
    place: actionResolvers.FindUniquePlaceResolver,
    groupByPlace: actionResolvers.GroupByPlaceResolver,
    updateManyPlace: actionResolvers.UpdateManyPlaceResolver,
    updateOnePlace: actionResolvers.UpdateOnePlaceResolver,
    upsertOnePlace: actionResolvers.UpsertOnePlaceResolver
  },
  OperationType: {
    aggregateOperationType: actionResolvers.AggregateOperationTypeResolver,
    createManyOperationType: actionResolvers.CreateManyOperationTypeResolver,
    createOneOperationType: actionResolvers.CreateOneOperationTypeResolver,
    deleteManyOperationType: actionResolvers.DeleteManyOperationTypeResolver,
    deleteOneOperationType: actionResolvers.DeleteOneOperationTypeResolver,
    findFirstOperationType: actionResolvers.FindFirstOperationTypeResolver,
    operationTypes: actionResolvers.FindManyOperationTypeResolver,
    operationType: actionResolvers.FindUniqueOperationTypeResolver,
    groupByOperationType: actionResolvers.GroupByOperationTypeResolver,
    updateManyOperationType: actionResolvers.UpdateManyOperationTypeResolver,
    updateOneOperationType: actionResolvers.UpdateOneOperationTypeResolver,
    upsertOneOperationType: actionResolvers.UpsertOneOperationTypeResolver
  },
  Operation: {
    aggregateOperation: actionResolvers.AggregateOperationResolver,
    createManyOperation: actionResolvers.CreateManyOperationResolver,
    createOneOperation: actionResolvers.CreateOneOperationResolver,
    deleteManyOperation: actionResolvers.DeleteManyOperationResolver,
    deleteOneOperation: actionResolvers.DeleteOneOperationResolver,
    findFirstOperation: actionResolvers.FindFirstOperationResolver,
    operations: actionResolvers.FindManyOperationResolver,
    operation: actionResolvers.FindUniqueOperationResolver,
    groupByOperation: actionResolvers.GroupByOperationResolver,
    updateManyOperation: actionResolvers.UpdateManyOperationResolver,
    updateOneOperation: actionResolvers.UpdateOneOperationResolver,
    upsertOneOperation: actionResolvers.UpsertOneOperationResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Place: ["aggregatePlace", "createManyPlace", "createOnePlace", "deleteManyPlace", "deleteOnePlace", "findFirstPlace", "places", "place", "groupByPlace", "updateManyPlace", "updateOnePlace", "upsertOnePlace"],
  OperationType: ["aggregateOperationType", "createManyOperationType", "createOneOperationType", "deleteManyOperationType", "deleteOneOperationType", "findFirstOperationType", "operationTypes", "operationType", "groupByOperationType", "updateManyOperationType", "updateOneOperationType", "upsertOneOperationType"],
  Operation: ["aggregateOperation", "createManyOperation", "createOneOperation", "deleteManyOperation", "deleteOneOperation", "findFirstOperation", "operations", "operation", "groupByOperation", "updateManyOperation", "updateOneOperation", "upsertOneOperation"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregatePlaceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPlaceArgs: ["data", "skipDuplicates"],
  CreateOnePlaceArgs: ["data"],
  DeleteManyPlaceArgs: ["where"],
  DeleteOnePlaceArgs: ["where"],
  FindFirstPlaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePlaceArgs: ["where"],
  GroupByPlaceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPlaceArgs: ["data", "where"],
  UpdateOnePlaceArgs: ["data", "where"],
  UpsertOnePlaceArgs: ["where", "create", "update"],
  AggregateOperationTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOperationTypeArgs: ["data", "skipDuplicates"],
  CreateOneOperationTypeArgs: ["data"],
  DeleteManyOperationTypeArgs: ["where"],
  DeleteOneOperationTypeArgs: ["where"],
  FindFirstOperationTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOperationTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOperationTypeArgs: ["where"],
  GroupByOperationTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOperationTypeArgs: ["data", "where"],
  UpdateOneOperationTypeArgs: ["data", "where"],
  UpsertOneOperationTypeArgs: ["where", "create", "update"],
  AggregateOperationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOperationArgs: ["data", "skipDuplicates"],
  CreateOneOperationArgs: ["data"],
  DeleteManyOperationArgs: ["where"],
  DeleteOneOperationArgs: ["where"],
  FindFirstOperationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOperationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOperationArgs: ["where"],
  GroupByOperationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOperationArgs: ["data", "where"],
  UpdateOneOperationArgs: ["data", "where"],
  UpsertOneOperationArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Place: relationResolvers.PlaceRelationsResolver,
  OperationType: relationResolvers.OperationTypeRelationsResolver,
  Operation: relationResolvers.OperationRelationsResolver
};
const relationResolversInfo = {
  User: ["operations"],
  Place: ["Operations"],
  OperationType: ["operations"],
  Operation: ["user", "operationType", "place"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email"],
  Place: ["id", "name"],
  OperationType: ["id", "name", "postive"],
  Operation: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "email", "_count", "_min", "_max"],
  AggregatePlace: ["_count", "_min", "_max"],
  PlaceGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregateOperationType: ["_count", "_min", "_max"],
  OperationTypeGroupBy: ["id", "name", "postive", "_count", "_min", "_max"],
  AggregateOperation: ["_count", "_avg", "_sum", "_min", "_max"],
  OperationGroupBy: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["operations"],
  UserCountAggregate: ["id", "email", "_all"],
  UserMinAggregate: ["id", "email"],
  UserMaxAggregate: ["id", "email"],
  PlaceCount: ["Operations"],
  PlaceCountAggregate: ["id", "name", "_all"],
  PlaceMinAggregate: ["id", "name"],
  PlaceMaxAggregate: ["id", "name"],
  OperationTypeCount: ["operations"],
  OperationTypeCountAggregate: ["id", "name", "postive", "_all"],
  OperationTypeMinAggregate: ["id", "name", "postive"],
  OperationTypeMaxAggregate: ["id", "name", "postive"],
  OperationCountAggregate: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value", "_all"],
  OperationAvgAggregate: ["value"],
  OperationSumAggregate: ["value"],
  OperationMinAggregate: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value"],
  OperationMaxAggregate: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "operations"],
  UserOrderByWithRelationInput: ["id", "email", "operations"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email"],
  PlaceWhereInput: ["AND", "OR", "NOT", "id", "name", "Operations"],
  PlaceOrderByWithRelationInput: ["id", "name", "Operations"],
  PlaceWhereUniqueInput: ["id"],
  PlaceOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  PlaceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  OperationTypeWhereInput: ["AND", "OR", "NOT", "id", "name", "postive", "operations"],
  OperationTypeOrderByWithRelationInput: ["id", "name", "postive", "operations"],
  OperationTypeWhereUniqueInput: ["id", "name"],
  OperationTypeOrderByWithAggregationInput: ["id", "name", "postive", "_count", "_max", "_min"],
  OperationTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "postive"],
  OperationWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "operationTypeId", "operationType", "placeId", "place", "comment", "date", "value"],
  OperationOrderByWithRelationInput: ["id", "userId", "user", "operationTypeId", "operationType", "placeId", "place", "comment", "date", "value"],
  OperationWhereUniqueInput: ["id"],
  OperationOrderByWithAggregationInput: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value", "_count", "_avg", "_max", "_min", "_sum"],
  OperationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "operationTypeId", "placeId", "comment", "date", "value"],
  UserCreateInput: ["id", "email", "operations"],
  UserUpdateInput: ["id", "email", "operations"],
  UserCreateManyInput: ["id", "email"],
  UserUpdateManyMutationInput: ["id", "email"],
  PlaceCreateInput: ["id", "name", "Operations"],
  PlaceUpdateInput: ["id", "name", "Operations"],
  PlaceCreateManyInput: ["id", "name"],
  PlaceUpdateManyMutationInput: ["id", "name"],
  OperationTypeCreateInput: ["id", "name", "postive", "operations"],
  OperationTypeUpdateInput: ["id", "name", "postive", "operations"],
  OperationTypeCreateManyInput: ["id", "name", "postive"],
  OperationTypeUpdateManyMutationInput: ["id", "name", "postive"],
  OperationCreateInput: ["id", "user", "operationType", "place", "comment", "date", "value"],
  OperationUpdateInput: ["id", "user", "operationType", "place", "comment", "date", "value"],
  OperationCreateManyInput: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value"],
  OperationUpdateManyMutationInput: ["id", "comment", "date", "value"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  OperationListRelationFilter: ["every", "some", "none"],
  OperationOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email"],
  UserMaxOrderByAggregateInput: ["id", "email"],
  UserMinOrderByAggregateInput: ["id", "email"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  PlaceCountOrderByAggregateInput: ["id", "name"],
  PlaceMaxOrderByAggregateInput: ["id", "name"],
  PlaceMinOrderByAggregateInput: ["id", "name"],
  BoolFilter: ["equals", "not"],
  OperationTypeCountOrderByAggregateInput: ["id", "name", "postive"],
  OperationTypeMaxOrderByAggregateInput: ["id", "name", "postive"],
  OperationTypeMinOrderByAggregateInput: ["id", "name", "postive"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  OperationTypeRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  PlaceRelationFilter: ["is", "isNot"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  OperationCountOrderByAggregateInput: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value"],
  OperationAvgOrderByAggregateInput: ["value"],
  OperationMaxOrderByAggregateInput: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value"],
  OperationMinOrderByAggregateInput: ["id", "userId", "operationTypeId", "placeId", "comment", "date", "value"],
  OperationSumOrderByAggregateInput: ["value"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  OperationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  OperationUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OperationCreateNestedManyWithoutPlaceInput: ["create", "connectOrCreate", "createMany", "connect"],
  OperationUpdateManyWithoutPlaceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OperationCreateNestedManyWithoutOperationTypeInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  OperationUpdateManyWithoutOperationTypeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutOperationsInput: ["create", "connectOrCreate", "connect"],
  OperationTypeCreateNestedOneWithoutOperationsInput: ["create", "connectOrCreate", "connect"],
  PlaceCreateNestedOneWithoutOperationsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutOperationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OperationTypeUpdateOneRequiredWithoutOperationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PlaceUpdateOneWithoutOperationsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  OperationCreateWithoutUserInput: ["id", "operationType", "place", "comment", "date", "value"],
  OperationCreateOrConnectWithoutUserInput: ["where", "create"],
  OperationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  OperationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  OperationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  OperationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  OperationScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "operationTypeId", "placeId", "comment", "date", "value"],
  OperationCreateWithoutPlaceInput: ["id", "user", "operationType", "comment", "date", "value"],
  OperationCreateOrConnectWithoutPlaceInput: ["where", "create"],
  OperationCreateManyPlaceInputEnvelope: ["data", "skipDuplicates"],
  OperationUpsertWithWhereUniqueWithoutPlaceInput: ["where", "update", "create"],
  OperationUpdateWithWhereUniqueWithoutPlaceInput: ["where", "data"],
  OperationUpdateManyWithWhereWithoutPlaceInput: ["where", "data"],
  OperationCreateWithoutOperationTypeInput: ["id", "user", "place", "comment", "date", "value"],
  OperationCreateOrConnectWithoutOperationTypeInput: ["where", "create"],
  OperationCreateManyOperationTypeInputEnvelope: ["data", "skipDuplicates"],
  OperationUpsertWithWhereUniqueWithoutOperationTypeInput: ["where", "update", "create"],
  OperationUpdateWithWhereUniqueWithoutOperationTypeInput: ["where", "data"],
  OperationUpdateManyWithWhereWithoutOperationTypeInput: ["where", "data"],
  UserCreateWithoutOperationsInput: ["id", "email"],
  UserCreateOrConnectWithoutOperationsInput: ["where", "create"],
  OperationTypeCreateWithoutOperationsInput: ["id", "name", "postive"],
  OperationTypeCreateOrConnectWithoutOperationsInput: ["where", "create"],
  PlaceCreateWithoutOperationsInput: ["id", "name"],
  PlaceCreateOrConnectWithoutOperationsInput: ["where", "create"],
  UserUpsertWithoutOperationsInput: ["update", "create"],
  UserUpdateWithoutOperationsInput: ["id", "email"],
  OperationTypeUpsertWithoutOperationsInput: ["update", "create"],
  OperationTypeUpdateWithoutOperationsInput: ["id", "name", "postive"],
  PlaceUpsertWithoutOperationsInput: ["update", "create"],
  PlaceUpdateWithoutOperationsInput: ["id", "name"],
  OperationCreateManyUserInput: ["id", "operationTypeId", "placeId", "comment", "date", "value"],
  OperationUpdateWithoutUserInput: ["id", "operationType", "place", "comment", "date", "value"],
  OperationCreateManyPlaceInput: ["id", "userId", "operationTypeId", "comment", "date", "value"],
  OperationUpdateWithoutPlaceInput: ["id", "user", "operationType", "comment", "date", "value"],
  OperationCreateManyOperationTypeInput: ["id", "userId", "placeId", "comment", "date", "value"],
  OperationUpdateWithoutOperationTypeInput: ["id", "user", "place", "comment", "date", "value"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

