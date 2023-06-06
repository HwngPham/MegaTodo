/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Health = {
  __typename?: 'Health';
  status: Scalars['String']['output'];
};

export type RootQuery = {
  __typename?: 'RootQuery';
  allTodo: Array<Todo>;
  health: Health;
};

export type Todo = {
  __typename?: 'Todo';
  content: Scalars['String']['output'];
  isDone: Scalars['Boolean']['output'];
};

export type TodoMutation = {
  __typename?: 'TodoMutation';
  createTodo: Todo;
  deleteTodo: Todo;
  updateTodo: Todo;
};


export type TodoMutationCreateTodoArgs = {
  content: Scalars['String']['input'];
  isDone?: Scalars['Boolean']['input'];
};


export type TodoMutationDeleteTodoArgs = {
  content: Scalars['String']['input'];
};


export type TodoMutationUpdateTodoArgs = {
  content: Scalars['String']['input'];
  findByContent: Scalars['String']['input'];
  isDone?: Scalars['Boolean']['input'];
};

export type AllTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodoQuery = { __typename?: 'RootQuery', allTodo: Array<{ __typename?: 'Todo', content: string, isDone: boolean }> };


export const AllTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allTodo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTodo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isDone"}}]}}]}}]} as unknown as DocumentNode<AllTodoQuery, AllTodoQueryVariables>;