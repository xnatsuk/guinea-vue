import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
}

export interface Mutation {
  __typename?: 'Mutation'
  createPet?: Maybe<IPet>
  deletePet?: Maybe<IPet>
  updatePet?: Maybe<IPet>
}

export interface MutationCreatePetArgs {
  name: Scalars['String']
}

export interface MutationDeletePetArgs {
  name: Scalars['String']
}

export interface MutationUpdatePetArgs {
  name: Scalars['String']
  updatePet?: InputMaybe<UpdatePet>
}

export interface IPet {
  birthday?: Maybe<Scalars['Date']>
  deathDate?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  favoriteActivity?: Maybe<Scalars['String']>
  favoriteFood?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
  name: Scalars['String']
  nickname?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  species?: Maybe<Scalars['String']>
}

export interface Query {
  __typename?: 'Query'
  findPet?: Maybe<IPet>
  getPets: Array<IPet>
}

export interface QueryFindPetArgs {
  name: Scalars['String']
}

export interface UpdatePet {
  birthday?: InputMaybe<Scalars['Date']>
  deathDate?: InputMaybe<Scalars['Date']>
  description?: InputMaybe<Scalars['String']>
  favoriteActivity?: InputMaybe<Scalars['String']>
  favoriteFood?: InputMaybe<Scalars['String']>
  gender?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  nickname?: InputMaybe<Scalars['String']>
  photo?: InputMaybe<Scalars['String']>
  species?: InputMaybe<Scalars['String']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export interface ResolverWithResolve<TResult, TParent, TContext, TArgs> {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export interface ResolversTypes {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Date: ResolverTypeWrapper<Scalars['Date']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Mutation: ResolverTypeWrapper<{}>
  IPet: ResolverTypeWrapper<IPet>
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  UpdatePet: UpdatePet
}

/** Mapping between all available schema types and the resolvers parents */
export interface ResolversParentTypes {
  Boolean: Scalars['Boolean']
  Date: Scalars['Date']
  ID: Scalars['ID']
  Mutation: {}
  IPet: IPet
  Query: {}
  String: Scalars['String']
  UpdatePet: UpdatePet
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> {
  createPet?: Resolver<Maybe<ResolversTypes['IPet']>, ParentType, ContextType, RequireFields<MutationCreatePetArgs, 'name'>>
  deletePet?: Resolver<Maybe<ResolversTypes['IPet']>, ParentType, ContextType, RequireFields<MutationDeletePetArgs, 'name'>>
  updatePet?: Resolver<Maybe<ResolversTypes['IPet']>, ParentType, ContextType, RequireFields<MutationUpdatePetArgs, 'name'>>
}

export interface PetResolvers<ContextType = any, ParentType extends ResolversParentTypes['IPet'] = ResolversParentTypes['IPet']> {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  birthday?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  deathDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  favoriteActivity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  favoriteFood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  species?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> {
  findPet?: Resolver<Maybe<ResolversTypes['IPet']>, ParentType, ContextType, RequireFields<QueryFindPetArgs, 'name'>>
  getPets?: Resolver<Array<ResolversTypes['IPet']>, ParentType, ContextType>
}

export interface Resolvers<ContextType = any> {
  Date?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  IPet?: PetResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}

