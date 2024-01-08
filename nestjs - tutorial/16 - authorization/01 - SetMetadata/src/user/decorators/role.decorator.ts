import { SetMetadata } from "@nestjs/common"

export const Roles = (...roles:string[])=> {
    console.log(roles)
    return SetMetadata('roles' ,roles )
}
