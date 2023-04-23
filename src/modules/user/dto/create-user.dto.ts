import { MaxLength, IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  last_name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password_confirm: string;
}
