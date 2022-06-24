// This file is for types exposed as part of the API.

// deno-lint-ignore-file no-empty-enum

export type Constructor<T> = (...args: unknown[]) => T;

export enum i8 {}
export const I8 = Symbol("i8");
export enum u8 {}
export const U8 = Symbol("u8");
export enum i16 {}
export const I16 = Symbol("i16");
export enum u16 {}
export const U16 = Symbol("u16");
export enum i32 {}
export const I32 = Symbol("i32");
export enum u32 {}
export const U32 = Symbol("u32");
export enum i64 {}
export const I64 = Symbol("i64");
export enum u64 {}
export const U64 = Symbol("u64");
export enum f32 {}
export const F32 = Symbol("f32");
export enum f64 {}
export const F64 = Symbol("f64");
export enum int {}
export const Int = Symbol("int");

export type PrimitiveType =
  | i8
  | u8
  | i16
  | u16
  | i32
  | u32
  | i64
  | u64
  | f32
  | f64
  | int;

export type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;

// TODO: Move this to it's own file as it's not generic.
export type RWMode = "a" | "a+" | "r" | "r+" | "w" | "w+" | "ab" | "ab+" | "rb" | "rb+" | "wb" | "wb+";
