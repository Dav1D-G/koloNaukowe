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
