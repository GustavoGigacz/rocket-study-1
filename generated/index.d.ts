
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Deliveryman
 * 
 */
export type Deliveryman = $Result.DefaultSelection<Prisma.$DeliverymanPayload>
/**
 * Model Clients
 * 
 */
export type Clients = $Result.DefaultSelection<Prisma.$ClientsPayload>
/**
 * Model Deliveries
 * 
 */
export type Deliveries = $Result.DefaultSelection<Prisma.$DeliveriesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Deliverymen
 * const deliverymen = await prisma.deliveryman.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Deliverymen
   * const deliverymen = await prisma.deliveryman.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.deliveryman`: Exposes CRUD operations for the **Deliveryman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliverymen
    * const deliverymen = await prisma.deliveryman.findMany()
    * ```
    */
  get deliveryman(): Prisma.DeliverymanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **Clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.ClientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveries`: Exposes CRUD operations for the **Deliveries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.deliveries.findMany()
    * ```
    */
  get deliveries(): Prisma.DeliveriesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Deliveryman: 'Deliveryman',
    Clients: 'Clients',
    Deliveries: 'Deliveries'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "deliveryman" | "clients" | "deliveries"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Deliveryman: {
        payload: Prisma.$DeliverymanPayload<ExtArgs>
        fields: Prisma.DeliverymanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliverymanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliverymanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload>
          }
          findFirst: {
            args: Prisma.DeliverymanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliverymanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload>
          }
          findMany: {
            args: Prisma.DeliverymanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload>[]
          }
          create: {
            args: Prisma.DeliverymanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload>
          }
          createMany: {
            args: Prisma.DeliverymanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliverymanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload>[]
          }
          delete: {
            args: Prisma.DeliverymanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload>
          }
          update: {
            args: Prisma.DeliverymanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload>
          }
          deleteMany: {
            args: Prisma.DeliverymanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliverymanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliverymanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload>[]
          }
          upsert: {
            args: Prisma.DeliverymanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverymanPayload>
          }
          aggregate: {
            args: Prisma.DeliverymanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryman>
          }
          groupBy: {
            args: Prisma.DeliverymanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliverymanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliverymanCountArgs<ExtArgs>
            result: $Utils.Optional<DeliverymanCountAggregateOutputType> | number
          }
        }
      }
      Clients: {
        payload: Prisma.$ClientsPayload<ExtArgs>
        fields: Prisma.ClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findFirst: {
            args: Prisma.ClientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findMany: {
            args: Prisma.ClientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          create: {
            args: Prisma.ClientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          createMany: {
            args: Prisma.ClientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          delete: {
            args: Prisma.ClientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          update: {
            args: Prisma.ClientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          upsert: {
            args: Prisma.ClientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.ClientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      Deliveries: {
        payload: Prisma.$DeliveriesPayload<ExtArgs>
        fields: Prisma.DeliveriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          findFirst: {
            args: Prisma.DeliveriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          findMany: {
            args: Prisma.DeliveriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          create: {
            args: Prisma.DeliveriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          createMany: {
            args: Prisma.DeliveriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          delete: {
            args: Prisma.DeliveriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          update: {
            args: Prisma.DeliveriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          deleteMany: {
            args: Prisma.DeliveriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          upsert: {
            args: Prisma.DeliveriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          aggregate: {
            args: Prisma.DeliveriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveries>
          }
          groupBy: {
            args: Prisma.DeliveriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveriesCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    deliveryman?: DeliverymanOmit
    clients?: ClientsOmit
    deliveries?: DeliveriesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DeliverymanCountOutputType
   */

  export type DeliverymanCountOutputType = {
    deliveries: number
  }

  export type DeliverymanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | DeliverymanCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * DeliverymanCountOutputType without action
   */
  export type DeliverymanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliverymanCountOutputType
     */
    select?: DeliverymanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliverymanCountOutputType without action
   */
  export type DeliverymanCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
  }


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    deliveries: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | ClientsCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Deliveryman
   */

  export type AggregateDeliveryman = {
    _count: DeliverymanCountAggregateOutputType | null
    _min: DeliverymanMinAggregateOutputType | null
    _max: DeliverymanMaxAggregateOutputType | null
  }

  export type DeliverymanMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type DeliverymanMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type DeliverymanCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type DeliverymanMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type DeliverymanMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type DeliverymanCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type DeliverymanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveryman to aggregate.
     */
    where?: DeliverymanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverymen to fetch.
     */
    orderBy?: DeliverymanOrderByWithRelationInput | DeliverymanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliverymanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverymen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverymen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliverymen
    **/
    _count?: true | DeliverymanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliverymanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliverymanMaxAggregateInputType
  }

  export type GetDeliverymanAggregateType<T extends DeliverymanAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryman[P]>
      : GetScalarType<T[P], AggregateDeliveryman[P]>
  }




  export type DeliverymanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliverymanWhereInput
    orderBy?: DeliverymanOrderByWithAggregationInput | DeliverymanOrderByWithAggregationInput[]
    by: DeliverymanScalarFieldEnum[] | DeliverymanScalarFieldEnum
    having?: DeliverymanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliverymanCountAggregateInputType | true
    _min?: DeliverymanMinAggregateInputType
    _max?: DeliverymanMaxAggregateInputType
  }

  export type DeliverymanGroupByOutputType = {
    id: string
    username: string
    password: string
    _count: DeliverymanCountAggregateOutputType | null
    _min: DeliverymanMinAggregateOutputType | null
    _max: DeliverymanMaxAggregateOutputType | null
  }

  type GetDeliverymanGroupByPayload<T extends DeliverymanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliverymanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliverymanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliverymanGroupByOutputType[P]>
            : GetScalarType<T[P], DeliverymanGroupByOutputType[P]>
        }
      >
    >


  export type DeliverymanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    deliveries?: boolean | Deliveryman$deliveriesArgs<ExtArgs>
    _count?: boolean | DeliverymanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryman"]>

  export type DeliverymanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["deliveryman"]>

  export type DeliverymanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["deliveryman"]>

  export type DeliverymanSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type DeliverymanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["deliveryman"]>
  export type DeliverymanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | Deliveryman$deliveriesArgs<ExtArgs>
    _count?: boolean | DeliverymanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliverymanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeliverymanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeliverymanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deliveryman"
    objects: {
      deliveries: Prisma.$DeliveriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
    }, ExtArgs["result"]["deliveryman"]>
    composites: {}
  }

  type DeliverymanGetPayload<S extends boolean | null | undefined | DeliverymanDefaultArgs> = $Result.GetResult<Prisma.$DeliverymanPayload, S>

  type DeliverymanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliverymanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliverymanCountAggregateInputType | true
    }

  export interface DeliverymanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deliveryman'], meta: { name: 'Deliveryman' } }
    /**
     * Find zero or one Deliveryman that matches the filter.
     * @param {DeliverymanFindUniqueArgs} args - Arguments to find a Deliveryman
     * @example
     * // Get one Deliveryman
     * const deliveryman = await prisma.deliveryman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliverymanFindUniqueArgs>(args: SelectSubset<T, DeliverymanFindUniqueArgs<ExtArgs>>): Prisma__DeliverymanClient<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deliveryman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliverymanFindUniqueOrThrowArgs} args - Arguments to find a Deliveryman
     * @example
     * // Get one Deliveryman
     * const deliveryman = await prisma.deliveryman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliverymanFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliverymanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliverymanClient<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveryman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverymanFindFirstArgs} args - Arguments to find a Deliveryman
     * @example
     * // Get one Deliveryman
     * const deliveryman = await prisma.deliveryman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliverymanFindFirstArgs>(args?: SelectSubset<T, DeliverymanFindFirstArgs<ExtArgs>>): Prisma__DeliverymanClient<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveryman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverymanFindFirstOrThrowArgs} args - Arguments to find a Deliveryman
     * @example
     * // Get one Deliveryman
     * const deliveryman = await prisma.deliveryman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliverymanFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliverymanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliverymanClient<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliverymen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverymanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliverymen
     * const deliverymen = await prisma.deliveryman.findMany()
     * 
     * // Get first 10 Deliverymen
     * const deliverymen = await prisma.deliveryman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliverymanWithIdOnly = await prisma.deliveryman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliverymanFindManyArgs>(args?: SelectSubset<T, DeliverymanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deliveryman.
     * @param {DeliverymanCreateArgs} args - Arguments to create a Deliveryman.
     * @example
     * // Create one Deliveryman
     * const Deliveryman = await prisma.deliveryman.create({
     *   data: {
     *     // ... data to create a Deliveryman
     *   }
     * })
     * 
     */
    create<T extends DeliverymanCreateArgs>(args: SelectSubset<T, DeliverymanCreateArgs<ExtArgs>>): Prisma__DeliverymanClient<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliverymen.
     * @param {DeliverymanCreateManyArgs} args - Arguments to create many Deliverymen.
     * @example
     * // Create many Deliverymen
     * const deliveryman = await prisma.deliveryman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliverymanCreateManyArgs>(args?: SelectSubset<T, DeliverymanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliverymen and returns the data saved in the database.
     * @param {DeliverymanCreateManyAndReturnArgs} args - Arguments to create many Deliverymen.
     * @example
     * // Create many Deliverymen
     * const deliveryman = await prisma.deliveryman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliverymen and only return the `id`
     * const deliverymanWithIdOnly = await prisma.deliveryman.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliverymanCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliverymanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deliveryman.
     * @param {DeliverymanDeleteArgs} args - Arguments to delete one Deliveryman.
     * @example
     * // Delete one Deliveryman
     * const Deliveryman = await prisma.deliveryman.delete({
     *   where: {
     *     // ... filter to delete one Deliveryman
     *   }
     * })
     * 
     */
    delete<T extends DeliverymanDeleteArgs>(args: SelectSubset<T, DeliverymanDeleteArgs<ExtArgs>>): Prisma__DeliverymanClient<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deliveryman.
     * @param {DeliverymanUpdateArgs} args - Arguments to update one Deliveryman.
     * @example
     * // Update one Deliveryman
     * const deliveryman = await prisma.deliveryman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliverymanUpdateArgs>(args: SelectSubset<T, DeliverymanUpdateArgs<ExtArgs>>): Prisma__DeliverymanClient<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliverymen.
     * @param {DeliverymanDeleteManyArgs} args - Arguments to filter Deliverymen to delete.
     * @example
     * // Delete a few Deliverymen
     * const { count } = await prisma.deliveryman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliverymanDeleteManyArgs>(args?: SelectSubset<T, DeliverymanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliverymen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverymanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliverymen
     * const deliveryman = await prisma.deliveryman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliverymanUpdateManyArgs>(args: SelectSubset<T, DeliverymanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliverymen and returns the data updated in the database.
     * @param {DeliverymanUpdateManyAndReturnArgs} args - Arguments to update many Deliverymen.
     * @example
     * // Update many Deliverymen
     * const deliveryman = await prisma.deliveryman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliverymen and only return the `id`
     * const deliverymanWithIdOnly = await prisma.deliveryman.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliverymanUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliverymanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deliveryman.
     * @param {DeliverymanUpsertArgs} args - Arguments to update or create a Deliveryman.
     * @example
     * // Update or create a Deliveryman
     * const deliveryman = await prisma.deliveryman.upsert({
     *   create: {
     *     // ... data to create a Deliveryman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deliveryman we want to update
     *   }
     * })
     */
    upsert<T extends DeliverymanUpsertArgs>(args: SelectSubset<T, DeliverymanUpsertArgs<ExtArgs>>): Prisma__DeliverymanClient<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliverymen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverymanCountArgs} args - Arguments to filter Deliverymen to count.
     * @example
     * // Count the number of Deliverymen
     * const count = await prisma.deliveryman.count({
     *   where: {
     *     // ... the filter for the Deliverymen we want to count
     *   }
     * })
    **/
    count<T extends DeliverymanCountArgs>(
      args?: Subset<T, DeliverymanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliverymanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deliveryman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverymanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliverymanAggregateArgs>(args: Subset<T, DeliverymanAggregateArgs>): Prisma.PrismaPromise<GetDeliverymanAggregateType<T>>

    /**
     * Group by Deliveryman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverymanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliverymanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliverymanGroupByArgs['orderBy'] }
        : { orderBy?: DeliverymanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliverymanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliverymanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deliveryman model
   */
  readonly fields: DeliverymanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deliveryman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliverymanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends Deliveryman$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Deliveryman$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deliveryman model
   */
  interface DeliverymanFieldRefs {
    readonly id: FieldRef<"Deliveryman", 'String'>
    readonly username: FieldRef<"Deliveryman", 'String'>
    readonly password: FieldRef<"Deliveryman", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Deliveryman findUnique
   */
  export type DeliverymanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    /**
     * Filter, which Deliveryman to fetch.
     */
    where: DeliverymanWhereUniqueInput
  }

  /**
   * Deliveryman findUniqueOrThrow
   */
  export type DeliverymanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    /**
     * Filter, which Deliveryman to fetch.
     */
    where: DeliverymanWhereUniqueInput
  }

  /**
   * Deliveryman findFirst
   */
  export type DeliverymanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    /**
     * Filter, which Deliveryman to fetch.
     */
    where?: DeliverymanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverymen to fetch.
     */
    orderBy?: DeliverymanOrderByWithRelationInput | DeliverymanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliverymen.
     */
    cursor?: DeliverymanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverymen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverymen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliverymen.
     */
    distinct?: DeliverymanScalarFieldEnum | DeliverymanScalarFieldEnum[]
  }

  /**
   * Deliveryman findFirstOrThrow
   */
  export type DeliverymanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    /**
     * Filter, which Deliveryman to fetch.
     */
    where?: DeliverymanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverymen to fetch.
     */
    orderBy?: DeliverymanOrderByWithRelationInput | DeliverymanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliverymen.
     */
    cursor?: DeliverymanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverymen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverymen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliverymen.
     */
    distinct?: DeliverymanScalarFieldEnum | DeliverymanScalarFieldEnum[]
  }

  /**
   * Deliveryman findMany
   */
  export type DeliverymanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    /**
     * Filter, which Deliverymen to fetch.
     */
    where?: DeliverymanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverymen to fetch.
     */
    orderBy?: DeliverymanOrderByWithRelationInput | DeliverymanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliverymen.
     */
    cursor?: DeliverymanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverymen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverymen.
     */
    skip?: number
    distinct?: DeliverymanScalarFieldEnum | DeliverymanScalarFieldEnum[]
  }

  /**
   * Deliveryman create
   */
  export type DeliverymanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    /**
     * The data needed to create a Deliveryman.
     */
    data: XOR<DeliverymanCreateInput, DeliverymanUncheckedCreateInput>
  }

  /**
   * Deliveryman createMany
   */
  export type DeliverymanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliverymen.
     */
    data: DeliverymanCreateManyInput | DeliverymanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deliveryman createManyAndReturn
   */
  export type DeliverymanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * The data used to create many Deliverymen.
     */
    data: DeliverymanCreateManyInput | DeliverymanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deliveryman update
   */
  export type DeliverymanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    /**
     * The data needed to update a Deliveryman.
     */
    data: XOR<DeliverymanUpdateInput, DeliverymanUncheckedUpdateInput>
    /**
     * Choose, which Deliveryman to update.
     */
    where: DeliverymanWhereUniqueInput
  }

  /**
   * Deliveryman updateMany
   */
  export type DeliverymanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliverymen.
     */
    data: XOR<DeliverymanUpdateManyMutationInput, DeliverymanUncheckedUpdateManyInput>
    /**
     * Filter which Deliverymen to update
     */
    where?: DeliverymanWhereInput
    /**
     * Limit how many Deliverymen to update.
     */
    limit?: number
  }

  /**
   * Deliveryman updateManyAndReturn
   */
  export type DeliverymanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * The data used to update Deliverymen.
     */
    data: XOR<DeliverymanUpdateManyMutationInput, DeliverymanUncheckedUpdateManyInput>
    /**
     * Filter which Deliverymen to update
     */
    where?: DeliverymanWhereInput
    /**
     * Limit how many Deliverymen to update.
     */
    limit?: number
  }

  /**
   * Deliveryman upsert
   */
  export type DeliverymanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    /**
     * The filter to search for the Deliveryman to update in case it exists.
     */
    where: DeliverymanWhereUniqueInput
    /**
     * In case the Deliveryman found by the `where` argument doesn't exist, create a new Deliveryman with this data.
     */
    create: XOR<DeliverymanCreateInput, DeliverymanUncheckedCreateInput>
    /**
     * In case the Deliveryman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliverymanUpdateInput, DeliverymanUncheckedUpdateInput>
  }

  /**
   * Deliveryman delete
   */
  export type DeliverymanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    /**
     * Filter which Deliveryman to delete.
     */
    where: DeliverymanWhereUniqueInput
  }

  /**
   * Deliveryman deleteMany
   */
  export type DeliverymanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliverymen to delete
     */
    where?: DeliverymanWhereInput
    /**
     * Limit how many Deliverymen to delete.
     */
    limit?: number
  }

  /**
   * Deliveryman.deliveries
   */
  export type Deliveryman$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    cursor?: DeliveriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveryman without action
   */
  export type DeliverymanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
  }


  /**
   * Model Clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type ClientsMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to aggregate.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type ClientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithAggregationInput | ClientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: ClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: string
    username: string
    password: string
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type ClientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    deliveries?: boolean | Clients$deliveriesArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type ClientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["clients"]>
  export type ClientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | Clients$deliveriesArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clients"
    objects: {
      deliveries: Prisma.$DeliveriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type ClientsGetPayload<S extends boolean | null | undefined | ClientsDefaultArgs> = $Result.GetResult<Prisma.$ClientsPayload, S>

  type ClientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface ClientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clients'], meta: { name: 'Clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {ClientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientsFindUniqueArgs>(args: SelectSubset<T, ClientsFindUniqueArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientsFindFirstArgs>(args?: SelectSubset<T, ClientsFindFirstArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientsFindManyArgs>(args?: SelectSubset<T, ClientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clients.
     * @param {ClientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends ClientsCreateArgs>(args: SelectSubset<T, ClientsCreateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientsCreateManyArgs>(args?: SelectSubset<T, ClientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientsCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clients.
     * @param {ClientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends ClientsDeleteArgs>(args: SelectSubset<T, ClientsDeleteArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clients.
     * @param {ClientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientsUpdateArgs>(args: SelectSubset<T, ClientsUpdateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientsDeleteManyArgs>(args?: SelectSubset<T, ClientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientsUpdateManyArgs>(args: SelectSubset<T, ClientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientsUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clients.
     * @param {ClientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends ClientsUpsertArgs>(args: SelectSubset<T, ClientsUpsertArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientsCountArgs>(
      args?: Subset<T, ClientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clients model
   */
  readonly fields: ClientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends Clients$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Clients$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clients model
   */
  interface ClientsFieldRefs {
    readonly id: FieldRef<"Clients", 'String'>
    readonly username: FieldRef<"Clients", 'String'>
    readonly password: FieldRef<"Clients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clients findUnique
   */
  export type ClientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findUniqueOrThrow
   */
  export type ClientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findFirst
   */
  export type ClientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findFirstOrThrow
   */
  export type ClientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findMany
   */
  export type ClientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients create
   */
  export type ClientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clients.
     */
    data: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
  }

  /**
   * Clients createMany
   */
  export type ClientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients createManyAndReturn
   */
  export type ClientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients update
   */
  export type ClientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clients.
     */
    data: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
    /**
     * Choose, which Clients to update.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients updateMany
   */
  export type ClientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients updateManyAndReturn
   */
  export type ClientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients upsert
   */
  export type ClientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clients to update in case it exists.
     */
    where: ClientsWhereUniqueInput
    /**
     * In case the Clients found by the `where` argument doesn't exist, create a new Clients with this data.
     */
    create: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
    /**
     * In case the Clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
  }

  /**
   * Clients delete
   */
  export type ClientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter which Clients to delete.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients deleteMany
   */
  export type ClientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Clients.deliveries
   */
  export type Clients$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    cursor?: DeliveriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Clients without action
   */
  export type ClientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
  }


  /**
   * Model Deliveries
   */

  export type AggregateDeliveries = {
    _count: DeliveriesCountAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  export type DeliveriesMinAggregateOutputType = {
    id: string | null
    id_client: string | null
    id_deliveryman: string | null
    item_name: string | null
    created_at: Date | null
    end_at: Date | null
  }

  export type DeliveriesMaxAggregateOutputType = {
    id: string | null
    id_client: string | null
    id_deliveryman: string | null
    item_name: string | null
    created_at: Date | null
    end_at: Date | null
  }

  export type DeliveriesCountAggregateOutputType = {
    id: number
    id_client: number
    id_deliveryman: number
    item_name: number
    created_at: number
    end_at: number
    _all: number
  }


  export type DeliveriesMinAggregateInputType = {
    id?: true
    id_client?: true
    id_deliveryman?: true
    item_name?: true
    created_at?: true
    end_at?: true
  }

  export type DeliveriesMaxAggregateInputType = {
    id?: true
    id_client?: true
    id_deliveryman?: true
    item_name?: true
    created_at?: true
    end_at?: true
  }

  export type DeliveriesCountAggregateInputType = {
    id?: true
    id_client?: true
    id_deliveryman?: true
    item_name?: true
    created_at?: true
    end_at?: true
    _all?: true
  }

  export type DeliveriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to aggregate.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveriesMaxAggregateInputType
  }

  export type GetDeliveriesAggregateType<T extends DeliveriesAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveries[P]>
      : GetScalarType<T[P], AggregateDeliveries[P]>
  }




  export type DeliveriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithAggregationInput | DeliveriesOrderByWithAggregationInput[]
    by: DeliveriesScalarFieldEnum[] | DeliveriesScalarFieldEnum
    having?: DeliveriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveriesCountAggregateInputType | true
    _min?: DeliveriesMinAggregateInputType
    _max?: DeliveriesMaxAggregateInputType
  }

  export type DeliveriesGroupByOutputType = {
    id: string
    id_client: string
    id_deliveryman: string | null
    item_name: string
    created_at: Date
    end_at: Date | null
    _count: DeliveriesCountAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  type GetDeliveriesGroupByPayload<T extends DeliveriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
        }
      >
    >


  export type DeliveriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_client?: boolean
    id_deliveryman?: boolean
    item_name?: boolean
    created_at?: boolean
    end_at?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    deliveryman?: boolean | Deliveries$deliverymanArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type DeliveriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_client?: boolean
    id_deliveryman?: boolean
    item_name?: boolean
    created_at?: boolean
    end_at?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    deliveryman?: boolean | Deliveries$deliverymanArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type DeliveriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_client?: boolean
    id_deliveryman?: boolean
    item_name?: boolean
    created_at?: boolean
    end_at?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    deliveryman?: boolean | Deliveries$deliverymanArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type DeliveriesSelectScalar = {
    id?: boolean
    id_client?: boolean
    id_deliveryman?: boolean
    item_name?: boolean
    created_at?: boolean
    end_at?: boolean
  }

  export type DeliveriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_client" | "id_deliveryman" | "item_name" | "created_at" | "end_at", ExtArgs["result"]["deliveries"]>
  export type DeliveriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    deliveryman?: boolean | Deliveries$deliverymanArgs<ExtArgs>
  }
  export type DeliveriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    deliveryman?: boolean | Deliveries$deliverymanArgs<ExtArgs>
  }
  export type DeliveriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    deliveryman?: boolean | Deliveries$deliverymanArgs<ExtArgs>
  }

  export type $DeliveriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deliveries"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
      deliveryman: Prisma.$DeliverymanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_client: string
      id_deliveryman: string | null
      item_name: string
      created_at: Date
      end_at: Date | null
    }, ExtArgs["result"]["deliveries"]>
    composites: {}
  }

  type DeliveriesGetPayload<S extends boolean | null | undefined | DeliveriesDefaultArgs> = $Result.GetResult<Prisma.$DeliveriesPayload, S>

  type DeliveriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveriesCountAggregateInputType | true
    }

  export interface DeliveriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deliveries'], meta: { name: 'Deliveries' } }
    /**
     * Find zero or one Deliveries that matches the filter.
     * @param {DeliveriesFindUniqueArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveriesFindUniqueArgs>(args: SelectSubset<T, DeliveriesFindUniqueArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deliveries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveriesFindUniqueOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveriesFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindFirstArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveriesFindFirstArgs>(args?: SelectSubset<T, DeliveriesFindFirstArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindFirstOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveriesFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.deliveries.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.deliveries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveriesFindManyArgs>(args?: SelectSubset<T, DeliveriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deliveries.
     * @param {DeliveriesCreateArgs} args - Arguments to create a Deliveries.
     * @example
     * // Create one Deliveries
     * const Deliveries = await prisma.deliveries.create({
     *   data: {
     *     // ... data to create a Deliveries
     *   }
     * })
     * 
     */
    create<T extends DeliveriesCreateArgs>(args: SelectSubset<T, DeliveriesCreateArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveriesCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const deliveries = await prisma.deliveries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveriesCreateManyArgs>(args?: SelectSubset<T, DeliveriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveriesCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const deliveries = await prisma.deliveries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveriesCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deliveries.
     * @param {DeliveriesDeleteArgs} args - Arguments to delete one Deliveries.
     * @example
     * // Delete one Deliveries
     * const Deliveries = await prisma.deliveries.delete({
     *   where: {
     *     // ... filter to delete one Deliveries
     *   }
     * })
     * 
     */
    delete<T extends DeliveriesDeleteArgs>(args: SelectSubset<T, DeliveriesDeleteArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deliveries.
     * @param {DeliveriesUpdateArgs} args - Arguments to update one Deliveries.
     * @example
     * // Update one Deliveries
     * const deliveries = await prisma.deliveries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveriesUpdateArgs>(args: SelectSubset<T, DeliveriesUpdateArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveriesDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.deliveries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveriesDeleteManyArgs>(args?: SelectSubset<T, DeliveriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const deliveries = await prisma.deliveries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveriesUpdateManyArgs>(args: SelectSubset<T, DeliveriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {DeliveriesUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const deliveries = await prisma.deliveries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveriesUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deliveries.
     * @param {DeliveriesUpsertArgs} args - Arguments to update or create a Deliveries.
     * @example
     * // Update or create a Deliveries
     * const deliveries = await prisma.deliveries.upsert({
     *   create: {
     *     // ... data to create a Deliveries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deliveries we want to update
     *   }
     * })
     */
    upsert<T extends DeliveriesUpsertArgs>(args: SelectSubset<T, DeliveriesUpsertArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.deliveries.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveriesCountArgs>(
      args?: Subset<T, DeliveriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveriesAggregateArgs>(args: Subset<T, DeliveriesAggregateArgs>): Prisma.PrismaPromise<GetDeliveriesAggregateType<T>>

    /**
     * Group by Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveriesGroupByArgs['orderBy'] }
        : { orderBy?: DeliveriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deliveries model
   */
  readonly fields: DeliveriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deliveries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliveryman<T extends Deliveries$deliverymanArgs<ExtArgs> = {}>(args?: Subset<T, Deliveries$deliverymanArgs<ExtArgs>>): Prisma__DeliverymanClient<$Result.GetResult<Prisma.$DeliverymanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deliveries model
   */
  interface DeliveriesFieldRefs {
    readonly id: FieldRef<"Deliveries", 'String'>
    readonly id_client: FieldRef<"Deliveries", 'String'>
    readonly id_deliveryman: FieldRef<"Deliveries", 'String'>
    readonly item_name: FieldRef<"Deliveries", 'String'>
    readonly created_at: FieldRef<"Deliveries", 'DateTime'>
    readonly end_at: FieldRef<"Deliveries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deliveries findUnique
   */
  export type DeliveriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries findUniqueOrThrow
   */
  export type DeliveriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries findFirst
   */
  export type DeliveriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries findFirstOrThrow
   */
  export type DeliveriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries findMany
   */
  export type DeliveriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries create
   */
  export type DeliveriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Deliveries.
     */
    data: XOR<DeliveriesCreateInput, DeliveriesUncheckedCreateInput>
  }

  /**
   * Deliveries createMany
   */
  export type DeliveriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveriesCreateManyInput | DeliveriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deliveries createManyAndReturn
   */
  export type DeliveriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveriesCreateManyInput | DeliveriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliveries update
   */
  export type DeliveriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Deliveries.
     */
    data: XOR<DeliveriesUpdateInput, DeliveriesUncheckedUpdateInput>
    /**
     * Choose, which Deliveries to update.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries updateMany
   */
  export type DeliveriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Deliveries updateManyAndReturn
   */
  export type DeliveriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliveries upsert
   */
  export type DeliveriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Deliveries to update in case it exists.
     */
    where: DeliveriesWhereUniqueInput
    /**
     * In case the Deliveries found by the `where` argument doesn't exist, create a new Deliveries with this data.
     */
    create: XOR<DeliveriesCreateInput, DeliveriesUncheckedCreateInput>
    /**
     * In case the Deliveries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveriesUpdateInput, DeliveriesUncheckedUpdateInput>
  }

  /**
   * Deliveries delete
   */
  export type DeliveriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter which Deliveries to delete.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries deleteMany
   */
  export type DeliveriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Deliveries.deliveryman
   */
  export type Deliveries$deliverymanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveryman
     */
    select?: DeliverymanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveryman
     */
    omit?: DeliverymanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverymanInclude<ExtArgs> | null
    where?: DeliverymanWhereInput
  }

  /**
   * Deliveries without action
   */
  export type DeliveriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DeliverymanScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type DeliverymanScalarFieldEnum = (typeof DeliverymanScalarFieldEnum)[keyof typeof DeliverymanScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const DeliveriesScalarFieldEnum: {
    id: 'id',
    id_client: 'id_client',
    id_deliveryman: 'id_deliveryman',
    item_name: 'item_name',
    created_at: 'created_at',
    end_at: 'end_at'
  };

  export type DeliveriesScalarFieldEnum = (typeof DeliveriesScalarFieldEnum)[keyof typeof DeliveriesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DeliverymanWhereInput = {
    AND?: DeliverymanWhereInput | DeliverymanWhereInput[]
    OR?: DeliverymanWhereInput[]
    NOT?: DeliverymanWhereInput | DeliverymanWhereInput[]
    id?: StringFilter<"Deliveryman"> | string
    username?: StringFilter<"Deliveryman"> | string
    password?: StringFilter<"Deliveryman"> | string
    deliveries?: DeliveriesListRelationFilter
  }

  export type DeliverymanOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    deliveries?: DeliveriesOrderByRelationAggregateInput
  }

  export type DeliverymanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: DeliverymanWhereInput | DeliverymanWhereInput[]
    OR?: DeliverymanWhereInput[]
    NOT?: DeliverymanWhereInput | DeliverymanWhereInput[]
    password?: StringFilter<"Deliveryman"> | string
    deliveries?: DeliveriesListRelationFilter
  }, "id" | "username">

  export type DeliverymanOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: DeliverymanCountOrderByAggregateInput
    _max?: DeliverymanMaxOrderByAggregateInput
    _min?: DeliverymanMinOrderByAggregateInput
  }

  export type DeliverymanScalarWhereWithAggregatesInput = {
    AND?: DeliverymanScalarWhereWithAggregatesInput | DeliverymanScalarWhereWithAggregatesInput[]
    OR?: DeliverymanScalarWhereWithAggregatesInput[]
    NOT?: DeliverymanScalarWhereWithAggregatesInput | DeliverymanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deliveryman"> | string
    username?: StringWithAggregatesFilter<"Deliveryman"> | string
    password?: StringWithAggregatesFilter<"Deliveryman"> | string
  }

  export type ClientsWhereInput = {
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    id?: StringFilter<"Clients"> | string
    username?: StringFilter<"Clients"> | string
    password?: StringFilter<"Clients"> | string
    deliveries?: DeliveriesListRelationFilter
  }

  export type ClientsOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    deliveries?: DeliveriesOrderByRelationAggregateInput
  }

  export type ClientsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    password?: StringFilter<"Clients"> | string
    deliveries?: DeliveriesListRelationFilter
  }, "id" | "username">

  export type ClientsOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: ClientsCountOrderByAggregateInput
    _max?: ClientsMaxOrderByAggregateInput
    _min?: ClientsMinOrderByAggregateInput
  }

  export type ClientsScalarWhereWithAggregatesInput = {
    AND?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    OR?: ClientsScalarWhereWithAggregatesInput[]
    NOT?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clients"> | string
    username?: StringWithAggregatesFilter<"Clients"> | string
    password?: StringWithAggregatesFilter<"Clients"> | string
  }

  export type DeliveriesWhereInput = {
    AND?: DeliveriesWhereInput | DeliveriesWhereInput[]
    OR?: DeliveriesWhereInput[]
    NOT?: DeliveriesWhereInput | DeliveriesWhereInput[]
    id?: StringFilter<"Deliveries"> | string
    id_client?: StringFilter<"Deliveries"> | string
    id_deliveryman?: StringNullableFilter<"Deliveries"> | string | null
    item_name?: StringFilter<"Deliveries"> | string
    created_at?: DateTimeFilter<"Deliveries"> | Date | string
    end_at?: DateTimeNullableFilter<"Deliveries"> | Date | string | null
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    deliveryman?: XOR<DeliverymanNullableScalarRelationFilter, DeliverymanWhereInput> | null
  }

  export type DeliveriesOrderByWithRelationInput = {
    id?: SortOrder
    id_client?: SortOrder
    id_deliveryman?: SortOrderInput | SortOrder
    item_name?: SortOrder
    created_at?: SortOrder
    end_at?: SortOrderInput | SortOrder
    client?: ClientsOrderByWithRelationInput
    deliveryman?: DeliverymanOrderByWithRelationInput
  }

  export type DeliveriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveriesWhereInput | DeliveriesWhereInput[]
    OR?: DeliveriesWhereInput[]
    NOT?: DeliveriesWhereInput | DeliveriesWhereInput[]
    id_client?: StringFilter<"Deliveries"> | string
    id_deliveryman?: StringNullableFilter<"Deliveries"> | string | null
    item_name?: StringFilter<"Deliveries"> | string
    created_at?: DateTimeFilter<"Deliveries"> | Date | string
    end_at?: DateTimeNullableFilter<"Deliveries"> | Date | string | null
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    deliveryman?: XOR<DeliverymanNullableScalarRelationFilter, DeliverymanWhereInput> | null
  }, "id">

  export type DeliveriesOrderByWithAggregationInput = {
    id?: SortOrder
    id_client?: SortOrder
    id_deliveryman?: SortOrderInput | SortOrder
    item_name?: SortOrder
    created_at?: SortOrder
    end_at?: SortOrderInput | SortOrder
    _count?: DeliveriesCountOrderByAggregateInput
    _max?: DeliveriesMaxOrderByAggregateInput
    _min?: DeliveriesMinOrderByAggregateInput
  }

  export type DeliveriesScalarWhereWithAggregatesInput = {
    AND?: DeliveriesScalarWhereWithAggregatesInput | DeliveriesScalarWhereWithAggregatesInput[]
    OR?: DeliveriesScalarWhereWithAggregatesInput[]
    NOT?: DeliveriesScalarWhereWithAggregatesInput | DeliveriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deliveries"> | string
    id_client?: StringWithAggregatesFilter<"Deliveries"> | string
    id_deliveryman?: StringNullableWithAggregatesFilter<"Deliveries"> | string | null
    item_name?: StringWithAggregatesFilter<"Deliveries"> | string
    created_at?: DateTimeWithAggregatesFilter<"Deliveries"> | Date | string
    end_at?: DateTimeNullableWithAggregatesFilter<"Deliveries"> | Date | string | null
  }

  export type DeliverymanCreateInput = {
    id?: string
    username: string
    password: string
    deliveries?: DeliveriesCreateNestedManyWithoutDeliverymanInput
  }

  export type DeliverymanUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    deliveries?: DeliveriesUncheckedCreateNestedManyWithoutDeliverymanInput
  }

  export type DeliverymanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deliveries?: DeliveriesUpdateManyWithoutDeliverymanNestedInput
  }

  export type DeliverymanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deliveries?: DeliveriesUncheckedUpdateManyWithoutDeliverymanNestedInput
  }

  export type DeliverymanCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type DeliverymanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DeliverymanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsCreateInput = {
    id?: string
    username: string
    password: string
    deliveries?: DeliveriesCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    deliveries?: DeliveriesUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deliveries?: DeliveriesUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deliveries?: DeliveriesUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type ClientsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveriesCreateInput = {
    id?: string
    item_name: string
    created_at?: Date | string
    end_at?: Date | string | null
    client: ClientsCreateNestedOneWithoutDeliveriesInput
    deliveryman?: DeliverymanCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateInput = {
    id?: string
    id_client: string
    id_deliveryman?: string | null
    item_name: string
    created_at?: Date | string
    end_at?: Date | string | null
  }

  export type DeliveriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientsUpdateOneRequiredWithoutDeliveriesNestedInput
    deliveryman?: DeliverymanUpdateOneWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_client?: StringFieldUpdateOperationsInput | string
    id_deliveryman?: NullableStringFieldUpdateOperationsInput | string | null
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveriesCreateManyInput = {
    id?: string
    id_client: string
    id_deliveryman?: string | null
    item_name: string
    created_at?: Date | string
    end_at?: Date | string | null
  }

  export type DeliveriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_client?: StringFieldUpdateOperationsInput | string
    id_deliveryman?: NullableStringFieldUpdateOperationsInput | string | null
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DeliveriesListRelationFilter = {
    every?: DeliveriesWhereInput
    some?: DeliveriesWhereInput
    none?: DeliveriesWhereInput
  }

  export type DeliveriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliverymanCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type DeliverymanMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type DeliverymanMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ClientsCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type ClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type ClientsMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClientsScalarRelationFilter = {
    is?: ClientsWhereInput
    isNot?: ClientsWhereInput
  }

  export type DeliverymanNullableScalarRelationFilter = {
    is?: DeliverymanWhereInput | null
    isNot?: DeliverymanWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeliveriesCountOrderByAggregateInput = {
    id?: SortOrder
    id_client?: SortOrder
    id_deliveryman?: SortOrder
    item_name?: SortOrder
    created_at?: SortOrder
    end_at?: SortOrder
  }

  export type DeliveriesMaxOrderByAggregateInput = {
    id?: SortOrder
    id_client?: SortOrder
    id_deliveryman?: SortOrder
    item_name?: SortOrder
    created_at?: SortOrder
    end_at?: SortOrder
  }

  export type DeliveriesMinOrderByAggregateInput = {
    id?: SortOrder
    id_client?: SortOrder
    id_deliveryman?: SortOrder
    item_name?: SortOrder
    created_at?: SortOrder
    end_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DeliveriesCreateNestedManyWithoutDeliverymanInput = {
    create?: XOR<DeliveriesCreateWithoutDeliverymanInput, DeliveriesUncheckedCreateWithoutDeliverymanInput> | DeliveriesCreateWithoutDeliverymanInput[] | DeliveriesUncheckedCreateWithoutDeliverymanInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutDeliverymanInput | DeliveriesCreateOrConnectWithoutDeliverymanInput[]
    createMany?: DeliveriesCreateManyDeliverymanInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type DeliveriesUncheckedCreateNestedManyWithoutDeliverymanInput = {
    create?: XOR<DeliveriesCreateWithoutDeliverymanInput, DeliveriesUncheckedCreateWithoutDeliverymanInput> | DeliveriesCreateWithoutDeliverymanInput[] | DeliveriesUncheckedCreateWithoutDeliverymanInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutDeliverymanInput | DeliveriesCreateOrConnectWithoutDeliverymanInput[]
    createMany?: DeliveriesCreateManyDeliverymanInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DeliveriesUpdateManyWithoutDeliverymanNestedInput = {
    create?: XOR<DeliveriesCreateWithoutDeliverymanInput, DeliveriesUncheckedCreateWithoutDeliverymanInput> | DeliveriesCreateWithoutDeliverymanInput[] | DeliveriesUncheckedCreateWithoutDeliverymanInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutDeliverymanInput | DeliveriesCreateOrConnectWithoutDeliverymanInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutDeliverymanInput | DeliveriesUpsertWithWhereUniqueWithoutDeliverymanInput[]
    createMany?: DeliveriesCreateManyDeliverymanInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutDeliverymanInput | DeliveriesUpdateWithWhereUniqueWithoutDeliverymanInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutDeliverymanInput | DeliveriesUpdateManyWithWhereWithoutDeliverymanInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type DeliveriesUncheckedUpdateManyWithoutDeliverymanNestedInput = {
    create?: XOR<DeliveriesCreateWithoutDeliverymanInput, DeliveriesUncheckedCreateWithoutDeliverymanInput> | DeliveriesCreateWithoutDeliverymanInput[] | DeliveriesUncheckedCreateWithoutDeliverymanInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutDeliverymanInput | DeliveriesCreateOrConnectWithoutDeliverymanInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutDeliverymanInput | DeliveriesUpsertWithWhereUniqueWithoutDeliverymanInput[]
    createMany?: DeliveriesCreateManyDeliverymanInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutDeliverymanInput | DeliveriesUpdateWithWhereUniqueWithoutDeliverymanInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutDeliverymanInput | DeliveriesUpdateManyWithWhereWithoutDeliverymanInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type DeliveriesCreateNestedManyWithoutClientInput = {
    create?: XOR<DeliveriesCreateWithoutClientInput, DeliveriesUncheckedCreateWithoutClientInput> | DeliveriesCreateWithoutClientInput[] | DeliveriesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutClientInput | DeliveriesCreateOrConnectWithoutClientInput[]
    createMany?: DeliveriesCreateManyClientInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type DeliveriesUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DeliveriesCreateWithoutClientInput, DeliveriesUncheckedCreateWithoutClientInput> | DeliveriesCreateWithoutClientInput[] | DeliveriesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutClientInput | DeliveriesCreateOrConnectWithoutClientInput[]
    createMany?: DeliveriesCreateManyClientInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type DeliveriesUpdateManyWithoutClientNestedInput = {
    create?: XOR<DeliveriesCreateWithoutClientInput, DeliveriesUncheckedCreateWithoutClientInput> | DeliveriesCreateWithoutClientInput[] | DeliveriesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutClientInput | DeliveriesCreateOrConnectWithoutClientInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutClientInput | DeliveriesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DeliveriesCreateManyClientInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutClientInput | DeliveriesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutClientInput | DeliveriesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type DeliveriesUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DeliveriesCreateWithoutClientInput, DeliveriesUncheckedCreateWithoutClientInput> | DeliveriesCreateWithoutClientInput[] | DeliveriesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutClientInput | DeliveriesCreateOrConnectWithoutClientInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutClientInput | DeliveriesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DeliveriesCreateManyClientInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutClientInput | DeliveriesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutClientInput | DeliveriesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type ClientsCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<ClientsCreateWithoutDeliveriesInput, ClientsUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutDeliveriesInput
    connect?: ClientsWhereUniqueInput
  }

  export type DeliverymanCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<DeliverymanCreateWithoutDeliveriesInput, DeliverymanUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: DeliverymanCreateOrConnectWithoutDeliveriesInput
    connect?: DeliverymanWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClientsUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<ClientsCreateWithoutDeliveriesInput, ClientsUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutDeliveriesInput
    upsert?: ClientsUpsertWithoutDeliveriesInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutDeliveriesInput, ClientsUpdateWithoutDeliveriesInput>, ClientsUncheckedUpdateWithoutDeliveriesInput>
  }

  export type DeliverymanUpdateOneWithoutDeliveriesNestedInput = {
    create?: XOR<DeliverymanCreateWithoutDeliveriesInput, DeliverymanUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: DeliverymanCreateOrConnectWithoutDeliveriesInput
    upsert?: DeliverymanUpsertWithoutDeliveriesInput
    disconnect?: DeliverymanWhereInput | boolean
    delete?: DeliverymanWhereInput | boolean
    connect?: DeliverymanWhereUniqueInput
    update?: XOR<XOR<DeliverymanUpdateToOneWithWhereWithoutDeliveriesInput, DeliverymanUpdateWithoutDeliveriesInput>, DeliverymanUncheckedUpdateWithoutDeliveriesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DeliveriesCreateWithoutDeliverymanInput = {
    id?: string
    item_name: string
    created_at?: Date | string
    end_at?: Date | string | null
    client: ClientsCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateWithoutDeliverymanInput = {
    id?: string
    id_client: string
    item_name: string
    created_at?: Date | string
    end_at?: Date | string | null
  }

  export type DeliveriesCreateOrConnectWithoutDeliverymanInput = {
    where: DeliveriesWhereUniqueInput
    create: XOR<DeliveriesCreateWithoutDeliverymanInput, DeliveriesUncheckedCreateWithoutDeliverymanInput>
  }

  export type DeliveriesCreateManyDeliverymanInputEnvelope = {
    data: DeliveriesCreateManyDeliverymanInput | DeliveriesCreateManyDeliverymanInput[]
    skipDuplicates?: boolean
  }

  export type DeliveriesUpsertWithWhereUniqueWithoutDeliverymanInput = {
    where: DeliveriesWhereUniqueInput
    update: XOR<DeliveriesUpdateWithoutDeliverymanInput, DeliveriesUncheckedUpdateWithoutDeliverymanInput>
    create: XOR<DeliveriesCreateWithoutDeliverymanInput, DeliveriesUncheckedCreateWithoutDeliverymanInput>
  }

  export type DeliveriesUpdateWithWhereUniqueWithoutDeliverymanInput = {
    where: DeliveriesWhereUniqueInput
    data: XOR<DeliveriesUpdateWithoutDeliverymanInput, DeliveriesUncheckedUpdateWithoutDeliverymanInput>
  }

  export type DeliveriesUpdateManyWithWhereWithoutDeliverymanInput = {
    where: DeliveriesScalarWhereInput
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyWithoutDeliverymanInput>
  }

  export type DeliveriesScalarWhereInput = {
    AND?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
    OR?: DeliveriesScalarWhereInput[]
    NOT?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
    id?: StringFilter<"Deliveries"> | string
    id_client?: StringFilter<"Deliveries"> | string
    id_deliveryman?: StringNullableFilter<"Deliveries"> | string | null
    item_name?: StringFilter<"Deliveries"> | string
    created_at?: DateTimeFilter<"Deliveries"> | Date | string
    end_at?: DateTimeNullableFilter<"Deliveries"> | Date | string | null
  }

  export type DeliveriesCreateWithoutClientInput = {
    id?: string
    item_name: string
    created_at?: Date | string
    end_at?: Date | string | null
    deliveryman?: DeliverymanCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateWithoutClientInput = {
    id?: string
    id_deliveryman?: string | null
    item_name: string
    created_at?: Date | string
    end_at?: Date | string | null
  }

  export type DeliveriesCreateOrConnectWithoutClientInput = {
    where: DeliveriesWhereUniqueInput
    create: XOR<DeliveriesCreateWithoutClientInput, DeliveriesUncheckedCreateWithoutClientInput>
  }

  export type DeliveriesCreateManyClientInputEnvelope = {
    data: DeliveriesCreateManyClientInput | DeliveriesCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type DeliveriesUpsertWithWhereUniqueWithoutClientInput = {
    where: DeliveriesWhereUniqueInput
    update: XOR<DeliveriesUpdateWithoutClientInput, DeliveriesUncheckedUpdateWithoutClientInput>
    create: XOR<DeliveriesCreateWithoutClientInput, DeliveriesUncheckedCreateWithoutClientInput>
  }

  export type DeliveriesUpdateWithWhereUniqueWithoutClientInput = {
    where: DeliveriesWhereUniqueInput
    data: XOR<DeliveriesUpdateWithoutClientInput, DeliveriesUncheckedUpdateWithoutClientInput>
  }

  export type DeliveriesUpdateManyWithWhereWithoutClientInput = {
    where: DeliveriesScalarWhereInput
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientsCreateWithoutDeliveriesInput = {
    id?: string
    username: string
    password: string
  }

  export type ClientsUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    username: string
    password: string
  }

  export type ClientsCreateOrConnectWithoutDeliveriesInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutDeliveriesInput, ClientsUncheckedCreateWithoutDeliveriesInput>
  }

  export type DeliverymanCreateWithoutDeliveriesInput = {
    id?: string
    username: string
    password: string
  }

  export type DeliverymanUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    username: string
    password: string
  }

  export type DeliverymanCreateOrConnectWithoutDeliveriesInput = {
    where: DeliverymanWhereUniqueInput
    create: XOR<DeliverymanCreateWithoutDeliveriesInput, DeliverymanUncheckedCreateWithoutDeliveriesInput>
  }

  export type ClientsUpsertWithoutDeliveriesInput = {
    update: XOR<ClientsUpdateWithoutDeliveriesInput, ClientsUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<ClientsCreateWithoutDeliveriesInput, ClientsUncheckedCreateWithoutDeliveriesInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutDeliveriesInput, ClientsUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ClientsUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DeliverymanUpsertWithoutDeliveriesInput = {
    update: XOR<DeliverymanUpdateWithoutDeliveriesInput, DeliverymanUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<DeliverymanCreateWithoutDeliveriesInput, DeliverymanUncheckedCreateWithoutDeliveriesInput>
    where?: DeliverymanWhereInput
  }

  export type DeliverymanUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: DeliverymanWhereInput
    data: XOR<DeliverymanUpdateWithoutDeliveriesInput, DeliverymanUncheckedUpdateWithoutDeliveriesInput>
  }

  export type DeliverymanUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DeliverymanUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveriesCreateManyDeliverymanInput = {
    id?: string
    id_client: string
    item_name: string
    created_at?: Date | string
    end_at?: Date | string | null
  }

  export type DeliveriesUpdateWithoutDeliverymanInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientsUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateWithoutDeliverymanInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_client?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveriesUncheckedUpdateManyWithoutDeliverymanInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_client?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveriesCreateManyClientInput = {
    id?: string
    id_deliveryman?: string | null
    item_name: string
    created_at?: Date | string
    end_at?: Date | string | null
  }

  export type DeliveriesUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryman?: DeliverymanUpdateOneWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_deliveryman?: NullableStringFieldUpdateOperationsInput | string | null
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveriesUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_deliveryman?: NullableStringFieldUpdateOperationsInput | string | null
    item_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}