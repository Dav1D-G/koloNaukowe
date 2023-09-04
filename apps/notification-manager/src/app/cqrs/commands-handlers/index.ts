<<<<<<< HEAD
import { CreatePostHandler } from './RegistrationStateCommandHandler';
import { CreateTemplateCommandHandler } from './CreateTemplateCommandHandler';
import { RegistrationEmailCommandHandler } from './RegistationEmailCommandHandler';
import { RegistrationSmsCommandHandler } from './RegistrationSmsCommandHandler';

export const ParamCommandHandler = [
  CreatePostHandler,
  CreateTemplateCommandHandler,
  RegistrationEmailCommandHandler,
  RegistrationSmsCommandHandler
];
=======
import { CreatePostHandler } from './registrationCommandHandler';
import { GetUserHandler } from './getUserCommandHandler';

export const ParamCommandHandler = [CreatePostHandler,GetUserHandler];
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
