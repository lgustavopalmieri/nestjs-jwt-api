import { MaxLength, IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  password_confirm: string;
}
