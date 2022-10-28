import { 
    IsString, 
    IsNotEmpty, 
    IsEmail, 
    MinLength, 
    MaxLength, 
    IsNumber 
} from "class-validator";


export class CreateRegisterDTO {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsString()
    site: string;

    @IsNumber()
    @MinLength(13)
    @MaxLength(14)
    phone: number;
    
}


