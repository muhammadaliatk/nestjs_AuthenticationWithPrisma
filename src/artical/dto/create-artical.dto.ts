export class CreateArticalDto {
  title: string;
  description?: string;
  body?: string;
  published?: boolean = false;
}
