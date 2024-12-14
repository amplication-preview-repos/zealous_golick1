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
import { ComicWhereUniqueInput } from "../../comic/base/ComicWhereUniqueInput";

import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsInt,
  Min,
  Max,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumChapterImages } from "./EnumChapterImages";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ChapterCreateInput {
  @ApiProperty({
    required: false,
    type: () => ComicWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ComicWhereUniqueInput)
  @IsOptional()
  @Field(() => ComicWhereUniqueInput, {
    nullable: true,
  })
  comic?: ComicWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumChapterImages,
    isArray: true,
  })
  @IsEnum(EnumChapterImages, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumChapterImages], {
    nullable: true,
  })
  images?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberField?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  releaseDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  thumbnail?: InputJsonValue;

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

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updateDate?: Date | null;
}

export { ChapterCreateInput as ChapterCreateInput };
