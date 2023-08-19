// import { Dto } from "libs/notification-state-db/src/lib/dto/dto";
// import {RegistrationDto} from "../../../../../../libs/dto/src/dtos/registration.dto/registration.dto";

export class RegistrationCommand {
  constructor(
   public readonly name: string ,
   public readonly email?: string,
   public readonly phone?: string
  )
  {}
}
