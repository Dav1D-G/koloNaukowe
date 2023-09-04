import {RegisterEmailEventHandler} from './handlers/RegisterEmail.handler'
import { RegisterSmsEventHandler } from './handlers/RegistrationSms.handler'
import { UpdateStateEventHandler } from './handlers/UpdateState.handler'

export const EventHandlers = [RegisterEmailEventHandler , RegisterSmsEventHandler , UpdateStateEventHandler ]