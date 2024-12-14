/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChapterUpdateManyWithoutComicsInput } from "./ChapterUpdateManyWithoutComicsInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumComicGenres } from "./EnumComicGenres";
import { EnumComicStatus } from "./EnumComicStatus";
import { EnumComicTags } from "./EnumComicTags";

@InputType()
class ComicUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ChapterUpdateManyWithoutComicsInput,
  })
  @ValidateNested()
  @Type(() => ChapterUpdateManyWithoutComicsInput)
  @IsOptional()
  @Field(() => ChapterUpdateManyWithoutComicsInput, {
    nullable: true,
  })
  chapters?: ChapterUpdateManyWithoutComicsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  cover?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumComicGenres,
    isArray: true,
  })
  @IsEnum(EnumComicGenres, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumComicGenres], {
    nullable: true,
  })
  genres?: Array<"Option1">;

  @ApiProperty({
    required: false,
    enum: EnumComicStatus,
  })
  @IsEnum(EnumComicStatus)
  @IsOptional()
  @Field(() => EnumComicStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  summary?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumComicTags,
    isArray: true,
  })
  @IsEnum(EnumComicTags, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumComicTags], {
    nullable: true,
  })
  tags?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ComicUpdateInput as ComicUpdateInput };
