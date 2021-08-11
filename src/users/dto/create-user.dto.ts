import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@example.com", description: "user email" })
  @IsString({ message: "Must be string" })
  @IsEmail({}, { message: "incorrect email" })
  readonly email: string;
  @ApiProperty({ example: "123456", description: "user password" })
  @IsString({ message: "Must be string" })
  @Length(4, 16, { message: "not less 4 and not more 16" })
  readonly password: string;
}
